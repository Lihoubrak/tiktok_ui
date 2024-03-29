import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Routes";
import DefultLayout from "./Layout/DefaultLayout";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout === null ? Fragment : DefultLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
