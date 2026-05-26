import { ref } from "vue";

export type Standard = "APP6" | "2525C";

const currentStandard = ref<Standard>("APP6");

export function useStandard() {
  return {
    currentStandard,
    setStandard(value: Standard) {
      currentStandard.value = value;
    },
  };
}
