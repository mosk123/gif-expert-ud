import { useState } from 'react';
import { AddCategory, GifGrid} from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = ( newCategory) =>{
      //console.log(newCategory)
      //categories.push(newCategory);
      if (categories.includes(newCategory)) return; {
        
      }
      setCategories([newCategory,...categories,]);
    };

  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory 
      onNewCategory={ event => onAddCategory(event)}
    // setCategories={ setCategories }
    />
    
      {categories.map( (categories) => (
      <GifGrid key={ categories }
      categories={ categories }/>)
      )}
    
    </>
  )
}
