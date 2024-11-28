import "./App.css";
// import LoginPage from "./features/auth/login-page";
import MainAppLayout from "layout/main-app-layout";
import Sidebar from "features/sidebar/sidebar";

function App() {
  return (
    <MainAppLayout>
      <Sidebar />
    </MainAppLayout>
  );
}

export default App;
