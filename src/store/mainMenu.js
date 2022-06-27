import create from 'zustand'

const useMainMenu = create(set => ({
    show: false,
    setHide: () => set((state) => ({
        ...state,
        show: false
    })),
    setShow: () => set((state) => ({
        ...state,
        show: true
    })),
    toggle: () => set((state) => ({
        ...state,
        show: !state.show
    })),
}))

export default useMainMenu