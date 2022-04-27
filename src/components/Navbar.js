

export default function Navbar({lightTheme, setSettingsShown, setShowWinPage, setHowToPlayShown}){

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
        <div className={lightTheme ? "light-navbar navbar" :"navbar"}>
            <div className="nav-left">
                {lightTheme ?
                <img className="light-menu menu" src="https://img.icons8.com/material-outlined/344/menu--v1.png" />                
                :
                <img className="menu" src="https://amortgageprotection.com/images/ham-menu.png" />
                }
                {lightTheme ?
                <img onClick={showHowToPlay} className="question-mark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png" />
                :
                <img onClick={showHowToPlay} className="question-mark" src="https://cdn-icons-png.flaticon.com/512/51/51137.png" />
                }
            </div>
            <h1 className={lightTheme ? "light-linkword linkword" : "linkword"}>LinkWord</h1>
            <div className="nav-right">
                {lightTheme ?
                    <img onClick={clickedCog} className="light-cog cog" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Cog_font_awesome.svg/1200px-Cog_font_awesome.svg.png" />
                    :
                    <img onClick={clickedCog} className="cog" src="https://icon-library.com/images/white-gear-icon/white-gear-icon-6.jpg" />}
                <div onClick={clickedStats} className="stats-icon">
                    <div className={lightTheme ? "light-bar bar1 bar" : "bar1 bar"}></div>
                    <div className={lightTheme ? "light-bar bar2 bar" : "bar2 bar"}></div>
                    <div className={lightTheme ? "light-bar bar3 bar" : "bar3 bar"}></div>
                </div>                
            </div>

        </div>
    )
}