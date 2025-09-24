import Head from "next/head";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project 0x02</title>
      </Head>
      <Header />

      <main className="min-h-screen p-6 space-y-4">
        <h1 className="text-2xl font-semibold">About</h1>
        <p>Three buttons with three different sizes and shapes.</p>

        <div className="flex flex-wrap gap-4">
          <Button title="Small + rounded-sm" size="small" shape="rounded-sm" />
          <Button
            title="Medium + rounded-md"
            size="medium"
            shape="rounded-md"
          />
          <Button
            title="Large + rounded-full"
            size="large"
            shape="rounded-full"
          />
        </div>
      </main>
    </>
  );
}
