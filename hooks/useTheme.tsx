type useThemeData = {
    colorLight: string;
    colorDark: string;
}

export default function useTheme({
    colorLight,
    colorDark
}: useThemeData) {
    let theme
    if(typeof window !== "undefined") {
        theme = localStorage.getItem("theme");
    }

    let themeColor = colorLight;
    if(theme === "dark") {
        themeColor = colorDark;
    } else {
        themeColor = colorLight
    }

    return { theme, themeColor }
}