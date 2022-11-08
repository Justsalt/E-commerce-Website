import MainContext from "./context/MainContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import GlobalStyles from "./Global-Styles";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ShopPage from "./pages/ShopPage";
import PostAdd from "./pages/PostAdd";
import ProfilePage from "./pages/ProfilePage";
import WrapperContext from "./context/WrapperContext";
import ActivePostPage from "./pages/ActivePostPage";
import ActivePostEditPage from "./pages/ActivePostEditPage";
import SinglePostPage from "./pages/SinglePostPage";
import CategoryPage from "./pages/CategoryPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <WrapperContext>
        <Router>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/shopPage" element={<ShopPage />} />
            <Route path="/postAdd" element={<PostAdd />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/userCreatedPosts" element={<ActivePostPage />} />
            <Route
              path="/userPostEdit/:id/:index"
              element={<ActivePostEditPage />}
            />
            <Route path="/userPost/:id" element={<SinglePostPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </Router>
      </WrapperContext>
    </ThemeProvider>
  );
}

export default App;
