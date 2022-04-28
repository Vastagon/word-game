import { useEffect } from "react"


export default function Keyboard({lightTheme, formSubmit, setTextInput, textInput}){
    
    function handleKeyPress(e){
        if(document.getElementById("text-input")){
            setTextInput(prev => prev + e.target.name.toLowerCase())
        }
    }
    function handleDelPress(e){
        setTextInput(prev => prev.substring(0, prev.length-1))
    }
    
    useEffect(() =>{
        if(document.getElementById('text-input') && textInput !== undefined && textInput !== null){
            document.getElementById('text-input').value = textInput
        }
    }, [textInput])

    return(
        <div className="keyboard">
            <div className="keyboard-row">
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="Q">Q</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="W">W</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="E">E</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="R">R</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="T">T</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="Y">Y</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="U">U</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="I">I</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="O">O</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="P">P</button>
            </div>
            <div className="keyboard-row">
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="A">A</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="S">S</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="D">D</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="F">F</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="G">G</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="H">H</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="J">J</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="K">K</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="L">L</button>
            </div>
            <div className="keyboard-row">
                <button onClick={handleDelPress} className={lightTheme ? "light-keyboard-key special-keyboard keyboard-key" : "special-keyboard keyboard-key"} type="button">Del</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="Z">Z</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="X">X</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="C">C</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="V">V</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="B">B</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="N">N</button>
                <button onClick={handleKeyPress} type="button" className={lightTheme ? "light-keyboard-key keyboard-key" : "keyboard-key"} name="M">M</button>
                <button onClick={formSubmit} className={lightTheme ? "light-keyboard-key special-keyboard keyboard-key" : "special-keyboard keyboard-key"} type="button">Enter</button>
            </div>
        </div>
    )
}