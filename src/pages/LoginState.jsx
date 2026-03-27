import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Input from "../components/Input";
import useInput from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validations";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 5));

  function handleFormSubmit(e) {
    e.preventDefault();
    if (emailHasError || passwordHasError) return;
  }

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
            <h1 className="text-lg font-semibold">Login</h1>
          </div>
          <div className="px-6 py-5">
            <form onSubmit={handleFormSubmit}>
              <Input
                id="email"
                name="email"
                labelText="Email"
                error={emailHasError && "Geçerli email giriniz"}
                type="email"
                value={emailValue}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />
              <Input
                id="password"
                name="password"
                labelText="Password"
                error={passwordHasError && "Min. 5 karakter giriniz"}
                type="password"
                value={passwordValue}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
              />
              <button
                type="submit"
                className={`w-full py-2 rounded border text-sm font-medium transition-colors mt-2 ${
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
