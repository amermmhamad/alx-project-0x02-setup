// pages/posts.tsx
import Head from "next/head";
import type { GetStaticProps } from "next";
import PostCard from "../components/common/PostCard";
import type { PostProps } from "../interfaces";

type Props = { posts: PostProps[] };

type ApiPost = { userId: number; id: number; title: string; body: string };

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: ApiPost[] = await res.json();

    const posts: PostProps[] = data.slice(0, 12).map((p) => ({
      title: p.title,
      content: p.body,
      userId: p.userId,
    }));

    return {
      props: { posts },
      revalidate: 3600,
    };
  } catch {
    return { props: { posts: [] }, revalidate: 3600 };
  }
};

export default function PostsPage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Posts | ALX Project 0x02</title>
      </Head>

      <main className="mx-auto max-w-5xl p-6">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <p className="mt-2 text-gray-600">Fetched at build time from JSONPlaceholder.</p>

        {posts.length === 0 ? (
          <p className="mt-6 text-sm text-gray-500">No posts to show.</p>
        ) : (
          <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, idx) => (
              <PostCard key={idx} title={p.title} content={p.content} userId={p.userId} />
            ))}
          </section>
        )}
      </main>
    </>
  );
}
