import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import ImageList from './components/ImageList/ImageList';

const App = () => {
    const [characters, setCharacters] = useState([])
    const [errorMessage, seterrorMessage] = useState('Something went wrong. Please reload.')

    // Retrieve list of characters from API endpoint
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => response.data).then( res => setCharacters(res.results))
        }, [])
        
    // If GET request is successful, pass the characters list as a prop
    return (
        <div>
            {characters ?
                (<ImageList characters={characters} />) :
                (<div>Error: {this.state.errorMessage}</div>)}
        </div>
    );
}

export default App; 
