export const getGifs = async(item) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=m5rNpKCZFkbdfMl7kk4A6dADltxKxGrk&q=${item}&limit=10`;
    const response = await fetch(url);
    const{data = []} = await response.json();

    const gifs = data.map( img =>({
        id: img.id, 
        title: img.title, 
        url: img.images.downsized_medium.url
    }));

    return gifs;

}