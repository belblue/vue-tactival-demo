import { ref, watch, onWatcherCleanup } from "vue";
import type { Ref } from "vue";
import type maplibregl from "maplibre-gl";
import { forward } from "mgrs";
import { formatMgrs } from "../lib/mgrs-format";

export function useMgrs(mapRef: Ref<maplibregl.Map | null>) {
  const mgrs = ref<string>("");
  const lat = ref<number>(0);
  const lng = ref<number>(0);
  const visible = ref<boolean>(false);

  watch(
    mapRef,
    (map) => {
      if (!map) return;

      function handleMove(e: maplibregl.MapMouseEvent) {
        lat.value = e.lngLat.lat;
        lng.value = e.lngLat.lng;
        mgrs.value = formatMgrs(forward([lng.value, lat.value], 5));
        visible.value = true;
      }
      map.on("mousemove", handleMove);

      onWatcherCleanup(() => {
        map.off("mousemove", handleMove);
      });
    },
    { immediate: true },
  );
  return { mgrs, lat, lng, visible };
}
