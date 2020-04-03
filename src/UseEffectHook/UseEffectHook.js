import React, { useEffect, useState } from "react";
import { getJoke } from "../utils";

/*
  Напишите компонент, который загрузит шутку о Чаке Норрисе
  Используйте useEffect

  Вам придётся использовать асинхронный эффект. Это имеет свои особенности.
*/

export const UseEffectHook = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    getJoke().then(({ value }) => setData(value));
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getJoke();

  //     setData(result.value);
  //   };

  //   fetchData();
  // });
  // console.log("data", data);
  return <div data-testid="joke">{data}</div>;
};
