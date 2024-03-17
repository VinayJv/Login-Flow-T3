import Link from "next/link";
import { api } from "~/trpc/server";
import styles from "./index.module.css";
import { Header } from "./_components/Header";

export default async function Home() {
  const hello = await api.user.getLatest();

  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}