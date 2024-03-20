'use client';

import Link from "next/link";
import styles from ".././index.module.css";
import { api } from "~/trpc/react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { useRouter } from 'next/navigation';




 

export default function SignUpForm() {
  const { push } = useRouter();
  const context = useContext(GlobalContext);
  const createUserMutation = api.user.addUser.useMutation();
  const [display, setDisplay] = useState(false);

  function generateToken(): number{
    return Math.floor(Math.random() * 90000) + 10000;
  }
    
    async function formHandler(event: React.BaseSyntheticEvent) {
      event.preventDefault();
      try {
        const userData = {
          name: event.target[0].value,
          email: event.target[1].value,
          password: event.target[2].value
        }
        const token: number = generateToken();
        
        //mutation
        await createUserMutation.mutateAsync(userData);

        sessionStorage.setItem("token", token.toString());
        push('/verify');
      } catch (error) {
        context?.setError("Email Already Registered");
        console.log(error);
      }
    }
    
    useEffect(()=>{
      setDisplay(true);
      setTimeout(()=>{
        setDisplay(false);
        context?.setError("");
      },3000)
    },[context?.errorMsg])

    return (
      <form className={styles.form} onSubmit={formHandler}>
      <h2>Create your account</h2>
      <span className={display ? styles.showError : styles.hideError}>{context?.errorMsg}</span>
      <label>
        Name
        <input type="text" placeholder="Enter" required></input>
      </label>
      <label>
        Email
        <input type="text" placeholder="Enter" required></input>
      </label>
      <label>
        Password
        <input type="password" placeholder="Enter" required></input>
      </label>
      <button type="submit" className={styles.submitBtn}>CREATE ACCOUNT</button>
      <p className={styles.formFooter}>Have an Account? <Link href={"/"}>Login</Link></p>
    </form>
  );
}