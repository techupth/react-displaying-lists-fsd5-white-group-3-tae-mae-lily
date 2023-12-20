import "./App.css";
import MoviesList from "./data/movies";

const App = () => {
 
  return (
    <div className="App">
      <section className="movie-list-section">
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
