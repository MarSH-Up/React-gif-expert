import { render, screen} from "@testing-library/react"
import { GifGridItem } from "../../components/GifGridItem"

describe('Testing GifItem',() =>{
    const title = 'Saitama';
    const url = 'http://localhost/www.onepunchman.com/saitama.jpg';
    test('Matching SnapShot', () =>{
        
        const {container} = render( <GifGridItem title={title} url={url}/> )
        expect(container).toMatchSnapshot();
    });
    test('Showing URL and correct ALT', () =>{
        render( <GifGridItem title={title} url={url}/> )
        //screen.debug();
        //expect( screen.getByRole('img').src).toBe(url);
   
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Confirming that show the title', () =>{
        render( <GifGridItem title={title} url={url}/>);
        expect(screen.getByText(title.toUpperCase())).toBeTruthy(); //Confirming if exist
    })
})