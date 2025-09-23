import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <article
      className={
        "rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md"
      }
    >
      <h3 className="text-lg font-semibold text-black-600">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{content}</p>
    </article>
  );
};

export default Card;
