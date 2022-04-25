

export default function Navbar({setSettingsShown, setShowWinPage, setHowToPlayShown}){

    function showHowToPlay(){
        setHowToPlayShown(prev => !prev)
    }
    function clickedCog(){
        setSettingsShown(prev => !prev)
    }
    function clickedStats(){
        setShowWinPage(true)
    }

    return(
        <div className="navbar">
            <div className="nav-left">
                <img className="menu" src="https://amortgageprotection.com/images/ham-menu.png" />
                <img onClick={showHowToPlay} className="question-mark" src="https://cdn-icons-png.flaticon.com/512/51/51137.png" />
            </div>
            <h1 className="linkword">LinkWord</h1>
            <div className="nav-right">
                <img onClick={clickedCog} className="cog" src="https://icon-library.com/images/white-gear-icon/white-gear-icon-6.jpg" />
                <div onClick={clickedStats} className="stats-icon">
                    <div className="bar1 bar"></div>
                    <div className="bar2 bar"></div>
                    <div className="bar3 bar"></div>
                </div>                
            </div>

        </div>
    )
}