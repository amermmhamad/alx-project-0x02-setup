import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
}) => {
  const sizeClass =
    size === "small"
      ? "px-3 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-md"
      : "px-5 py-3 text-lg";

  const shapeClass =
    shape === "rounded-sm"
      ? "rounded-sm"
      : shape === "rounded-full"
      ? "rounded-full"
      : "rounded-md";

  return (
    <button className={`border bg-black text-white ${sizeClass} ${shapeClass}`}>
      {title}
    </button>
  );
};

export default Button;
