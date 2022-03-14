import React, {useState} from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    //const categories = ['One punch man', 'Samurai x', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch man', 'Samurai x', 'Dragon Ball'])

/*     const handleAdd = () => {
        //setCategories([...categories, 'Naruto'])
        setCategories( cats => [...cats, 'Naruto'] )
    } */

    return (
        <div>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={ setCategories }/>
           <hr/> 

           <button /* onClick={ handleAdd } */>Agregar</button>

            <ol>
                {
                    categories.map( category => (
                        <li key={ category }>{category}</li>
                    ))
                }
            </ol>

        </div>
    );
}

export default GifExpertApp;
