import "./App.css";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "../src/context/AuthContext";
function App() {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  );
}
export default App;