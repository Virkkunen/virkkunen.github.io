import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMastodon, fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCode, faClock, faDiceD20, faBowlFood, faStore, faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import AppProvider from "./context/AppProvider";

library.add(fab, faEnvelope, faCode, faClock, faDiceD20, faBowlFood, faStore, faCloudMoon, faMastodon);

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
