import leaflet from 'leaflet';
import { useEffect, useRef } from 'react';
import { Offers } from '../../types/offers';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  className: string;
  offers: Offers;
  activeOfferId?: string | null;
}

function Map({className, offers, activeOfferId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const cityLocation = offers[0].city.location;
  const map = useMap(mapRef, cityLocation);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [28, 40],
    iconAnchor: [14, 40]
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [28, 40],
    iconAnchor: [14, 40]
  });

  useEffect(() => {
    if (map) {
      map.flyTo([cityLocation.latitude, cityLocation.longitude], cityLocation.zoom);
      const markerGroup = leaflet.layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            offer.id === activeOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });

      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [cityLocation, currentCustomIcon, activeOfferId, defaultCustomIcon, map, offers]);

  return (
    <section ref={mapRef} className={`${className}__map map`}></section>
  );
}

export default Map;
