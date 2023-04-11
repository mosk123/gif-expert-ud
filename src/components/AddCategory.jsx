import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

   const [inputValue, setInputValue] = useState('')

   const onInputChange = ({target}) =>{
        
        setInputValue(target.value);
   }

   const onSubmit = (event) =>{
       event.preventDefault();
       if (inputValue.trim().length <= 1) return; {
       // setCategories( categories => [inputValue,...categories,]);
       onNewCategory( inputValue.trim() );
       }
       setInputValue('');
       //setCategories( categories => [inputValue,...categories,]);
   }


  return (

    <form onSubmit={(event) => onSubmit(event)}>
      <input 
         type="text"
         placeholder="Buscar Gif"
         value={inputValue}
         onChange={onInputChange}
    // viejo modo
    // onChange={(event)=> onInputChange(event)}
     />
     </form>
  )
}
