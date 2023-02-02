import React, { useEffect, useRef } from "react";

type Props = {};

export default function useRefSample({}: Props) {
  let number = useRef(0);
  // virtual doma etki etmez
  // component seviyesinde tekrar re-render yapmaz
  // bir değişken değere referansı tutar ve component domdan kalkana kadar bu değişken değeri referansını üzerinde tutar.
  // sayfa her bir render alındığında state değiştiğinde kaç kere render alındığını artıcak bir değişken ile ne kadar performanslı çalışıp çalışmadığını öğrenmek için kullanılabilir.

  // 2. örnek ise useRef bir element refransı ile çalışr. Virtual Dom üzerinde bir değişiklik yapmadan elementin gerçek dom referansı üzerinden işlem yaparız.
  let inputRef = useRef<HTMLInputElement>(null);
  // HTML element referansı üzerinden elemente JS APİ da gelen özellikleri vermek için useRef kullanılabilir.
  // document.getElementById('inpt1')

  useEffect(() => {
    console.log("Her bir state değişimnde gir");
  });

  return (
    <div>
      <button
        onClick={() => {
          number.current = number.current + 1;
          console.log("number", number);
        }}
      >
        Artır
      </button>
      <p>Number: {number.current}</p>

      <button
        onClick={() => {
          (inputRef.current as HTMLInputElement).focus();
        }}
      >
        Focus
      </button>
      <input placeholder="inputRef" ref={inputRef} />
    </div>
  );
}
