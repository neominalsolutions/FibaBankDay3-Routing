import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {};

function Layout({}: Props) {
  return (
    <div style={{ padding: "20px" }}>
      <header>
        <h1>Layout Component</h1>
      </header>

      <section>
        <nav>
          <Link to="/home">Home Page</Link>
          &nbsp;
          <Link to="/about">About Page</Link>
          &nbsp;
          <Link to="/admin">Admin Pages</Link>
        </nav>
      </section>

      {/* dinamik içeriğin değişimini işaretlediğimiz aln */}
      <main>
        <Outlet />
      </main>

      <footer>Alt Bilgi</footer>
    </div>
  );
}

export default Layout;
