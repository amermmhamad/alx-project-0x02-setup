import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <article className="rounded-lg border bg-white p-4 shadow-sm">
            <p className="text-xs text-gray-500">User #{userId}</p>
            <h3 className="mt-1 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-700">{content}</p>
        </article>
    );
};

export default PostCard;