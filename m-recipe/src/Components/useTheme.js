import {create} from 'zustand'

const useTheme = create((set)=>{
    return {
        theme:"light",
        setTheme:(newTheme)=>{
            set({theme: newTheme})
        }
    }
})

export default useTheme;