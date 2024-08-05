export const useStore = defineStore('userData', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: '0',
    }
  },
  persist: {
    storage: persistedState.sessionStorage,
  },
})
