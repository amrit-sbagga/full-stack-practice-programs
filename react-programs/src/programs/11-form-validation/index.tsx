/**
 * Program 11 — Form Validation
 * Goal: A form with three fields. On submit, validate each field and show
 *       inline error messages. On success, show a success banner.
 *
 * Fields & rules:
 *   name  → required, 3–30 characters
 *   email → required, must match /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 *   url   → required, must start with http:// or https://
 *
 * Concepts: controlled inputs, validation on submit, error state, conditional rendering
 */
import { useState } from "react";
import ProgramShell from "../ProgramShell";

interface FormState {
  name: string;
  email: string;
  url: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  url?: string;
}

export default function FormValidation() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", url: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // TODO: validate() → return errors object, empty object means valid
  // TODO: handleSubmit → call validate(), if valid setSubmitted(true)
  // TODO: render three labeled inputs with inline error messages
  // TODO: show success/failure banner based on submitted state

  return (
    <ProgramShell
      title="11 — Form Validation"
      concepts={["controlled inputs", "validation", "error state", "conditional render"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: form with name, email, url fields + validation</p>
    </ProgramShell>
  );
}
