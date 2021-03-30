import { BrowserRouter } from "react-router-dom";
import Routes from "router";
import { AuthProvider } from "hooks/auth";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
