import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ModalTile = ({id, ...rest}) => {

    const [location, setLocation] = useState('')
    const [type, setType] = useState('') 
    const [dimension, setDimension] = useState('')
    const [numOfResidents, setNumOfResidents] = useState(0)

	// Retrieve data from API about the character's location
	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/location/${id}`)
			.then(response => response.data).then(res => {
				const { name, type, dimension, residents } = res
				setLocation(name)
				setType(type)
				setDimension(dimension)
				setNumOfResidents(residents && residents.length)
			})
	}, [id])
		
	// Content for text to display on Modal
	return (
			<React.Fragment>
		    	<p> Location Name: {location} </p>
		        <p> Type: {type} </p>
		        <p> Dimension: {dimension} </p>
		        <p> Number of residents: {numOfResidents} </p>
			</React.Fragment>
		);
}


export default ModalTile;
