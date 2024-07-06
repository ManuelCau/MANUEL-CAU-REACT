import { useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function getCurrentPosition() {
    setLoading(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      setLoading(false);
    } else {
      setError(
        "Your browser does not support geolocation. Please try with another browser."
      );
      setLoading(false);
    }
  }

  return { location, loading, error, getCurrentPosition };
}
