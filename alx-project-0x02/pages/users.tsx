import Head from "next/head";
import { GetStaticProps } from "next";
import UserCard from "@/components/common/UserCard";
import type { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

type Props = { users: UserProps[] };

type ApiUser = {
    id: number;
    name: string;
    email: string;
    username: string;
    address: { street: string, suite: string, city: string, zipcode: string };
    phone: string;
    website: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const res = await fetch ("https://jsonplaceholder.typicode.com/users");
        const data: ApiUser[] = await res.json();

        const users: UserProps[] = data.map((u) => ({
            name: u.name,
            username: u.username,
            email: u.email,
            id: u.id,
            address: {
                street: u.address.street,
                city: u.address.city,
                suite: u.address.suite,
                zipcode: u.address.zipcode,
            },
            phone: u.phone,
            website: u.website,
    }));

    return { props: { users }, revalidate: 3600 };
} catch {
    return { props: { users: [] }, revalidate: 3600 };
}
};

export default function UserPages({ users }: Props) {
    return (
        <>
        <Head>
            <title>
                Users | ALX Project 0x02
            </title>
        </Head>

        <Header />
        <main className="mx-auto max-w-5xl p-6">
            <h1 className="text-2xl font-semibold">
                Users
            </h1>
            <p className="mt-2 text-gray-600">
                Fetched from JSONPlaceholder.
            </p>
            {users.length === 0 ? (
                <p className="mt-6 text-sm text-gray-500">No users to show.</p>
            ) : (
                <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {users.map((u, idx) => (
                        <UserCard key={idx} id={u.id} username={u.username} name={u.name} email={u.email} address={u.address} phone={u.phone} website={u.website} />
                    ))}
                </section>
            )} 
        </main>
        </>
    )
}