import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project 0x02</title>
      </Head>

      <main className="min-h-screen p-6">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="mt-2 text-gray-600">
          This is the About page. It exists to test basic routing.
        </p>
      </main>
    </>
  );
}
