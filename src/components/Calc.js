import React from "react";
import "../styles/calc.css"
import "./indexCalc.js"
import "./Calculadora.js";
import Display from "./Display";

function Calc () {
    return (
        <div className="container">  
        <div className="calculadora">
            <div className="display">
                <div id="valor-anterior"></div>
                <div id="valor-actual"></div>
            </div>
            <button className="col-2" onClick={Display.borrarTodo}>C</button>
            <button onClick={Display.borrar}>&larr;</button>
            <button className="operador" value="dividir">÷</button>
            <button className="numero">7</button>
            <button className="numero">8</button>
            <button className="numero">9</button>
            <button className="operador" value="multiplicar">X</button>
            <button className="numero">4</button>
            <button className="numero">5</button>
            <button className="numero">6</button>
            <button className="operador" value="restar">-</button>
            <button className="numero">1</button>
            <button className="numero">2</button>
            <button className="numero">3</button>
            <button className="operador" value="sumar">+</button>
            <button className="col-2 numero">0</button>
            <button className="numero">.</button>
            <button className="operador" value="igual">=</button>
        </div>
    </div>
    )

    
}

export default Calc