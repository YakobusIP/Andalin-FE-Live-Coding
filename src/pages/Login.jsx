import React, { useState } from "react";
import TextInput from "../components/TextInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("masuk ini");
    alert("Email: " + email + "\nPassword: " + password);
  };
  return (
    <div className="flex w-full min-h-screen justify-center bg-blue-800">
      <form
        className="flex flex-col items-center justify-center gap-y-4 w-2/5"
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Email Address"
          placeholder="Enter registered email address"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
            console.log(email);
          }}
        />
        <TextInput
          label="Enter Password"
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          type="submit"
          className="border border-gray-500 bg-gray-500 text-white text-bold px-10 py-2 hover:bg-gray-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
