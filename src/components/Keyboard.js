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
                    <button onClick={handleDelPress} className={lightTheme ? "light-keyboard-key special-keyboard keyboard-key" : "special-keyboard keyboard-key"} type="button">
                        {/* <div className="svg-wrapper"> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi" viewBox="0 0 16 16">
                            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"></path>
                            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"></path>
                        </svg>
                        {/* </div> */}

                    </button>                    

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