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

const Header = () => <h1>Hacker News</h1>;

const List = () => (
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

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log("User is typing...");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

const App = () => (
  <div>
    <Header />
    <Search />
    <List />

    {/* Reflection */}
    {/* 1. Concise body arrow functions are used when only returning a value */}
    {/* 2. Block body arrow functions are used when we need logic inside */}
    {/* 3. Event object contains info about the event like target, value, type */}
  </div>
);

export default App;