import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const MyGoogleMap = () => {
  const center = {
    lat: 49.5843421,
    lng: 34.5648984,
  };

  const mapState = {
    language: 'uk',
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerClassName="map-wrapper"
        center={center}
        zoom={18}
        options={{
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
      >
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
};
export default MyGoogleMap;
