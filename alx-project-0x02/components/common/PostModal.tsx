import React, { useState } from "react";
import type { PostModalProps, PostFormData } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState<PostFormData>({ title: "", content: "" });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = form.title.trim();
    const content = form.content.trim();
    if (!title || !content) return;
    onSubmit({ title, content });
    onClose();
    setForm({ title: "", content: "" });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-[95%] max-w-lg rounded-xl border bg-white p-5 shadow-xl">
        <h2 className="text-lg font-semibold">Create Post</h2>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              placeholder="Post Title"
              required
            />
          </div>
          <div>
            <label className="block tex-sm font-medium" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={form.content}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              placeholder="Write something..."
              required
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              className="rounded-md border px-4 py-2 hover:bg-gray-50"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
