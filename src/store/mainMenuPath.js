import create from 'zustand'

const useMainMenuPath = create(set => ({
    path: [],
    addPath: (path) => set((state) => ({
        ...state,
        path: [...state.path, path]
    })),
    removePath: (lengthGetValue) => set((state) => ({
        ...state,
        path: state.path.slice(0, lengthGetValue)
    })),
}))

export default useMainMenuPath