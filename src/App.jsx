// Data Structure Comment:
// objectID should be used as the React key because it's unique
// This structure is realistic for an API like Hacker News

const stories = [
  {
    objectID: 1,
    title: "React Official Documentation",
    url: "https://react.dev",
    author: "Meta",
    points: 312,
    num_comments: 45,
  },
  {
    objectID: 2,
    title: "Vite - Next Generation Frontend Tooling",
    url: "https://vitejs.dev",
    author: "Evan You",
    points: 254,
    num_comments: 32,
  },
  {
    objectID: 3,
    title: "JavaScript MDN Web Docs",
    url: "https://developer.mozilla.org",
    author: "Mozilla",
    points: 400,
    num_comments: 60,
  },
];

function App() {
  return (
    <div>
      <h1>Hacker News Stories</h1>
      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url} target="_blank" rel="noreferrer">
              {story.title}
            </a>
          </h3>
          <p>Author: <span>{story.author}</span></p>
          <p>Points: <span>{story.points}</span></p>
          <p>Comments: <span>{story.num_comments}</span></p>
        </div>
      ))}

      {/* Reflection */}
      {/* 1. map() is essential because it transforms each item into JSX */}
      {/* 2. objectID is the correct key because it's unique and stable */}
      {/* 3. When using the API, stories will come from a fetch call instead of a hardcoded array */}
    </div>
  );
}

export default App;