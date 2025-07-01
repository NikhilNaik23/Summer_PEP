import DataFetching from "./components/DataFetching";
import Feedback from "./components/Feedback";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <Home />
      <DataFetching />
      <Feedback />
    </div>
  );
};

export default App;
