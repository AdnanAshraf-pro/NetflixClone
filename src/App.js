import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        isLargeRow
        title="Netflix Orignal"
        fetchUrl={requests.fetchNetflixOrignals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchDocumentries} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchNetflixOrignals} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default App;
