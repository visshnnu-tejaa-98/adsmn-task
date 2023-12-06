import "./App.css";
import { Outlet } from "react-router-dom";
import { AppContextProvider } from "./contexts/appContext";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] bg-app fixed overflow-auto relative">
      <AppContextProvider>
        <Outlet />
      </AppContextProvider>
    </div>
  );
}

export default App;
