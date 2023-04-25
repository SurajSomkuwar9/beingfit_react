import React from "react";

export function Login(props) {
  const { onFormSwitch } = props;

  const handleFormSwitch = () => {
    onFormSwitch("register");
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        {/* Form fields */}
      </form>
      <button onClick={handleFormSwitch}>Register</button>
    </div>
  );
}
