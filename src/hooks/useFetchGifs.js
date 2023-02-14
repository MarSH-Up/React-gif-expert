import { useState, useEffect  } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (item) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getImages = async() =>{
        const newImages =  await getGifs(item);
        setImages(newImages, ...images);
        setIsLoading(false);
    }; 

    useEffect( () =>{
        getImages();
    }, []);
  
  console.log('images:', images);
  return {
    images, 
    isLoading, 
  }
}
