import { useEffect } from "react"

const useLocalStorageOnUnload = (
  storageItemTitle: string,
  itemToStore: any
): void => {
  useEffect(() => {
    const setLocalStorageOnTabClose = (): void => {
      localStorage[storageItemTitle] = JSON.stringify(itemToStore)
    }
    window.addEventListener("unload", setLocalStorageOnTabClose)
  }, [itemToStore])
}

export default useLocalStorageOnUnload
