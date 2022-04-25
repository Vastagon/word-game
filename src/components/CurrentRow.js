

export default function CurrentRow({flashGreen, flashRed, clickRowOne, clickRowTwo, onClick, onClick2, startTimerBoolean, prevWordArray, textInput}){

    if(startTimerBoolean){
        ///Row One Clicked
        if(clickRowOne){
            if(!flashRed && !flashGreen){
                return(
                    ///Current typing first row
                    <div className='guessing-container'>
                        <div id="current-word" className='current-word single-word'>
                            <div className="current-word single-letter">{textInput?.substring(0,1).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(1,2).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(2,3).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(3,4).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(4,5).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(5,6).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(6,7).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(7,8).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(8,9).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(9,10).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(10,11).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(11,12).toUpperCase()}</div>
                        </div>
                        <div onClick={onClick} className='single-word'>
                            <div className="single-letter">{prevWordArray[0]?.substring(0,1).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(1,2).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(2,3).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(3,4).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(4,5).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(5,6).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(6,7).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(7,8).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(8,9).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(9,10).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(10,11).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(11,12).toUpperCase()}</div>
                        </div>
                    </div>
                )
            }else if(!flashGreen){
                return(
                    ///Current typing first row wrong guess
                    <div className='guessing-container'>
                        <div id="current-word" className='red-word single-word'>
                            <div className="red-word single-letter">{textInput?.substring(0,1).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(1,2).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(2,3).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(3,4).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(4,5).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(5,6).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(6,7).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(7,8).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(8,9).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(9,10).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(10,11).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(11,12).toUpperCase()}</div>
                        </div>
                        <div onClick={onClick} className='single-word'>
                            <div className="single-letter">{prevWordArray[0]?.substring(0,1).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(1,2).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(2,3).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(3,4).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(4,5).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(5,6).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(6,7).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(7,8).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(8,9).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(9,10).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(10,11).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(11,12).toUpperCase()}</div>
                        </div>
                    </div>
                )
            }else{
                return(
                    ///Current typing first row correct guess
                    <div className='guessing-container'>
                        <div id="current-word" className='single-word'>
                            <div className="single-letter">{textInput?.substring(0,1).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(1,2).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(2,3).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(3,4).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(4,5).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(5,6).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(6,7).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(7,8).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(8,9).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(9,10).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(10,11).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(11,12).toUpperCase()}</div>
                        </div>
                        <div onClick={onClick} className='green-word single-word'>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(0,1).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(1,2).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(2,3).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(3,4).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(4,5).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(5,6).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(6,7).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(7,8).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(8,9).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(9,10).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(10,11).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(11,12).toUpperCase()}</div>
                        </div>
                    </div>
                )
            }

        }else if(clickRowTwo){
            ///Row Two Clicked
            if(!flashRed && !flashGreen){
                return(
                    ///Typing on row two
                    <div className='guessing-container'>
                        <div onClick={onClick2} className="single-word">
                            <div className="single-letter">{prevWordArray[0]?.substring(0,1).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(1,2).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(2,3).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(3,4).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(4,5).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(5,6).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(6,7).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(7,8).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(8,9).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(9,10).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(10,11).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(11,12).toUpperCase()}</div>    
                        </div>
    
                        <div id="current-word" className="current-word single-word">
                            <div className="current-word single-letter">{textInput?.substring(0,1).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(1,2).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(2,3).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(3,4).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(4,5).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(5,6).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(6,7).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(7,8).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(8,9).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(9,10).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(10,11).toUpperCase()}</div>
                            <div className="current-word single-letter">{textInput?.substring(11,12).toUpperCase()}</div>
                        </div>
                        
                    </div>
                )
            }else if(!flashGreen){
                return(
                    ///Typing on row two incorrect guess
                    <div className='guessing-container'>
                        <div onClick={onClick2} className="single-word">
                            <div className="single-letter">{prevWordArray[0]?.substring(0,1).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(1,2).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(2,3).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(3,4).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(4,5).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(5,6).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(6,7).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(7,8).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(8,9).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(9,10).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(10,11).toUpperCase()}</div>
                            <div className="single-letter">{prevWordArray[0]?.substring(11,12).toUpperCase()}</div>    
                        </div>
    
                        <div id="current-word" className="red-word single-word">
                            <div className="red-word single-letter">{textInput?.substring(0,1).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(1,2).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(2,3).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(3,4).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(4,5).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(5,6).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(6,7).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(7,8).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(8,9).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(9,10).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(10,11).toUpperCase()}</div>
                            <div className="red-word single-letter">{textInput?.substring(11,12).toUpperCase()}</div>
                        </div>
                        
                    </div>
                )
            }else{
                return(
                    ///Typing on row two correct guess
                    <div className='guessing-container'>
                        <div onClick={onClick2} className="green-word single-word">
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(0,1).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(1,2).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(2,3).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(3,4).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(4,5).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(5,6).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(6,7).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(7,8).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(8,9).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(9,10).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(10,11).toUpperCase()}</div>
                            <div className="green-word single-letter">{prevWordArray[0]?.substring(11,12).toUpperCase()}</div>    
                        </div>
    
                        <div id="current-word" className="single-word">
                            <div className="single-letter">{textInput?.substring(0,1).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(1,2).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(2,3).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(3,4).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(4,5).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(5,6).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(6,7).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(7,8).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(8,9).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(9,10).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(10,11).toUpperCase()}</div>
                            <div className="single-letter">{textInput?.substring(11,12).toUpperCase()}</div>
                        </div>
                        
                    </div>
                )
            }

        }else{
            ///Neither is clicked
            return(
                <div className='guessing-container'>
                    <div onClick={onClick} className="current-word single-word">
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                    </div>
                    <div onClick={onClick2} className="current-word single-word">
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                        <div className="current-word single-letter"></div>
                    </div>
                </div>
            )
        }
    }else{
        ///While timer isn't playing
        return(
                <div className='single-word'>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                    <div className="single-letter"></div>
                </div> 
        )
    }




}