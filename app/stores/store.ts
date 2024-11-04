export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const computedCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }

    return { count, increment, computedCount }
  },
  {
    persist: true,
  }
)
