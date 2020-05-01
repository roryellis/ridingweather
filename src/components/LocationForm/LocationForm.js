import React from 'react';
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';
import './LocationForm.css';

//react-places-autocomplete component found here. https://github.com/hibiken/react-places-autocomplete

function LocationForm(props) {
	const handleSelect = async (value) => {
		const results = await geocodeByAddress(value);
		const latLng = await getLatLng(results[0]);
		props.setAddress(value);
		props.setUserLat(latLng.lat);
		props.setUserLon(latLng.lng);
	};

	return (
		<section className='location-form'>
			<PlacesAutocomplete
				value={props.address}
				onChange={props.setAddress}
				onSelect={handleSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input {...getInputProps({ placeholder: 'Type address' })} />

						<div>
							{loading ? <div>...loading</div> : null}

							{suggestions.map((suggestion) => {
								const style = {
									backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
								};

								return (
									<div {...getSuggestionItemProps(suggestion, { style })}>
										{suggestion.description}
									</div>
								);
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		</section>
	);
}

export default LocationForm;
