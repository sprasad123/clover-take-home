import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import ModalTile from '../ModalTile/ModalTile';

const ImageTile = ({ character, ...rest }) => {
	const [toggleModal, setToggleModal] = useState(false);
    const { name, id, image } = character || '';
    const onCloseClick= () => {
            setToggleModal(!toggleModal)
    }
    // If we click on a single character's image button then open Modal
    return (
        <article {...rest}>
            {toggleModal &&            
                <Modal onCloseClick={() => setToggleModal(false)}>
                    <ModalTile id={id} />   
                </Modal>}
            <button className="openModalBtn" onClick={() => setToggleModal(true)}>
                <img key={id} src={image} />
            </button>
            <p>{name}</p>
        </article>
    )
}

export default ImageTile;
