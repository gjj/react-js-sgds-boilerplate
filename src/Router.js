import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PackageJson from "../package.json";
import ProtectedRoute from "./auth/ProtectedRoute";
import Home from "./components/Home";
import Profile from "./components/profile/Profile";
import NavbarTop from "./components/ui/NavbarTop";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <NavbarTop />
        <Content style={{ padding: "16px 50px" }}>
          <div className="site-layout-content">
            <div>
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <ProtectedRoute exact path="/profile">
                  <Profile />
                </ProtectedRoute>
              </Switch>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Build v{PackageJson.version}-
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            {process.env.REACT_APP_COMMIT_REF?.substring(0, 7)}
          </a>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}
