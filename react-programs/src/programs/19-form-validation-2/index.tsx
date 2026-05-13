import EmployeeValidationForm from "./EmployeeValidationForm";

/**
 * PROGRAM 19 — Employee validation (HackerRank-style)
 *
 * Local preview of the same component you submit on HackerRank.
 * Spec + test checklist: ./REQUIREMENTS-AND-TESTS.md
 */
export default function Program19EmployeeValidation() {
  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <header className="mb-8">
        <p className="text-sm font-medium text-indigo-600 mb-1">Program 19</p>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Employee validation
        </h1>
        <p className="text-slate-600 mt-2 text-sm leading-relaxed">
          Practice clone of the HackerRank &quot;Employee Validation&quot; form: four
          fields, inline errors from the first render, submit disabled until all
          inputs are valid.
        </p>
      </header>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <EmployeeValidationForm />
      </div>
    </div>
  );
}
