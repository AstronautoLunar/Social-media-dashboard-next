import { 
    useEffect,
    useRef
} from 'react';

import { useThemeDark } from '../contexts/useThemeDark';

type UseActiveThemeData = {
    colorLightMouseMove: string;
    colorLightMouseOut: string;
    colorDarkMouseMove: string;
    colorDarkMouseOut: string;
}

export default function useActiveTheme({
    colorLightMouseMove,
    colorLightMouseOut,
    colorDarkMouseMove,
    colorDarkMouseOut,
}: UseActiveThemeData ) {
    let { toggleTheme } = useThemeDark();
    let ref = useRef(null);

    useEffect(() => {
        if(toggleTheme) {
            ref.current.addEventListener('mousemove', () => {
                ref.current.style.backgroundColor = colorDarkMouseMove;
            }, true);
    
            ref.current.addEventListener('mouseout', () => {
                ref.current.style.backgroundColor = colorDarkMouseOut;
            }, true);
        } else {
            ref.current.addEventListener('mousemove', () => {
                ref.current.style.backgroundColor = colorLightMouseMove;
            }, true);
    
            ref.current.addEventListener('mouseout', () => {
                ref.current.style.backgroundColor = colorLightMouseOut;
            }, true);
        }
    }, [ 
        ref, 
        toggleTheme, 
        colorDarkMouseMove, 
        colorDarkMouseOut, 
        colorLightMouseMove, 
        colorLightMouseOut 
    ]);

    return [ ref ];
}