import Head from "next/head";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

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
        <section className="mx-auto max-w-5xl p-6">
          <h1 className="text-2xl font-semibold">
            Reusable Card Component with different titles and content.
          </h1>
        </section>
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Getting Started"
            content="Spin up the the dev server and explore the Pages Router."
          />
        </section>
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Typed Components"
            content="Use TypeScript interfaces to make props safe and discoverable."
          />
        </section>
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Getting Started"
            content="Spin up the the dev server and explore the Pages Router."
          />
        </section>
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Getting Started"
            content="Spin up the the dev server and explore the Pages Router."
          />
        </section>
      </main>
    </>
  );
}
