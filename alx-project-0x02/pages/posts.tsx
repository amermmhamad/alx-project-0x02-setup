import Head from "next/head";
import Header from "@/components/layout/Header";
import { useEffect, useState } from "react";
import type { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

type ApiPost = { userId: number, id: number, title: string, body: string };

export default function PostsPage() {
  const [posts, SetPosts] = useState<PostProps[]>([]);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: ApiPost[] = await res.json();
        const first = data.slice(0, 12).map((p) => ({
          title: p.title,
          content: p.body,
          userId: p.userId,
        }));
        SetPosts(first);
      } catch (e) {
        console.error(e);
      } finally {
        SetLoading(false);
      }
    }
    load();
  }, [])

  return (
    <>
    <Head>
      <title>Posts | ALX Project 0x02</title>
    </Head>

    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-semibold">Posts</h1>
      <p className="mt-2 text-gray-600">Fetched from JSONPlaceholder</p>

      {loading ? (
        <p className="mt-6 text-sm text-gray-500">Loading..</p>
      ) : (
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <PostCard
            key={idx}
            title={p.title}
            content={p.content}
            userId={p.userId}
            />
          ))}
        </section>
      )}
    </main>
    </>
  )
};
