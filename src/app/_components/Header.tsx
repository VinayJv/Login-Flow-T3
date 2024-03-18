import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import styles from "../index.module.css";



export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h2>ECOMMERCE</h2>
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
                <FaSearch size={22}/>
                <IoCartOutline size={28}/>
            </div>
        </header>)
}