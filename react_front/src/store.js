import create from "zustand";

const useStore = create(set =>({
    name : "",
    setName: (data) => set({name: data}),
    showMyPage: false,
    setMyPageTrue: () => set({showMyPage: true}),
    setMyPageFalse: () => set({showMyPage: false}),
    showLoginOut : true,
    setLoginOutFalse: () => set({showLoginOut: false}),
    setLoginOutTrue: () => set({showLoginOut: true}),
    showIndex : 1,
    increaseIndex: () => set(state => ({showIndex: state.showIndex +1})),
    zeroIndex : () => set({showIndex: 0})
}))

export default useStore
