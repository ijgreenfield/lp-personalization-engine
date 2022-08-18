import Image from "next/image";
import styles from './header.module.css'

export default function Header(props) {
    return (
        <div>
            <div className={styles.header_container}>
                <Image 
                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/logo-white.png?v=1660850039"
                    layout="fill"
                />
            </div>
        </div>
    )
}