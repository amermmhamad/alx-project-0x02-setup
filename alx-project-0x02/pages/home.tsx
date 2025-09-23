import Head from "next/head";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import type { PostFormData } from "@/interfaces";

type LocalPost = PostFormData & { id: string; createdAt: string };

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState<LocalPost[]>([]);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const handleAddPost = (data: PostFormData) => {
    const newPost: LocalPost = {
      id: String(Date.now()),
      title: data.title,
      content: data.content,
      createdAt: new Date().toISOString(),
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <>
      <Head>
        <title>Home | ALX Project 0x02</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl p-6">
        <section className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Home</h1>
            <p className="mt-2 text-gray-600">
              Add a post using this modal. Newly added posts appear below.
            </p>
          </div>
          <button
            onClick={open}
            className="rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
          >
            + New Post
          </button>
        </section>
        <PostModal isOpen={isOpen} onClose={close} onSubmit={handleAddPost} />
        <section className="mt-6 grid gap-4 sm:grid-cols2 lg:grid-cols-3">
          {posts.length === 0 ? (
            <Card
              title="No posts yet."
              content="Click 'New Post' to add your first one."
            />
          ) : (
            posts.map((p) => (
              <Card key={p.id} title={p.title} content={p.content} />
            ))
          )}
        </section>
      </main>
    </>
  );
}
