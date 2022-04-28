import "../Settings.css"
import { useEffect } from "react"

export default function Settings({lightTheme, setLightTheme, setSettingsShown}){

    function removePage(){
        setSettingsShown(false)
    }

    useEffect(() =>{
        localStorage.wordLinkLightTheme = lightTheme
    }, [lightTheme])
    
    return(
        <div className="settings">
            <div onClick={removePage} className="cross" />
            <h4>SETTINGS</h4>
            <div className="feedback">
                <p>FEEDBACK</p>
                <a href="mailto:LinkWordGame@gmail.com">EMAIL</a>
            </div>
            <div className="community">
                <p>COMMUNITY</p>
                <a target="_blank" href="https://twitter.com/LinkWordGame">TWITTER</a>
            </div>
            <div>
                <label className="switch">
                    
                    <input
                        id ="checkbox_id"
                        type="checkbox"
                        checked={lightTheme}
                        onChange={() => {setLightTheme(prev => !prev)}}
                    />   
                        <span className="slider"></span>
                        <p className="slider-text">LIGHT THEME</p>
                </label>                
            </div>

        </div>
    )
}