import React, {useState} from 'react';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Hola mundo')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setCategories( cats => [...cats, inputValue] )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
            type="text"
            value={inputValue}
            onChange={ (e) => handleInputChange(e) }
            />
        </form>
    );
}

export default AddCategory;