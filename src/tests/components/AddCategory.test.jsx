import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Testing <AddCategory />', () =>{

    const inputValue =  'Saitama';
    //Test the input in the textbox
    test('Textbox content changing',()=>{

        render( <AddCategory onNewCategory ={ () => {} }/> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } );

        expect( input.value ).toBe( inputValue );
    } );

    test('Submit testing', () => { 
        render( <AddCategory onNewCategory ={ () => {} }/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input , { target : { value : inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
     });
     test('Submit testing using jest function', () => { 

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory ={ onNewCategory }/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input , { target : { value : inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
     });

     test('No call onNewCategory if input is empty', () =>{

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory ={ onNewCategory } /> );
        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();


     })

})
