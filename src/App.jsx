import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'
import SinglePage from "./pages/singlePage";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/singlePage/:userId' element={<SinglePage />}/>
    </Routes>
    </>
  );
}

export default App;
