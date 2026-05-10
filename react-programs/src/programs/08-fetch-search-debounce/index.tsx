/**
 * PROGRAM 08 — Fetch + Search with Debounce
 *
 * Fetch all posts from the API below, display them in a list,
 * and let the user filter by post title using a search input.
 *
 * API: GET https://jsonplaceholder.typicode.com/posts
 *
 * Requirements:
 *   - The search must be debounced (wait 400ms after the user stops typing before filtering)
 *   - Show a "Searching..." indicator during the debounce delay
 *   - Display the count of results found
 */

import type { ChangeEvent } from "react";
import { useEffect, useMemo, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

type PostData = {
  id: number;
  title: string;
};

function FetchSearchDebounce() {
  const [data, setData] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPosts = async () => {
      try {
        setError("");

        const resp = await fetch(API_URL, { signal });
        if (!resp.ok) {
          throw new Error("Failed to fetch posts");
        }
        const respData = await resp.json();
        // console.log(respData);
        setData(respData);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 400);

    return () => clearTimeout(timer);
  }, [input]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Based on input value -> set debounced value & 
  // based on debouncedValue -> do filterData from data
  const filteredData = useMemo(() => {
    const q = debouncedValue.trim().toLowerCase();
    if (!q) return data;
    return data.filter((item) => item.title.toLowerCase().includes(q));
  }, [data, debouncedValue]);

  const isSearching = input !== debouncedValue;

  return (
    <div>
      <input
        style={{ padding: "12px" }}
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleInputChange}
      />
      {/* <p style={{'marginTop' : '16px'}}> Typed Value is: {input}</p>
      <p style={{'marginTop' : '16px'}}> Debounced Value is: {debouncedValue}</p>
      */}

      {!loading && !error && (
        <p style={{ marginTop: "16px" }}>
          {filteredData.length} result{filteredData.length === 1 ? "" : "s"}{" "}
          found
          {isSearching ? " · Searching..." : ""}
        </p>
      )}

      <div style={{ minHeight: "120px", marginTop: "16px" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && filteredData.length > 0 && (
          <ul>
            {filteredData.map((post: PostData) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}

        {!loading && !error && data.length > 0 && filteredData.length === 0 && (
          <p>No posts match your search.</p>
        )}
      </div>
    </div>
  );
}

export default FetchSearchDebounce;
