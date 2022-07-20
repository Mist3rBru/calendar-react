export function setStorage (key: string, value?: object) {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.removeItem(key)
  }
}

export function getStorage<T = unknown> (key: string): T | null {
  const item = localStorage.getItem(key)
  return JSON.parse(item as string)
}
