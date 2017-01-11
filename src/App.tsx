import { CommentsProvider } from "./context/CommentsContext";
import Graph from "./components/Graph";
import CommentsDrawer from "./components/CommentsDrawer";
import graphJson from "./graph.json";
import "./App.css";

function App() {
  return (
    <div className="app">
      <CommentsProvider>
        <CommentsDrawer />
        <Graph graphJson={graphJson} />
      </CommentsProvider>
    </div>
  );
}

export default App;
