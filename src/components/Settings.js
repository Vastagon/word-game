import "../Settings.css"

export default function Settings({setSettingsShown}){
    function removePage(){
        setSettingsShown(false)
    }
    
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
        </div>
    )
}