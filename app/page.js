//page.js
export default function HomePage() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-4xl font-bold">Welcome to the Book Catalog</h1>
      <p className="mt-4 text-lg">Start exploring books or add your own!</p>
      <div className="mt-8 flex justify-center space-x-4">
        <a
          href="/auth/signup"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Sign Up
        </a>
        <a
          href="/auth/login"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
        >
          Log In
        </a>
      </div>
    </div>
  );
}
