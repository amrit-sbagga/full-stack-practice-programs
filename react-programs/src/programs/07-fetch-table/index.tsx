/**
 * Program 07 — Fetch API → Table
 * Goal: Fetch users from JSONPlaceholder and display them in a table.
 *       Show a loading spinner while fetching, and an error message on failure.
 * Concepts: useEffect, fetch/axios, loading state, error state, table rendering
 *
 * API: GET https://jsonplaceholder.typicode.com/users
 * Fields to show: id, name, username, email, company.name
 */
import { useEffect, useState } from "react";
import axios from "axios";
import ProgramShell from "../ProgramShell";

const API_URL = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company: { name: string };
}

export default function FetchTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // TODO: useEffect to fetch users from API_URL using axios
  // TODO: handle loading and error states
  // TODO: render table with columns: #, Name, Username, Email, Company

  return (
    <ProgramShell
      title="07 — Fetch API → Table"
      concepts={["useEffect", "axios", "loading state", "error state"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: fetch {API_URL} and render a table</p>
    </ProgramShell>
  );
}
