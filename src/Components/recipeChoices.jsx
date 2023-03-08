import react, {Component, useState} from "react";

const RecipeChoices = ({handleChange, label, choices, currentVal}) => {

    return (
        <div className="list-choices">
            <input 
                    
                    type="type"
                    name={label}
                    value={currentVal}
                    placeholder="Guess the ingredient..."
                    onChange={handleChange}
                    className="textbox"
                />
            {choices && 
              choices.map((choice) => (
                <li key={choice}>
                    {choice}
                </li>
            ))}
        </div>
    );
};

export default RecipeChoices;

