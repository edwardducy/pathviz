// React hook imports. Hooks are special functions (just like regular functions)
// that let you control the state and lifecycle of functional components.
// Functional components are functions that return React elements
// (JSX or TSX are HTML but written in JavaScript or TypeScript)
// to be rendered on the screen or to the DOM.
// Here we are importing the useEffect and useRef hooks from the React library.
import { useEffect, useRef } from "react"
// Importing the MapLibre GL JS library for rendering interactive maps.
import maplibregl from 'maplibre-gl';
// Sample CSS import for MapLibre GL JS to style the map.
// This can be customized or replaced with your own styles.
import 'maplibre-gl/dist/maplibre-gl.css';

// Functional component named App.
function App() {
  // useRef hook is used to create mutable references that persist across re-renders or updates.
  // Here we create two refs:
  // one for the map container div (where the map will be rendered)
  // another for the MapLibre map instance (the map).
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  // useEffect hook is used to perform side effects in functional components.
  // Side effects refer to any operations or actions that affect 
  // after the component has been rendered.
  // IMPORTANT: Render means the process of converting React elements (JSX or TSX)
  // into actual HTML that can be displayed on the screen or DOM.
  // IMPORTANT: Render simply means displaying something on the screen or DOM.
  useEffect(() => {
    // Do something after the component has been rendered or mounted.
    // IMPORTANT: Mounted means the process of inserting a component into the DOM for the first time.
    // IMPORTANT: Mount is simply the first render.
    if (!mapContainer.current) return;

    mapRef.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [0, 0],
      zoom: 2  
    });

    // Do something when the component is unmounted or removed from the DOM.
    // IMPORTANT: Unmounted means the process of removing a component from the DOM.
    // IMPORTANT: Unmount is simply the removal of a component from the DOM.
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    }
  }, [])

  // The JSX or TSX. This is what will be rendered on the screen or DOM.
  return (
    <div ref={mapContainer} className="w-screen h-screen"/>
  )
}

// What function to export from this file.
export default App

// Process of RENDERING:
// IMPORTANT: Same process as MOUNT and RE-RENDER / UPDATE for the first time.
// 1. The function component is called.
// 2. The JSX or TSX is returned.
// 3. React converts the JSX or TSX into a virtual DOM representation.
// 4. React compares the virtual DOM with the previous virtual DOM (if any).
// 5. React updates the actual DOM to match the virtual DOM.
// 6. The component is now rendered on the screen or DOM.