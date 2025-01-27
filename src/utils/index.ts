export function getStorage(key: string) {
  const value = localStorage.getItem(key)
  if (!value) return null
  return JSON.parse(value)
}

export function setStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}
