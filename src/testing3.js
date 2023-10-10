import * as React from "react";
import { useEffect, useState } from "react";
import useWindowScrollPosition from "../hooks/useWindowScrollPosition";
export default function MyAwesomeComponent() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // look at this; easy as pie:
  useWindowScrollPosition("MyAwesomeComponent_ScrollY", !isLoading);
  // done :)
  // example of setting a loading to false, which upon being set to 'true', triggers the effectful parts of useWindowScrollPosition
  const fetchData = async () => {
    try {
      const data = await fetch("https://your-api-url-here.com");
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!data) {
      fetchData();
    }
  });
  return (
    <>
      <p>Hello world!</p>
      <button onClick={onClick}>Click me!</button>
    </>
  );
}
