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

function Header() {
  return <h1>Hacker News</h1>;
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

function List() {
  return (
    <div>
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
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />

      {/* Reflection */}
      {/* 1. App is the root component that assembles everything */}
      {/* 2. List is responsible for rendering the stories */}
      {/* 3. Search is responsible for the search input UI */}
      {/* 4. This structure is cleaner because each component has one job */}
    </div>
  );
}

export default App;