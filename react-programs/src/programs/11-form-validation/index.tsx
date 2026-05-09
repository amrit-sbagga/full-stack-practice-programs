import { useState } from "react";
/**
 * PROGRAM 11 — Form Validation
 *
 * The form contains 4 fields:
 *
 * Name - a string that consists of 3 and 30
 * inclusive upper and lower
 * english alphabetic letters only
 *
 * Email - a standard email address, for example
 * user@domain.extension is valid
 * but user@domain is not
 *
 * phone - a 10 digit no that does not begin with 0 or 1
 *
 * blog URL: a standard url that covers
 * cases such as https://domain.extension
 * https://domain.extension,
 * https://www.domain.extension,
 * www.domain.extension
 * & domain.extension
 *
 *
 * The entire form should get validated on button click
 * based on criteria mentioned above and display 
 * message accordingly.
 *
 * The message form is completed should be displayed if all input fields contain valid values
 * If one or more fields contain an invalid value,
 * the message form is incomplete should get displayed
 */

function FormValidation({ onFormSubmit } : { onFormSubmit : (val: boolean) => void}) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    blogUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidName = (str : string) => {
    if (str.length < 3 || str.length > 30) {
      return false;
    }
    for (let ch of str) {
      const code = ch.charCodeAt(0);
      const isUpper = code >= 65 && code <= 90;
      const isLower = code >= 97 && code <= 122;
      if (!isUpper && !isLower) {
        return false;
      }
    }
    return true;
  };

  const isValidEmail = (email: string) => {
    if (!email.includes("@")) {
      return false;
    }
    const parts = email.split("@");
    if (parts.length !== 2) {
      return false;
    }
    const [local, domain] = parts;
    if (!domain.includes(".")) {
      return false;
    }
    return true;
  };

  const isValidPhone = (phone: string) => {
    if (phone.length !== 10) {
      return false;
    }
    if (phone[0] === "0" || phone[0] === "1") {
      return false;
    }
    for (let ch of phone) {
      if (ch < "0" || ch > "9") return false;
    }
    return true;
  };

  const isValidUrl = (url: string) => {
    try {
      let finalUrl = url;
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        finalUrl = "https://" + url;
      }
      const parsedUrl = new URL(finalUrl);
      if (!parsedUrl.hostname.includes(".")) {
        return false;
      }
      const parts = parsedUrl.hostname.split(".");
      if (parts.length < 2) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  };

  const handleValidations = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('form submitted', e)

    const isVName = isValidName(formData.name);
    const isVPhone = isValidPhone(formData.phone);
    const isVEmail = isValidEmail(formData.email);
    const isVBlogUrl = isValidUrl(formData.blogUrl);

    // console.log(
    //   "isValidName, isValidPhone, isValidEmail, isValidBlogUrl => ",
    //   isVName,
    //   isVPhone,
    //   isVEmail,
    //   isVBlogUrl,
    // );

    const isFormInvalid = !isVName || !isVPhone || !isVEmail || !isVBlogUrl;
    // console.log("isFormInvalid => ", isFormInvalid);
    onFormSubmit(isFormInvalid);
  };

  return (
    <>
      <form
        onSubmit={handleValidations}
        style={{
          padding: "12px 16px",
          backgroundColor: "lightYellow",
          width: "80%",
          border: "2px solid blue",
        }}
      >
        <div>
          <label htmlFor="name">
            <h4>Name:</h4>
            <input
              type="text"
              style={{ marginBottom: "16px", padding: "8px" }}
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="phone">
            <h4>Phone: </h4>
            <input
              type="tel"
              style={{ marginBottom: "16px", padding: "8px" }}
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            <h4>Email: </h4>
            <input
              type="text"
              style={{ marginBottom: "16px", padding: "8px" }}
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="blogUrl">
            <h4>BlogUrl:</h4>
            <input
              type="text"
              style={{ marginBottom: "16px", padding: "8px" }}
              id="blogUrl"
              name="blogUrl"
              value={formData.blogUrl}
              placeholder="Enter your blogUrl"
              onChange={handleChange}
            />
          </label>
        </div>
        <button style={{ marginBottom: "16px", padding: "8px" }} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

const Message = ({ formIncomplete } : { formIncomplete: boolean }) => {
  return (
    <div>{formIncomplete ? "Form is incomplete!" : "Form is completed!"}</div>
  );
};

const App = () => {
  const [formIncomplete, setFormIncomplete] = useState(true);
  return (
    <div>
      <FormValidation onFormSubmit={(val) => setFormIncomplete(val)} />
      <Message formIncomplete={formIncomplete} />
    </div>
  );
};

export default App;
