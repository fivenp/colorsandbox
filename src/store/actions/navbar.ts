const actions = (store: any) => ({
  setActiveView: (state: any, value: string) => ({ activeView: value }),
  togglePalette: (state: any) => ({ paletteIsOpen: !state.paletteIsOpen }),
})

export default actions
