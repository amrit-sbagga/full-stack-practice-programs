import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";

const NAME_ERROR =
  "Name must be at least 4 characters long and only contain letters and spaces";
const EMAIL_ERROR = "Email must be a valid email address";
const EMPLOYEE_ID_ERROR = "Employee ID must be exactly 6 digits";
const JOINING_DATE_ERROR = "Joining Date cannot be in the future";

type FormFields = {
  name: string;
  email: string;
  employeeId: string;
  joiningDate: string;
};

type FieldErrors = Record<keyof FormFields, string>;

function EmployeeValidationForm() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: "",
  });

  const handleValidations = (): { errors: FieldErrors; isValid: boolean } => {
    const isNameValid = isValidName(formData.name);
    const isEmailValid = isValidEmail(formData.email);
    const isEmployeeIdValid = isValidId(formData.employeeId);
    const isJoiningDateValid = isValidJoiningDate(formData.joiningDate);

    const isValid =
      isNameValid &&
      isEmailValid &&
      isEmployeeIdValid &&
      isJoiningDateValid;

    const errors: FieldErrors = {
      name: isNameValid ? "" : NAME_ERROR,
      email: isEmailValid ? "" : EMAIL_ERROR,
      employeeId: isEmployeeIdValid ? "" : EMPLOYEE_ID_ERROR,
      joiningDate: isJoiningDateValid ? "" : JOINING_DATE_ERROR,
    };

    return { errors, isValid };
  };

  const isValidName = (str: string): boolean => {
    if (str.length < 4) {
      return false;
    }

    for (const ch of str) {
      const code = ch.charCodeAt(0);
      const isUpper = code >= 65 && code <= 90;
      const isLower = code >= 97 && code <= 122;
      const isSpace = code === 32;
      if (!isUpper && !isLower && !isSpace) {
        return false;
      }
    }

    return true;
  };

  const isValidEmail = (email: string): boolean => {
    if (!email.includes("@")) {
      return false;
    }

    const parts = email.split("@");
    if (parts.length !== 2) {
      return false;
    }

    const [local, domain] = parts;
    if (local.length === 0) return false;
    if (!domain.includes(".")) {
      return false;
    }

    const bits = domain.split(".");
    const tld = bits[bits.length - 1];
    if (tld.length < 2) return false;
    return true;
  };

  const isValidId = (empId: string): boolean => {
    if (empId.length !== 6) {
      return false;
    }

    for (const ch of empId) {
      const code = ch.charCodeAt(0);
      const isDigit = code >= 48 && code <= 57;
      if (!isDigit) return false;
    }
    return true;
  };

  const isValidJoiningDate = (joiningDate: string): boolean => {
    let isJoiningDateValid = false;
    if (joiningDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(joiningDate);
      selected.setHours(0, 0, 0, 0);
      isJoiningDateValid = selected <= today;
    }
    return isJoiningDateValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const key = name as keyof FormFields;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };


  const { errors, isValid } = handleValidations();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isValid) return;

    setFormData({
      name: "",
      email: "",
      employeeId: "",
      joiningDate: "",
    });
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          data-testid="input-name-test"
        />
        {errors.name ? (
          <p className="error mt-2" data-testid="name-error">
            {NAME_ERROR}
          </p>
        ) : null}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          data-testid="input-email-test"
        />
        {errors.email ? (
          <p className="error mt-2" data-testid="email-error">
            {EMAIL_ERROR}
          </p>
        ) : null}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          placeholder="Employee ID"
          data-testid="input-employee-id-test"
        />
        {errors.employeeId ? (
          <p className="error mt-2" data-testid="employee-id-error">
            {EMPLOYEE_ID_ERROR}
          </p>
        ) : null}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
          placeholder="Joining Date"
          data-testid="input-joining-date-test"
        />
        {errors.joiningDate ? (
          <p className="error mt-2" data-testid="joining-date-error">
            {errors.joiningDate}
          </p>
        ) : null}
      </div>
      <button
        data-testid="submit-btn"
        type="button"
        disabled={!isValid}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
