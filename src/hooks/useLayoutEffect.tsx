import React, { useEffect, useLayoutEffect } from "react";

type UseLayoutEffectSampleProps = {};

export const UseLayoutEffectSample = ({}: UseLayoutEffectSampleProps) => {
  useLayoutEffect(() => {
    // DOM işlemleri için kullanılır. senkronm çalışır. async api call yapılmaz

    document.body.style.color = "red";
    document.title = "LayoutEFFECT";

    // document ile ilgili dom işlemlerini yaparız

    console.log("useLayoutEffect");

    return () => {
      // clean up işlemi

      console.log("useLayoutEffect cleanup");
    };
  }, []);

  useEffect(() => {
    // async çalışır api cal yapılır
    console.log("useEffect");
    return () => {
      console.log("useEffect cleanup");
    };
  }, []);

  return (
    <>
      <h1>React TS FC Component</h1>
      <div>List</div>
    </>
  );
};
