'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { places } from '../data/places';

// Use CDN-hosted marker icons rather than bundling Leaflet's default
// images — avoids the classic webpack/Next asset-path breakage.
const markerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export function JourneyMap() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-medium">Places I&apos;ve studied, lived, and worked</h2>
      <div className="h-[420px] w-full overflow-hidden rounded-lg border">
        <MapContainer
          center={[46, 12]}
          zoom={4}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map((p) => (
            <Marker key={p.city} position={[p.lat, p.lon]} icon={markerIcon}>
              <Popup>
                <strong>
                  {p.city}, {p.country}
                </strong>
                <br />
                {p.label}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
