<script lang="ts" setup>
import { ref } from "vue";
import { SAMPLE_COT } from "../lib/sample-cot";
import { useCot } from "../composables/useCot";

const { status, parse } = useCot();
const xmlInput = ref<string>(SAMPLE_COT);
</script>
<template>
  <div class="cot-panel panel interactive">
    <h2 class="panel__title">Cursor on Target</h2>
    <div class="cot-panel__input-row">
      <textarea class="cot-panel__textarea" v-model="xmlInput"></textarea>
      <button class="btn" @click="parse(xmlInput)">Parse</button>
    </div>
    <span v-show="status" class="cot-panel__status">{{ status }}</span>
  </div>
</template>
<style scoped lang="scss">
.cot-panel {
  display: flex;
  flex-direction: column;
  gap: var(--gap-elements);
}
.cot-panel__input-row {
  display: flex;
  flex-direction: row;
  gap: var(--gap-elements);
  align-items: flex-start;
}
.cot-panel__textarea {
  font-size: var(--font-textarea);
  padding: var(--padding-elements);
  flex: 1;
  min-height: 120px; // CoT XML is multi-line; needs room
  resize: vertical;
}
.cot-panel__status {
  color: var(--accent);
}
</style>
