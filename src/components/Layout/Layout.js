import styles from "./Layout.module.css"
import SidePanel from "../SidePanel/SidePanel"

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <SidePanel/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default Layout; 