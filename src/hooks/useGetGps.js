import { useEffect, useRef, useState } from "react";
import $ from "jquery/dist/jquery.min.js";

const useGetGps = () => {
  const [state, setState] = useState({
    hour: 0,
    minute: 0,
    second: 0,
    latitude: 0,
    longitude: 0,
    positionInitial: [0, 0],
    loading: true,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    const reading = setInterval(() => {
      $(() => {
        $.getJSON("/assets/data.gps.json", (data) => {
          if (isMounted.current) {
            setState((state) => ({
              ...state,
              latitude: -17.516412,
              longitude: -63.167541,
              loading: false,
            }));
          }
        });
      });
    }, 1000);
    return () => {
      isMounted.current = false;
      clearInterval(reading);
    };
  }, []);

  useEffect(() => {
    if (!state.loading) {
      setState((state) => ({
        ...state,
        positionInitial: [state.latitude, state.longitude],
      }));
    }
  }, [state.loading]);

  return { ...state };
};

export default useGetGps;
