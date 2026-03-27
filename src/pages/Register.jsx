import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import useInput from "../hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "../utils/validations";

export default function Register() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameHasError,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 5));

  const {
    value: repasswordValue,
    handleInputChange: handleRepasswordChange,
    handleInputBlur: handleRepasswordBlur,
    hasError: repasswordHasError,
  } = useInput("", (value) => hasMinLength(value, 5));

  function handleFormSubmit(e) {
    e.preventDefault();

    if (nameHasError || emailHasError || passwordHasError || repasswordHasError)
      return;

    if (passwordValue !== repasswordValue) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  }

  const inputClass = `w-full px-3 py-2 rounded border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
    isDark
      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
  }`;

  const labelClass = `block text-sm font-medium mb-1 ${
    isDark ? "text-gray-200" : "text-gray-700"
  }`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div
          className={`rounded-lg border shadow-sm ${
            isDark
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-white text-gray-900 border-gray-200"
          }`}
        >
          <div
            className={`px-6 py-4 border-b ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <h1 className="text-lg font-semibold">Register</h1>
          </div>

          <div className="px-6 py-5">
            <form onSubmit={handleFormSubmit}>
              {/* NAME */}
              <div className="mb-4">
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={inputClass}
                  value={nameValue}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  placeholder="Enter your name"
                />
                {nameHasError && (
                  <p className="text-red-500 text-sm mt-1">Name required</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="mb-4">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  value={emailValue}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder="Enter your email"
                />
                {emailHasError && (
                  <p className="text-red-500 text-sm mt-1">
                    Invalid email address
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="mb-4">
                <label htmlFor="password" className={labelClass}>
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className={inputClass}
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  placeholder="Minimum 5 characters"
                />
                {passwordHasError && (
                  <p className="text-red-500 text-sm mt-1">
                    Minimum 5 characters required
                  </p>
                )}
              </div>

              {/* RE-PASSWORD */}
              <div className="mb-5">
                <label htmlFor="repassword" className={labelClass}>
                  Re-Password
                </label>
                <input
                  id="repassword"
                  type="password"
                  className={inputClass}
                  value={repasswordValue}
                  onChange={handleRepasswordChange}
                  onBlur={handleRepasswordBlur}
                  placeholder="Re-enter your password"
                />

                {passwordValue !== repasswordValue && repasswordValue && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`w-full py-2 rounded border text-sm font-medium transition-colors ${
                  isDark
                    ? "border-white text-white hover:bg-white hover:text-gray-900"
                    : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
