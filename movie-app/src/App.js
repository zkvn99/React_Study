import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <div className="header-title">Now playing</div>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
