import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useState } from 'react';

const MyGoogleMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const center = {
    lat: 49.5843421,
    lng: 34.5648984,
  };

  const mapState = {
    language: 'uk',
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
      {!mapLoaded && <div>Loading...</div>}
      <GoogleMap
        mapContainerClassName="map-wrapper"
        center={center}
        zoom={19}
        options={{
          region: 'UA',
          language: 'uk',
          gestureHandling: 'greedy',
          controlSize: 25,
          controlStyle: 2,
          zoomControlOptions: {
            position: 9,
            language: 'uk',
          },
          fullscreenControlOptions: {
            position: 1,
            language: 'uk',
          },
          mapTypeControlOptions: {
            position: 1,
            language: 'uk',
          },
          streetViewControlOptions: {
            position: 1,
            language: 'uk',
          },
          ...mapState,
        }}
        onLoad={handleMapLoad}
      >
        {mapLoaded && <MarkerF position={center} />}
      </GoogleMap>
    </LoadScript>
  );
};
export default MyGoogleMap;
