import { useState } from "react";

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
        setInputValue(' ');
        //setCategories(categories => [...categories, inputValue])
    };
  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Search gifs"
            value={inputValue}
            onChange={onInputChange }
        />

    </form>
  );
};
