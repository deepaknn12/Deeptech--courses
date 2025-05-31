import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );
  const [sticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Dropdown states for Course and Contact
  const [courseOpen, setCourseOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const courses = [
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Python",
    "Java",
    "C++",
    "Machine Learning",
    "Data Science",
    "AWS",
    "Docker",
    "Kubernetes",
    "JavaScript",
    "TypeScript",
    "Angular",
    "Vue JS",
    "Flutter",
    "Dart",
    "Ruby on Rails",
    "Go Lang",
  ];

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            {/* Mobile menu here if needed */}
            <a href="/" className="text-2xl font-bold cursor-pointer">
              DeepTech Courses
            </a>
          </div>
          <div className="navbar-end flex items-center space-x-6">
            {/* Course Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setCourseOpen(!courseOpen);
                  if (contactOpen) setContactOpen(false);
                }}
                className="flex items-center gap-1 cursor-pointer font-semibold hover:text-blue-600"
              >
                Course
                <svg
                  className={`w-4 h-4 transition-transform ${
                    courseOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {courseOpen && (
                <ul className="absolute mt-2 bg-white dark:bg-slate-700 rounded shadow-lg max-h-60 overflow-y-auto w-48 z-50">
                  {courses.map((course, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                      onClick={() => alert(`You clicked on ${course}`)} // ya koi action karwana ho toh
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setContactOpen(!contactOpen);
                  if (courseOpen) setCourseOpen(false);
                }}
                className="cursor-pointer font-semibold hover:text-blue-600"
              >
                Contact
              </button>
              {contactOpen && (
                <div className="absolute mt-2 bg-white dark:bg-slate-700 rounded shadow-lg p-4 w-64 z-50">
                  <p>
                    <strong>Kumar Deepu</strong>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:deepu841231@gmail.com" className="underline">
                      deepu841231@gmail.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a href="tel:6203507661" className="underline">
                      6203507661
                    </a>
                  </p>
                </div>
              )}
            </div>

            {/* About Link */}
            <a href="/about" className="cursor-pointer font-semibold hover:text-blue-600">
              About
            </a>

            {/* Theme Toggle and Login/Logout buttons here */}
            {/* ...same as before */}
          </div>
        </div>
      </div>
      {/* Spacer so fixed navbar doesn't block content */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
