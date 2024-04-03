import Login from "./Login";
import ProtectedRoute from "./routeguard.jsx";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Callback from "./callback.jsx";
import { IoMdSettings } from "react-icons/io";
import SettingsDrawer from "./settingsdrawer.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="header">
        <img src={<IoMdSettings />} className="cog"></img>
        <SettingsDrawer />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
      <div className="footer"></div>
    </BrowserRouter>
  );
};

export default App;
