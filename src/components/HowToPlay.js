import "../HowToPlay.css"

export default function HowToPlay({setHowToPlayShown}){
    function removePage(){
        setHowToPlayShown(false)
    }

    return(
        <div className="how-to-play">
            <div onClick={removePage} className="cross">

            </div>
            <h4>How to Play</h4>
            <p>Guess the chain in 5 tries.</p>
            <p>The chain consists of 3, 2-word 
            phrases that connect to each other
            to create a 4-word chain reaction.
            After Each Guess, you'll be given a free letter.
            The first and last words will be given
            when you start.
            A new LinkWord Chain will be available each day.
            </p>
        </div>
    )
}