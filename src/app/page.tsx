import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import styles from "./index.module.css";

export default async function Home() {
  const hello = await api.user.getLatest();

  return (
    <main className={styles.main}>
      <h1>Hello</h1>
    </main>
  );
}