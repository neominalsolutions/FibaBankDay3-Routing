import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

function NotFound({}: Props) {
  const navigate = useNavigate(); // JS dosyasından bir save işlemi vs sonraki redirect olmak isterseniz bu durumda bu hook kullanılır
  //browserda önceki ve sonraki sayfaya yönlendirme yapılabiliyor

  const redirect = () => {
    navigate("home");
  };

  return (
    <div>
      404 Page
      <button onClick={redirect}>Anasayfa </button>
    </div>
  );
}

export default NotFound;
