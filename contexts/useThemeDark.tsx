import { 
    useContext, 
    useState, 
    createContext 
} from "react";

type themeColorData = {
    colorLight: string;
    colorDark: string;
}

type ThemeDarkContextData = {
    toggleTheme: boolean;
    changeTheme: () => void;
    themeColor: ({ 
        colorLight, 
        colorDark 
    }: themeColorData) => string[];
}

const ThemeDarkContext = createContext({} as ThemeDarkContextData);

type ThemeDarkProviderData = {
    children: JSX.Element[] | JSX.Element;
}

export function ThemeDarkProvider({ children }: ThemeDarkProviderData) {
    let [ toggleTheme, setToggleTheme ] = useState(false);

    function changeTheme() {
        setToggleTheme(!toggleTheme);
    }

    function themeColor({ colorLight, colorDark }) {
        let colorBGTheme = colorLight;
        if(toggleTheme) {
            colorBGTheme = colorDark;
        } else {
            colorBGTheme = colorLight;
        }
        return [ colorBGTheme ];
    }

    return (
        <ThemeDarkContext.Provider value={{
            toggleTheme,
            changeTheme,
            themeColor
        }}>
            { children }
        </ThemeDarkContext.Provider>
    )
}

export function useThemeDark() {
    return useContext(ThemeDarkContext);
}