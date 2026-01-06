import { useEffect, useRef } from "react"
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapRef.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [0, 0],
      zoom: 2
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    }
  }, [])

  return (
    <div ref={mapContainer} className="w-screen h-screen"/>
  )
}

export default App
