<script setup lang="ts">
import { useMap } from "../composables/useMaps";
import { useMgrs } from "../composables/useMgrs";
const { map } = useMap();
const { mgrs, lat, lng, visible } = useMgrs(map);

function formatLat(value: number): string {
  return `${Math.abs(value).toFixed(5)}${value >= 0 ? "N" : "S"}`;
}

function formatLng(value: number): string {
  return `${Math.abs(value).toFixed(5)}${value >= 0 ? "E" : "W"}`;
}
</script>
<template>
  <div class="panel interactive mgrs-readout" v-show="visible">
    <p class="mgrs-readout__line">{{ mgrs }}</p>
    <p class="mgrs-readout__line mgrs-readout__line--secondary">
      {{ formatLat(lat) }}, {{ formatLng(lng) }}
    </p>
  </div>
</template>
<style scoped lang="scss">
.mgrs-readout {
  display: flex;
  flex-direction: column;
}
.mgrs-readout__line {
  font-family: var(--mono);
  padding: var(--padding-elements);
}
.mgrs-readout__line--secondary {
  color: var(--text-dim);
}
</style>
