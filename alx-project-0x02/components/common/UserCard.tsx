import type { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website }) => {
    return (
        <article className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="text-sm text-gray-500">{id}</h3>
            <h3 className="text-sm text-gray-500">{username}</h3>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="mt-1 text-sm text-gray-700">{email}</p>
            <p className="mt-2 test-sm text-gray-500">
                {[ address.suite, address.street, address.city, address.zipcode ]}
            </p>
            <p className="mt-2 text-sm text-gray-50-">{phone}</p>
            <p className="mt-2 text-sm text-gray-50- hover:underline">{website}</p>
        </article>
    )
}

export default UserCard;