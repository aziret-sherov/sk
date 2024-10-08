// @ts-nocheck
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useMemo } from "react";

const CustomMap = ({ addresses }: { addresses: any[] }) => {

    useEffect(() => {
        if (!addresses || addresses.length === 0) {
            console.error("No addresses provided.");
        }
    }, [addresses]);

    const mapCenter = useMemo(() => ({
        lat: addresses[0]?.lat || 42.8756483,
        lng: addresses[0]?.long || 74.5845829
    }), [addresses]);

    const icon = L.icon({
        iconUrl: 'https://www.iconpacks.net/icons/2/free-location-pin-icon-2965-thumb.png',
        iconSize: [48, 48],
    });

    return (
        <div style={{ height: '100%', width: '100%' }}>
            {addresses && addresses.length > 0 && (
                <MapContainer center={mapCenter} zoom={11} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {addresses
                        .filter((address) => address.lat && address.long) // Ensure lat/long exists
                        .map((address, index) => (
                            <Marker
                                key={index}
                                position={[address.lat, address.long]}
                                icon={icon}
                            >
                                <Popup>
                                    {address?.office || `Marker ${index + 1}`}
                                </Popup>
                            </Marker>
                        ))}
                </MapContainer>
            )}
        </div>
    );
};

export default CustomMap;
