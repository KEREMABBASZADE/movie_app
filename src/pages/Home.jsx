import React from "react";
import SearchForm from "../components/SearchForm";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <div
        className="relative min-h-[400px] flex items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvbWV8ZW58MHx8fHwxNjg3NTY5NzA1&ixlib=rb-4.0.3&q=80&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
              <p className="text-lg mb-6">
                Discover millions of movies, TV shows, and people. Start
                exploring now.
              </p>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      <Movies />
    </>
  );
};

export default Home;
