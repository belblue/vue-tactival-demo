import type maplibregl from "maplibre-gl";
import { shallowRef } from "vue";
import { formatMgrs } from "../lib/mgrs-format";
const map = shallowRef<maplibregl.Map | null>(null);

export function useMap() {
  return {
    map: map,
    setMap(instance: maplibregl.Map | null) {
      map.value = instance;
    },
  };
}
