import {BrowserRouter,Routes,Route} from "react-router-dom"
import NotFound from "./Component/404";
import Footer from "./Component/Footer";

import Home from "./Component/Home";
import Movies from "./Component/Movies";
import Navbar from "./Component/Navbar";
import Series from "./Component/Series";

function App() {

  return(

    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Series" element={<Series/>} />
  <Route path="/Movies" element={<Movies/>} />
  <Route path="*" element={<NotFound/>} />
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  )
  
}
export  default App;