import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import styles from "../index.module.css";



export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <ul className={styles.topList}>
                    <li>Help</li>
                    <li>Orders & Returns</li>
                    <li>Hi, John</li>
                </ul>
            </div>
            <div className={styles.bottomHeader}>
                <div>
                    <h1 className={styles.h1}>ECOMMERCE</h1>
                </div>
                <div>
                    <ul className={styles.ul}>
                        <li>Categories</li>
                        <li>Sale</li>
                        <li>Clearance</li>
                        <li>New Stock</li>
                        <li>Trending</li>
                    </ul>
                </div>
                <div className={styles.iconContainer}>
                    <CiSearch size={22}/>
                    <PiShoppingCartSimple size={22} />
                </div>
            </div>
            <div className={styles.salesTab}>
                <span>{`<`}</span><p>Get 10% off on business sign up</p><span>{`>`}</span>
            </div>
        </header>)
}