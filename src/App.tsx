import "./App.scss";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="general">
      <TopBar />
      <Outlet />
      <BottomBar />
    </main>
  );
}

export default App;
