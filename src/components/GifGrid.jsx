import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({item}) => { 

    const {images, isLoading} = useFetchGifs(item);
    return (
        <>
            <h3>{item}</h3>
            {
                isLoading && (<h2 >Loading...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map( (image) =>(
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
      )
}
