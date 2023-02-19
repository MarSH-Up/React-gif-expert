import { getGifs } from "../../helpers/getGifs"

describe('Testing API call', () =>{
    test('Return Array of gifs', async()=>{

        const gifs = await getGifs('One punch');
        //Checking if the array length is bigger than 0, so it has something. 
        //Problem, will not evaluate the data type
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.stringContaining('https://'),  
        });

    });

})