export default function ErrorMessage({ message }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded my-2"
      role="alert"
    >
      {message}
    </div>
  );
}
