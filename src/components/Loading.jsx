export default function Loading() {
  return (
    <div className="flex justify-center items-center py-4" role="status">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
