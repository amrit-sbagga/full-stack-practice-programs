/**
 * Program 13 — Pagination with JSONPlaceholder
 * Goal: Fetch all users, display PAGE_SIZE per page, navigate with Prev/Next buttons.
 *       Show current page info like "Page 2 of 5".
 * Concepts: API fetch, array slicing for pagination, page state, disabled buttons
 *
 * API: GET https://jsonplaceholder.typicode.com/users
 * PAGE_SIZE: 3
 */
import { useEffect, useState } from "react";
import axios from "axios";
import ProgramShell from "../ProgramShell";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const PAGE_SIZE = 3;

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function Pagination() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // TODO: fetch users from API_URL on mount
  // TODO: compute totalPages = Math.ceil(users.length / PAGE_SIZE)
  // TODO: compute pageUsers = users.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE)
  // TODO: render table + Prev/Next buttons + page indicator
  // TODO: disable Prev on page 1, disable Next on last page

  return (
    <ProgramShell
      title="13 — Pagination"
      concepts={["fetch", "array slicing", "page state", "disabled buttons"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: paginated user list with Prev/Next from {API_URL}</p>
    </ProgramShell>
  );
}
