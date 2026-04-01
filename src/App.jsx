const courseTitle = "Advanced Web Development";

function App() {
  const studentName = "Hamza";

  const student = {
    name: "Hamza",
    age: 22,
    track: "Web Development"
  };

  function sayHello() {
    return `Hello, ${studentName}!`;
  }

  return (
    <div>
      <h1>My First React Component</h1>
      <p>Student Name: {studentName}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="input">Enter something: </label>
      <input type="text" id="input" />
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>

      {/* Reflection */}
      {/* 1. I understand how JSX works and how to display variables */}
      {/* 2. I'm still getting used to the difference between {} and without */}
      {/* 3. I forgot to use htmlFor instead of for on the label */}
    </div>
  );
}

export default App;