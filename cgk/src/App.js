import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import UserForm from "./components/UserForm";

function App() {
  const [open, setOpen] = useState(false);
  const courses = [
    {
      name: "React",
      link: "https://webbuilderdesk.com/react-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Java",
      link: "https://webbuilderdesk.com/java-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "PHP",
      link: "https://webbuilderdesk.com/php-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "JavaScript",
      link: "https://webbuilderdesk.com/javascript-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Angular",
      link: "https://webbuilderdesk.com/angular-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Node.js",
      link: "https://webbuilderdesk.com/nodejs-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      link: "https://webbuilderdesk.com/python-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "SQL",
      link: "https://webbuilderdesk.com/sql-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Spring Boot",
      link: "https://webbuilderdesk.com/spring-boot-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "TypeScript",
      link: "https://webbuilderdesk.com/typescript-kit/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ];

  const handleCourseClick = (course) => {
    console.log("Selected course:", course.name, course.link);
    // e.g. navigate: window.location.href = course.link
  };

  // New: options for the news-like scroll
  const tickerOptions = [
    "Classes",
    "Interview Questions",
    "Interview Question and answers",
    "Mock Interviews",
  ];

  const handleTickerClick = (option) => {
    console.log("Ticker option clicked:", option);
    // add navigation or modal logic here
  };

  return (
    <div className="app-container">
      <h1 className="title">Choose Your Technology KIT</h1>

      {/* News ticker */}
      <div className="news-ticker" aria-label="Resources ticker">
        <div className="news-track">
          {/* duplicate content to create seamless infinite scroll */}
          {[...tickerOptions, ...tickerOptions].map((opt, i) => (
            <div
              key={i}
              className="news-item"
              onClick={() => handleTickerClick(opt)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && handleTickerClick(opt)
              }
            >
              {opt}
            </div>
          ))}
        </div>
      </div>

      <div className="tech-grid">
        {courses.map((course, index) => (
          <a
            key={course.link || index}
            href={course.link}
            className="tech-card popmake-13412"
            aria-label={course.name}
            onClick={(e) => {
              handleCourseClick(course);
              // If using client-side routing (react-router) prevent full reload:
              // e.preventDefault();
              // navigate to course.link with your router instead
            }}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(${course.logo})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "64px",
            }}
          >
            {course.name}
          </a>
        ))}
      </div>

      <button class="signInButton" onClick={() => setOpen(true)}>
        Sign In
      </button>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <UserForm onClose={() => setOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default App;
