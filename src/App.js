import Category from "./component/Category";
import Food from "./component/Food";
import HeadlineCards from "./component/HeadlineCards";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />

      <HeadlineCards />

      <Food />

      <Category />

      {/* <h1 className="bg-red-500 text-green-500">hello tailwind</h1> */}
    </div>
  );
}

export default App;
