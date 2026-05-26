import { ref } from "vue";

export function useCot() {
  const status = ref<string>("");

  function parse(xml: string) {
    status.value = `Parsed: received ${xml.length} characters`;
  }
  return { status, parse };
}
