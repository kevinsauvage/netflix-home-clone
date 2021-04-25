import "./App.css";
import Banner from "./layout/banner/Banner";
import Header from "./layout/header/Header";
import requests from "./requests";
import Row from "./components/row/Row";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Actions" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
