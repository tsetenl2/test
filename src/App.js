import "./App.css";
import Book from "./Book";
import "ui-neumorphism/dist/index.css";
import { overrideThemeVariables } from "ui-neumorphism";

function App() {
  overrideThemeVariables({
    "--dark-bg": "#273440",
    "--dark-bg-dark-shadow": "#21252a",
    "--dark-bg-light-shadow": "#313740",
  });

  const books = [
    {
      src:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
    },
    {
      src:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
    },
    {
      src:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
    },
    {
      src:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
    },
    {
      src:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
    },
    {
      src:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105",
    },
  ];
  return (
    <div className="container">
      {books.map((item, i) => {
        return <Book bookDetails={item} key={i} />;
      })}
    </div>
  );
}

export default App;
