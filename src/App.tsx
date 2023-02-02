import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
// import AdminLayout from "./components/AdminLayout";
// import Layout from "./components/Layout";
import AuthGuard from "./guards/AuthGuard";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import User from "./pages/User";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Layout = lazy(() => import("./components/Layout"));
const AdminLayout = lazy(() => import("./components/AdminLayout"));
const User = lazy(() => import("./pages/User"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Uygulama genelinde sayfalara arası performas sorunlarını ortan kaldırıp sadece kullanıcının yönlendiği js dosyalarını browsera yükleme için code-splitting (suspense,lazy.component)

type Props = {};

const App = (props: Props) => {
  // routing işlemlerini yönettiğimiz route config dosyası

  // nested route yapabiliriz
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />, // Home ve About layout componentten çalışır
      children: [
        {
          path: "/home",
          element: <Home />,
          children: [],
        },
        {
          path: "/",
          element: <Home />,
          children: [],
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <AuthGuard>
          <AdminLayout />
        </AuthGuard>
        // layout componenti ve altındaki nested componentleri sarmalayarak koruma altına aldım
      ),
      children: [
        {
          path: "users", // querystring yollayabiliriz /admin/users
          element: <User />,
        },
        {
          path: "users/:id/:name", // route param
          element: <User />,
        },
        {
          path: "", // route param (admin ana path üzerinde direct user componente yönlendir)
          element: <User />,
        },
      ],
    },
    {
      path: "*", // Böyle bir url yok ise (* ile bulunamayan urller dosyanın en altında tanımlanır)
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default App;
