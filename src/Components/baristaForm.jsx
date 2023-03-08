import React, {Component, useState} from "react";
import RecipeChoices from "./recipeChoices";
import drinksJason from "./drinks.json"

const BaristaForm = () => {

    const [currentDrink, setCurrentDrink] = useState('');
    const [truRecipe, setTrueRecipe] = useState({});
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });
    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');
    const [currentVal, setCurrentVal] = useState('');

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
      
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
      
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
      
        'blended': ['yes', 'turbo', 'no']
      }
      

    const onCheckAnswer = () => {

        if (truRecipe.temperature != inputs['temperature']){
            setCheckedTemperature('wrong');
            if(!ingredients['temperature'].includes(inputs['temperature'])) {
                alert("For temperature, that isn't even an option!")
            }
            
        }
        else {
            setCheckedTemperature("correct");
        }

        if (truRecipe.syrup != inputs['syrup']) {
            setCheckedSyrup('wrong');
            if(!ingredients['syrup'].includes(inputs['syrup'])) {
                alert("For syrup, that isn't even an option!")
            }
        }
        else {
            setCheckedSyrup("correct");
        }

        if (truRecipe.milk != inputs['milk']) {
            setCheckedMilk('wrong');
            if(!ingredients['milk'].includes(inputs['milk'])) {
                alert("For milk, that isn't even an option!")
            }
        }
        else {
            setCheckedMilk("correct");
        }

        if(truRecipe.blended != inputs['blended']) {
            setCheckedBlended('wrong');
            if(!ingredients['blended'].includes(inputs['blended'])) {
                alert("For blended, that isn't even an option!")
            }
        }
        else {
            setCheckedBlended('correct');
        }

    }

    //set the state variable for our ingredients to be empty, and then call getNextDrink()
    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });

        getNextDrink();

        setCurrentVal('');
        setCheckedTemperature('');
        setCheckedMilk('');
        setCheckedBlended(''); 
        setCheckedSyrup('');
         

    }

    // generate a random number and set the current drink and the truerecipe 
    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJason.drinks.length);

        setCurrentDrink(drinksJason.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJason.drinks[randomDrinkIndex].ingredients);
    }


    
    return (
        <div className="">
            <h2>Hi, I'd like to order a:</h2>

            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button 
                    type="new-drink-button"
                    className="button-newdrink"
                    onClick={onNewDrink}
                >
                🔄
                </button>
            </div>
            <form className="container">
                
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space" id={correct_temp}>
                        {inputs["temperature"]}
                    </div>
                    <RecipeChoices 
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name] : e.target.value,
                        }))}
                        label="temperature"
                        choices={ingredients["temperature"]}
                        checked={currentVal}
                    />
                </div>

                <div className="mini-container">
                <h3>Milk</h3>
                    <div className="answer-space" id={correct_milk}>
                        {inputs["milk"]}
                    </div>
                    <RecipeChoices 
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name] : e.target.value
                        }))}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className="answer-space" id={correct_syrup}>
                        {inputs["syrup"]}
                    </div>
                    <RecipeChoices 
                        handleChange = {(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name] : e.target.value
                        }))}
                        label = "syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>

                <div className="mini-container">
                <h3>Blended</h3>
                    <div className="answer-space" id={correct_blended}>
                        {inputs["blended"]}
                    </div>
                    <RecipeChoices 
                        handleChange = {(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name] : e.target.value
                        }))}
                        label = "blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>


            </form>

            <button type="submit" className="button-submit" onClick={onCheckAnswer}>
                Check Answer
            </button>

            

        </div>
    );
};

export default BaristaForm;