import React from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';

const Map = (prop) => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY,
	});

	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerClassName="map"
			center={prop.center}
			zoom={prop.zoom}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			{<MarkerF position={prop.center} />}
			<></>
		</GoogleMap>
	) : (
		<></>
	);
};

export default React.memo(Map);
