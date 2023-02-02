import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {};

export default function AdminLayout({}: Props) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <nav>
        <Link to="users?id=1&name=ali">Ali Kullanıcısı</Link>
        {/* querystring ile sayfalara arası veri taşıma */}
        <br></br>
        <Link to="users/1/ali">Id değeri üzerinden veri yakalama</Link>
        <br></br>
        {/* route param yakalama */}
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
