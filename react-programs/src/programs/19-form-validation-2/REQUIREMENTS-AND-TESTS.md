# 19 · Employee Validation (HackerRank-style practice)

This folder mirrors the **Employee Validation** React challenge: a small survey form with four fields, inline error messages, and a submit button that stays disabled until every field is valid.

---

## Problem description (from the challenge)

Build a React app where employees validate/update their information.

### UI (mockup)

- **Name** — text input, placeholder `Name`
- **Email** — text input, placeholder `Email`
- **Employee ID** — text input, placeholder `Employee ID`
- **Joining date** — date input (placeholder text in the brief may show `dd - mm - yyyy`; native `<input type="date">` uses `yyyy-mm-dd` in the value)
- **Submit** — button at the bottom

### Validation rules (exact error copy matters for tests)

| Field         | Rule                                                                 | Error message (when invalid) |
|---------------|----------------------------------------------------------------------|------------------------------|
| Name          | At least **4** characters; only **letters (A–Z, a–z) and spaces**   | `Name must be at least 4 characters long and only contain letters and spaces` |
| Email         | Valid email shape (e.g. `user@domain.tld`)                         | `Email must be a valid email address` |
| Employee ID   | Exactly **6 numeric digits** (no letters, no extra length)         | `Employee ID must be exactly 6 digits` |
| Joining date  | Required for a “valid” row; date **must not be in the future**     | `Joining Date cannot be in the future` |

### Behaviour notes

- On **first load**, all inputs are **empty**, the submit button is **disabled**, and **every** invalid field shows its **red error line** (do not wait for blur or submit to show the first errors).
- As the user types, errors clear **per field** when that field becomes valid.
- When **all** fields are valid, errors are gone and submit becomes **enabled**.
- After a successful submit (optional / some variants), the form may **reset** to the initial empty state.

### `data-testid` attributes (typical boilerplate)

Wrappers / inputs / errors / submit are often tagged for automation, for example:

- `input-name`, `input-name-test`
- `input-email`, `input-email-test`
- `input-employee-id`, `input-employee-id-test`
- `input-joining-date`, `input-joining-date-test`
- `name-error`, `email-error`, `employee-id-error`, `joining-date-error`
- `submit-btn`

(Always match whatever your **official** HackerRank starter file lists.)

---

## Test cases (from your “Tests” panel screenshot)

These describe what the hidden suite is checking conceptually:

1. **Initially — all fields empty**  
   Every text/date control has an empty value.

2. **Initially — submit disabled**  
   Submit must not be clickable until the form is fully valid (`disabled` when invalid).

3. **Initially — all errors visible**  
   With empty inputs, all four error messages should appear (not hidden until the user interacts).

4. **Name — valid input clears name error**  
   When the name satisfies letters/spaces and length ≥ 4, the name error goes away.

5. **Email — valid input clears email error**  
   When the email matches the expected pattern, the email error goes away.

6. **Employee ID — valid input clears ID error**  
   When the value is exactly six digits, the employee ID error goes away.

7. **Joining date — valid input clears date error**  
   When a date is chosen that is **not** in the future (and empty is treated as invalid in the usual setup), the joining date error goes away.

8. **Full form — no errors and submit enabled**  
   With all four fields valid together, no error nodes (or no error text), and submit is enabled.

---

## Local run

From `react-programs`: `npm run dev` → open **19 · Employee validation (HackerRank)** in the sidebar, or navigate to `/19-form-validation-2`.

Reference code: **`EmployeeValidationForm.tsx`** (typed for this repo). HackerRank’s editor is often plain **`.js`** — copy the same logic and remove TypeScript-only annotations if needed.
