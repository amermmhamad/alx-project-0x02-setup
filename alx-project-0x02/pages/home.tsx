import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project 0x02</title>
      </Head>

      <main className="min-h-screen p-6">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="mt-2 text-gray-600">
          This is the Home Page. Use the header links to navigate.
        </p>
      </main>
    </>
  );
}
