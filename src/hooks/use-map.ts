import leaflet, { Map } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Location } from '../types/offers';
import { LeafletParameters } from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: Location) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const { latitude, longitude, zoom } = city;
      const { TILE_LAYER, ATTRIBUTION } = LeafletParameters;

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: zoom
      });

      leaflet.tileLayer(TILE_LAYER, { attribution: ATTRIBUTION }).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [city, mapRef]);

  return map;
}

export default useMap;
