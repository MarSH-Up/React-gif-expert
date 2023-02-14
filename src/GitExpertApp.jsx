import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

  //information that changes the html can use 
  const [categories, setCategories] = useState(['Shaman King']); 
  //You can havae multiple useStates
  const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }
  return (
    <>
    <h1>GitExpertApp</h1>
    <AddCategory 
      onNewCategory = { onAddCategory }  //The prop sending is the function
    /> 
        {/*Gif lists*/
        categories.map( ( item ) => (
          /*Gif item*/
          <GifGrid 
            key={item}
            item={item}
          />
          ))
        }   
    </>
  )
}

//Api = m5rNpKCZFkbdfMl7kk4A6dADltxKxGrk