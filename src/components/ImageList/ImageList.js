import React, { useState } from 'react';
import './ImageList.css';
import Modal from "../Modal/Modal";
import ImageTile from '../ImageTile/ImageTile';



const ImageList = ({characters, ...props}) => {

	// Map each character from list to an image tile on webpage
	return <div className="image-list">{characters && characters.length > 0 && 
				characters.map((character , index) => {
				const {id} = character
				return (<ImageTile key={id}  character={character} {...character}/>)
					})
			}
	</div>;
};

export default ImageList;