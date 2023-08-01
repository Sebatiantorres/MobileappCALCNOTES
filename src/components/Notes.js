import React from "react";
import "../styles/notes.css"
import "./script.js"

function Notes () {
    return (
        <div className="container">

            <div className="header">
                <h1>NOTEPAD</h1>
            </div>
        
            <div className="editor-container">
                <textarea id="editor" placeholder="Escriba aquí"></textarea>
            </div>

            <div className="footer">
                <button id="guardar">Guardar</button>
                <button id="limpiar">Limpiar</button>
            </div>
        </div>
    )
}

export default Notes