import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  // Create a sign up page with display name, email, password, and confirm password fields.
  // When the user submits the form, create a user document in the firebase auth database.
  // If the user is successfully created, redirect the user to the shop page.
  // If the user is not successfully created, display an error message.

  return (
    <div>
      <h1> Sign Up with Email and Pass</h1>
      <form onSubmit={() => {}}>
        <label> Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name={displayName}
        />
        <label> Email</label>
        <input type="email" required onChange={handleChange} name={email} />
        <label> Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name={password}
        />
        <label> Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name={confirmPassword}
        />
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
