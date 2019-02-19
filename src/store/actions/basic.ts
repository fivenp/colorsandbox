const actions = (store: any) => ({
  setActiveColor: (state: any, value: number) => ({ activeColor: value }),
  setActiveBackgroundColor: (state: any, value: number) => ({
    activeBackgroundColor: value,
  }),
})

export default actions
