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
    loadingAfterCharge: false,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    const reading = setInterval(() => {
      $(() => {
        $.getJSON("/assets/data.gps.json", (data) => {
          if (isMounted.current) {
            if (data.status === 65) {
              setState((state) => ({
                ...state,
                latitude: data.latitude,
                longitude: data.longitude,
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
        positionInitial: [state.latitude, state.longitude],
      }));
    }
  }, [state.loading]);

  return { ...state };
};

export default useGetGps;
