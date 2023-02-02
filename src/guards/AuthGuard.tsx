import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children?: any;
};

export default function AuthGuard({ children }: Props) {
  const isAuthenticated = true;
  // localstorage üzerinden access token ile token var mı yok mu kontrolleri yaparak, kullanıcın sisteme authenticated olup olmadığını kontrol ederiz yada rol amaçlı kullanıyorsak oturum açmış olan kullanıcının role bilgilerine göre yöneldirme yapacağız.
  // bu yöntemde yetki dahilinde sayfaları merkezi bir yerden koruma altına almak istiyoruz.

  if (!isAuthenticated) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
}
