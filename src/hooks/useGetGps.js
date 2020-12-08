import { useEffect, useRef, useState } from "react";
import $ from "jquery/dist/jquery.min.js";

const useGetGps = () => {
  const [state, setState] = useState({
    hour: 0,
    minute: 0,
    second: 0,
    Latitude: 0,
    Longitude: 0,
    positionInitial: [0, 0],
    loading: true,
    loadingAfterCharge: false,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    const reading = setInterval(() => {
      $(() => {
        $.getJSON("/assets/data.gps.json", (data) => {
          if (isMounted.current) {
            if (data.Status === 65) {
              setState((state) => ({
                ...state,
                Latitude: data.Latitude,
                Longitude: data.Longitude,
                loading: false,
                loadingAfterCharge: false,
              }));
            } else {
              setState((state) => ({ ...state, loadingAfterCharge: true }));
            }
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
        positionInitial: [state.Latitude, state.Longitude],
      }));
    }
  }, [state.loading]);

  return { ...state };
};

export default useGetGps;
