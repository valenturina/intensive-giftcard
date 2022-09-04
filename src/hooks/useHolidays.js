import { useState, useEffect } from "react";
import { URI_API } from "../const";

export const useHolidays = () => {
  const [holidays, setHolidays] = useState({});

  useEffect(() => {
    fetch(URI_API)
      .then((responce) => {
        if (responce.status !== 200) {
          throw new Error(responce.status);
        }
        return responce.json();
      })
      .then((data) => setHolidays(data))
      .catch((er) => console.error(er));
  }, []);
    
  return [holidays]
};
