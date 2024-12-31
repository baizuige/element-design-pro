export function getSysStorage() {
  const version = localStorage.getItem('version') || import.meta.env.VITE_VERSION
  return localStorage.getItem(`sys-${version}`) as any
}