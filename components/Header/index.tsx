import { useThemeDark } from '../../contexts/useThemeDark';

import styles from './styles.module.scss';

export default function Header() {
    let { themeColor } = useThemeDark();
    let [ colorHeader ] = themeColor({
        colorLight: "var(--very-pale-blue)",
        colorDark: "var(--very-dark-blue-top-bg-pattern)"
    })
    
    return (
        <div 
            id={styles.Header}
            style={{
                backgroundColor: colorHeader
            }}    
        />
    )
}