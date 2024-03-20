'use client';

import { api } from "~/trpc/react";
import styles from "../index.module.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { useRouter } from "next/navigation";
import Paginate from "../_components/Pagination";

export default function Pagination(){
    const { push } = useRouter();
    const context = useContext(GlobalContext);
    const getAllCategory = api.user.getAllCategory.useQuery().data
    const categoryMutation = api.user.updateUserDetails.useMutation();


    // async function mapData(index: number){
    //     console.log(index);
    //         // setData(nextCategories);
    // }
    

    function checkCategory(item:{ name: string }) {
        if(context?.user?.category.includes(item.name)){
            return true
        } else {
            return false
        }
    }

    async function updateDatabase(){
        await categoryMutation.mutateAsync({
            email: context?.user?.email,
            category: context?.user?.category
        })
    }
    async function removeDatabase(filteredData: String[] | undefined){
        await categoryMutation.mutateAsync({
            email: context?.user?.email,
            category: filteredData
        })
    }

    function handleCheckBoxInput(event: React.BaseSyntheticEvent){
        if(event.target.checked){
            context?.user?.category.push(event.target.value);
            console.log(context?.user?.category);
            updateDatabase();
        } else {
            const filteredCategory = context?.user?.category.filter((item)=> item !== event.target.value);
            context?.setUser({ ...context.user, category: filteredCategory });
            console.log(filteredCategory);
            removeDatabase(filteredCategory);
        }
    }

    function handleLogout(){
        push("/");
        context?.setUser({email: 'demo@gmail.com', name: 'John Doe', category: Array(0)});
    }

    // function buttonHandler(event: React.BaseSyntheticEvent){
    //     setIndex(parseInt(event.target["value"])*6);
    //     mapData(index);
    // }


    if(context?.isLoggedIn){
    return(
    <div>
        <div className={styles.paginationContainer}>
            <h2>Please mark your interests!</h2>
            <h5>We will keep you notified</h5>
            <div>
                My saved interest!
                <ul className={styles.categoryList}>
                    {getAllCategory?.map((item,index)=>checkCategory(item) ? <label key={index} ><input type="checkbox" defaultChecked value={item.name} onClick={handleCheckBoxInput}></input>{item.name}</label> : <label key={index}><input type="checkbox" value={item.name} onClick={handleCheckBoxInput}></input>{item.name}</label>)}
                </ul>
                {/* <div className={styles.paginationNumbers}>
                        <button value={0} onClick={buttonHandler}>1</button>
                        <button value={1} onClick={buttonHandler}>2</button>
                        <button value={2} onClick={buttonHandler}>3</button>
                        <button value={3} onClick={buttonHandler}>4</button>
                        <button value={4} onClick={buttonHandler}>5</button>
                        <button value={5} onClick={buttonHandler}>6</button>
                        <button value={6} onClick={buttonHandler}>7</button>
                        <button value={7} onClick={buttonHandler}>8</button>
                        <button value={8} onClick={buttonHandler}>9</button>
                </div> */}
            </div>
            <button className={styles.submitBtn} style={{width: "100%"}} onClick={handleLogout}>Logout</button>
        </div>
    </div>);
    } else {
        push("/");
    }
}