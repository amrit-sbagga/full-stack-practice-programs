/**
 * Program 04 — Counter (Context API)
 * Goal: Share counter state across multiple child components via Context.
 * Concepts: createContext, useContext, Provider pattern, consumer components
 *
 * Suggested structure:
 *   CounterContext  → createContext
 *   CounterProvider → holds state, wraps children
 *   DisplayCount    → reads count from context
 *   Controls        → dispatches increment/decrement/reset via context
 */
import { createContext, useContext, useState } from "react";
import ProgramShell from "../ProgramShell";

// TODO: create CounterContext and CounterProvider

export default function CounterContext() {
  return (
    <ProgramShell title="04 — Counter (Context API)" concepts={["createContext", "useContext", "Provider"]}>
      <p className="text-slate-400 italic text-sm">
        TODO: create CounterContext, CounterProvider, and child components that consume it
      </p>
    </ProgramShell>
  );
}
