
import { createContext,useContext } from "react";

export const Themecontext = createContext({
       themeMode:"light",
       darkTheme: () => {},
       lightTheme: () => {}
})

export const ThemeProvider = Themecontext.Provider

//creating a custom hook
export default function useTheme() {
    return useContext(Themecontext) //useContext return kar diye aur jo store kiye hai variable me usko pass  kar denge
}