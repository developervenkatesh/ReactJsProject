import logo from "./logo.svg";
import "./App.css";

function App() {
  const courses = [
    "Java",
    "PHP",
    "JavaScript",
    "Angular",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Spring Boot",
    "TypeScript",
  ];

  const handleCourseClick = (course) => {
    console.log("Selected course:", course);
  };

  return (
    <div className="app-container">
      <h1 className="title">Interview Questions and Answers</h1>

      <div className="tech-grid">
        {courses.map((course, index) => (
          <div
            key={index}
            className="tech-card"
            onClick={() => handleCourseClick(course)}
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
