export default function Header({ children }) {
  return (
    <div id="header">
      <nav className="bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4">{children}</div>
      </nav>
    </div>
  );
}
