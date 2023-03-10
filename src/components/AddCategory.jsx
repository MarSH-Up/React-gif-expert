import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState(' ');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        let receivedValue = inputValue.trim();
        if(receivedValue.length <= 1) return;

        onNewCategory(receivedValue);
        setInputValue('');
        //setCategories(categories => [...categories, inputValue])
    };
  return (
    <form onSubmit={onSubmit} aria-label='form'>
        <input
            type="text"
            placeholder="Search gifs"
            value={inputValue}
            onChange={onInputChange }
        />

    </form>
  );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired, 
}