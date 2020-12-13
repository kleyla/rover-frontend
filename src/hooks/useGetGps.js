import { useEffect, useRef, useState } from "react";
import $ from "jquery/dist/jquery.min.js";

const useGetGps = () => {
  const [state, setState] = useState({
    Hour: 0,
    Min: 0,
    Sec: 0,
    Latitude: 0,
    Longitude: 0,
    positionInitial: [0, 0],
    NroSats: 0,
    Speed: 0,
    Height: 0,
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
                Hour: data.Hour,
                Min: data.Min,
                Sec: data.Sec,
                Latitude: data.Latitude,
                Longitude: data.Longitude,
                NroSats: data.NroSats,
                Speed: data.Speed,
                Height: data.Height,
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
