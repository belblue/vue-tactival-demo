export function formatMgrs(raw: string): string {
  return raw.replace(/^(\d{1,2}[C-X])([A-Z]{2})(\d{5})(\d{5})$/, "$1$2 $3 $4");
}
