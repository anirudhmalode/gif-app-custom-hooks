import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RandomGif from "./components/RandomGif";
import TagGif from "./components/TagGif";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <RandomGif />
        </div>
        <div className="col-md-6">
          <TagGif />
        </div>
      </div>
    </div>
  );
}

export default App;
