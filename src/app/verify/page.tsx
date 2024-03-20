import Link from "next/link";
import styles from "../index.module.css";

export default async function VerifyMail(){
    return(<div>
        <div className={styles.verifyPage}>Account Created Successfully</div>
        <p>Click <Link href={"/"}>here</Link> to login</p>
    </div>)
}