/**
 * Program 08 — Fetch + Search with Debounce
 * Goal: Fetch all posts from JSONPlaceholder, display them in a list,
 *       and let the user filter by title with a debounced search input.
 * Concepts: debounce (setTimeout/clearTimeout), useEffect, controlled input, filtering
 *
 * API: GET https://jsonplaceholder.typicode.com/posts
 * Debounce delay: 400ms
 * Filter: post.title.toLowerCase().includes(query.toLowerCase())
 */
import { useEffect, useState } from "react";
import axios from "axios";
import ProgramShell from "../ProgramShell";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function FetchSearchDebounce() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // TODO: useEffect to debounce query → debouncedQuery (400ms delay)
  // TODO: useEffect to fetch posts on mount
  // TODO: filter posts where title includes debouncedQuery
  // TODO: render search input and filtered posts list

  return (
    <ProgramShell
      title="08 — Fetch + Search + Debounce"
      concepts={["debounce", "useEffect", "controlled input", "filter"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: search input with debounce + filtered post list</p>
    </ProgramShell>
  );
}
