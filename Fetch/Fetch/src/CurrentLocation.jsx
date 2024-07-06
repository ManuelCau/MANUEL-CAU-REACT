import { useCurrentLocation } from "./custom hooks/useCurrentLocation";

export function CurrentLocation() {
  const { location, loading, error, getCurrentPosition } = useCurrentLocation();
  return (
    <div>
      <button onClick={getCurrentPosition}>Get your position!</button>

      {loading && <h1>Sto cercando la tua posizione</h1>}
      {location && (
        <div>
          <h1>La tua posizione è </h1>
          <h3>latitude: {location.latitude} </h3>
          <h3>longitude: {location.longitude} </h3>
        </div>
      )}
      {error && <h1>Mi dispiace caricamento non riuscito </h1>}
    </div>
  );
}
