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
                <p className="explanation">LinkWord is a word chain daily puzzle that you can solve and compete with your friends. The game consists of a 4 word-chain composed of 3,
                2-word phrases that connect to each other to complete the puzzle. You will be given the first and last words when you start playing. From there, 
                you can choose to start guessing the 2nd or 3rd word by clicking on it and typing out your guesses. If you are correct, the field will turn green
                and you will move on to the next word. If you are wrong, it will turn red and a free letter will be given to you for your next guess. You will 
                have 3 tries to guess each word and your previous guesses will be displayed on the screen. You will be timed, so complete the puzzle quick to 
                beat your friends and be claimed the LinkWord master. Make sure to share your results and show off your genius abilities. A new LinkWord chain 
                will be available each day.</p>                 
      
            <br></br>
            <p className="example">Example: "Crushed" - "?" - "?" - "Bottle" will be given and you will guess the 2 words represented by question marks.
            The 2nd word is "Ice" and the 3rd word is "Water". This makes the 3, 2-word phrases: "Crushed Ice", "Ice Water", "Water Bottle".</p>
            
        </div>
    )
}