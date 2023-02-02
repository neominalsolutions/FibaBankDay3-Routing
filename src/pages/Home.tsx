import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

function Home({}: Props) {
  const navigate = useNavigate(); // history api da kullanıyor

  return (
    <div>
      <button onClick={() => navigate(-1)}>Önceki Sayfa</button>
    </div>
  );
}

export default Home;
