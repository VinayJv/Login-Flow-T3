'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from ".././index.module.css";
import { api } from "~/trpc/react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";

export default function LoginForm(this: void){
  const { push } = useRouter();
  const [display, setDisplay] = useState(false);
  const findQuery = api.user.getAllUser.useQuery();
  const context = useContext(GlobalContext);
  console.log(context?.user)
  
  async function loginHandler(event: React.BaseSyntheticEvent){
    event.preventDefault();
    console.log(findQuery.data);
      const loggedInUser = findQuery?.data?.find((item)=>item.email == event.target[0].value && item.password == event.target[1].value);
      if(loggedInUser){
        context?.setIsLoggedIn(true);
        context?.setUser({ email: loggedInUser.email, name: loggedInUser.name, category: loggedInUser.category})
        push("/pagination");
     } else{
      context?.setError("Check Email and Password");
     }
    }

    useEffect(()=>{
      setDisplay(true);
      setTimeout(()=>{
        setDisplay(false);
        context?.setError("");
      },3000)
    },[context?.errorMsg])

    return(<form className={styles.form} onSubmit={loginHandler}>
        <h2>Login</h2>
        <div className={styles.formHeader}>
            <p>Welcome back to ECOMMERCE</p>
            <p>The next gen business marketplace</p>
        </div>
        <span className={display ? styles.showError : styles.hideError}>{context?.errorMsg}</span>
        <label>
          Email
          <input type="text" placeholder="Enter"></input>
        </label>
        <label>
          Password
          <input type="text" placeholder="Enter"></input>
        </label>
        <button type="submit" className={styles.submitBtn}>LOGIN</button>
        <p className={styles.formFooter}>Don't have an Account? <Link href={"/signup"}>SIGN UP</Link></p>
      </form>)
}