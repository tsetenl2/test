import "./App.css";
import { useState } from "react";
import Book from "./Book";
import "ui-neumorphism/dist/index.css";
import { overrideThemeVariables } from "ui-neumorphism";
import { Card, Button } from "ui-neumorphism";
import getBooks from "./get_books";

function App() {
  const [showBooks, setShowBooks] = useState(false);

  overrideThemeVariables({
    "--dark-bg": "#444444",
    "--dark-bg-dark-shadow": "#363636",
    "--dark-bg-light-shadow": "#525252",
  });

  const books = getBooks();

  setTimeout(function () {
    const e = document.querySelector("#home");
    if (e) e.parentNode.removeChild(e);
  }, 5000);

  function updateShowBooks() {
    document.getElementById("btn-card-container").style.display = "none";
    setShowBooks(true);
  }

  return (
    <div className="container" id="container">
      <div className="inner" id="home">
        <div id="backgroundchange">
          <div className="backgroundimg" id="back1"></div>
          <div className="backgroundimg" id="back2"></div>
          <div className="backgroundimg" id="back3"></div>
        </div>
      </div>
      <Card dark rounded id="btn-card-container">
        <div className="btn-container">
          <div>
            BOOKS. BY <u>MINORITIES</u>.
          </div>
          <div>
            <Button
              dark
              depressed
              style={{ height: "100px", width: "100px", textAlign: "center" }}
            >
              <i
                className="fa fa-arrow-right animated fadeIn delay-2s"
                id="next-page-btn"
                aria-hidden="true"
                onClick={(e) => updateShowBooks()}
              ></i>
            </Button>
          </div>
        </div>
      </Card>
      {showBooks && (
        <div className="book-container">
          {books.map((item, i) => {
            return <Book bookDetails={item} key={i} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
