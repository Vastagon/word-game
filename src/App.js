import './App.css';
import {useEffect, useState, useRef, useCallback} from "react"
import Keyboard from "./components/Keyboard"
import CurrentRow from './components/CurrentRow';
import Navbar from "./components/Navbar"
import WinPage from './components/WinPage';
import {v4 as uuid} from "uuid"
import axios from "axios"
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import LastWord from './components/LastWord';
import HowToPlay from './components/HowToPlay';
import Settings from './components/Settings';


function App() {
  ///array of words used for puzzle
  const [wordDB, setWordDB] = useState()
  const [textInput, setTextInput] = useState("")
  const [incorrectWordsLine1] = useState([])
  const [incorrectWordsLine2] = useState([])
  const [heightCounter, setHeightCounter] = useState(0)
  const [tries, setTries] = useState(1)
  ///array for displaying previous tries
  const [prevWordArray, setPrevWordArray] = useState([])
  ///Array of middle words that will be checked

  const [wordDBChecker, setWordDBChecker] = useState([])
  
  const [showWinPage, setShowWinPage] = useState(false)
  const [guessingContainer, setGuessingContainer] = useState()

  const [localStorageState, setLocalStorageState] = useState()
  const [startTimerBoolean, setStartTimerBoolean] = useState(false)
  const [lineChecker, setLineChecker] = useState()
  const [winChecker, setWinChecker] = useState(0)

  let hasLineChanged = false
  const [rowChangedState, setRowChangedState] = useState(false)

  const [firstRowClicked, setFirstRowClicked] = useState(false)  
  const [gameStarted, setGameStarted] = useState(false)

  ///Shown boolean variables
  const [howToPlayShown, setHowToPlayShown] = useState(false)
  const [settingsShown, setSettingsShown] = useState(false)

  const [flashRed, setFlashRed] = useState(false)
  const [flashGreen, setFlashGreen] = useState(false)

  const [firstWord, setFirstWord] = useState()
  const [lastWord, setLastWord] = useState()
  ///Checking the row
  const [clickRowOne, setClickRowOne] = useState(false)
  const [clickRowTwo, setClickRowTwo] = useState(false)

  const [showIncorrectWordsLine1, setShowIncorrectWordsLine1] = useState([]) 
  const [showIncorrectWordsLine2, setShowIncorrectWordsLine2] = useState([])


  const [linkWordDay, setLinkWordDay] = useState()

  ///on page load
  useEffect(() =>{
    ///gets used problems
    axios.get(process.env.REACT_APP_APIURIUSEDPROBLEMS)
    .catch(res => console.log(res))
    .then(res => {
      ///Displayed day
      setLinkWordDay(res?.data.length + 1)
    })

    axios.get(process.env.REACT_APP_APIURI)
    .then(res => {
      ///Setting variables from API
      setWordDB(res?.data)
      setFirstWord(res?.data?.wordArray[0].toUpperCase())
      setLastWord(res?.data.wordArray[res?.data.wordArray.length-1]?.toUpperCase())

      ///Init local storage
      if (localStorage.getItem("wordLinkHasWonToday") === null) {
        localStorage.wordLinkHasWonToday = "[]"
      }      
      if (localStorage.getItem("wordLinkTotalPlays") === null) {
        localStorage.wordLinkTotalPlays = 0
      }
      if (localStorage.getItem("wordLinkWins") === null) {
        localStorage.wordLinkWins = 0
      }
      if (localStorage.getItem("wordLinkMaxStreak") === null) {
        localStorage.wordLinkMaxStreak = 0
      }
      if (localStorage.getItem("wordLinkCurrentStreak") === null) {
        localStorage.wordLinkCurrentStreak = 0
      }
      if (localStorage.getItem("wordLinkBestTime") === null) {
        localStorage.wordLinkBestTime = Number.MAX_SAFE_INTEGER
      }
      if (localStorage.getItem("wordLinkAverageTime") === null) {
        localStorage.wordLinkAverageTime = 0
      }
      if (localStorage.getItem("wordLinkTotalTime") === null) {
        localStorage.wordLinkTotalTime = 0
      }
      if (localStorage.getItem("wordLinkTopLine") === null) {
        localStorage.wordLinkTopLine = "[0,0,0,0]"
      }
      if (localStorage.getItem("wordLinkBottomLine") === null) {
        localStorage.wordLinkBottomLine = "[0,0,0,0]"
      }
      if(localStorage.wordLinkIncorrectLine1 === undefined){
        localStorage.wordLinkIncorrectLine1 = "[]"
      }
      if(localStorage.wordLinkIncorrectLine2 === undefined){
        localStorage.wordLinkIncorrectLine2 = "[]"
      }

      ///Local Storage Variables
      setLocalStorageState(() =>({
        totalPlays: parseInt(localStorage.wordLinkTotalPlays),
        wins: parseInt(localStorage.wordLinkWins),
        maxStreak: parseInt(localStorage.wordLinkMaxStreak),
        currentStreak: parseInt(localStorage.wordLinkCurrentStreak),
        bestTime: parseInt(localStorage.wordLinkBestTime),
        averageTime: parseInt(localStorage.wordLinkAverageTime),
        totalTime: parseInt(localStorage.wordLinkTotalTime),
        topLine: JSON.parse(localStorage.wordLinkTopLine),
        bottomLine: JSON.parse(localStorage.wordLinkBottomLine)
      }))




      ///Checking if they've played today
      if(localStorage.wordLinkHasWonToday === JSON.stringify(res.data.wordArray)){
        setShowWinPage(true)
      }else{
        localStorage.wordLinkIncorrectLine2 = "[]"
        localStorage.wordLinkIncorrectLine1 = "[]"
      }
      ///Creates checking array on page load
      let tempArray = [...res.data.wordArray]
      tempArray.splice(0,1)
      tempArray.splice(2,1)
      setWordDBChecker(tempArray)

      ///Initialize guessing container
      setGuessingContainer(res.data.wordArray.slice(2).map((prev, index) =>{
        return(<CurrentRow rowChangedState={rowChangedState} setPrevWordArray={setPrevWordArray} onClick2={clickRowTwoFunction} onClick={clickRowOneFunction} clickRowTwo={clickRowTwo} clickRowOne={clickRowOne} key={uuid()} id={index} prevWordArray={prevWordArray} heightCounter={heightCounter} textInput={textInput} className='single-word'></CurrentRow>)
      }))

    })
  }, [])

  ///failed guesses every day
  useEffect(() =>{
    if(wordDB){
      ///if puzzle has been completed
      if(localStorage.wordLinkHasWonToday === JSON.stringify(wordDB?.wordArray)){
        ///Incorrect words first line
        setShowIncorrectWordsLine1(JSON.parse(localStorage.wordLinkIncorrectLine1).map(prev =>{
          return <p className='wrong-guess' key={uuid()}>{prev}</p>
        }))        

        ///Incorrect words second line
        setShowIncorrectWordsLine2(JSON.parse(localStorage.wordLinkIncorrectLine2).map(prev =>{
          return <p className='wrong-guess' key={uuid()}>{prev}</p>
        }))
      }     
    }
  }, [wordDB])

  ///if puzzle has not been completed
  useEffect(() =>{
    if(wordDB){
      if(localStorage.wordLinkHasWonToday !== JSON.stringify(wordDB?.wordArray)){
        setShowIncorrectWordsLine1(incorrectWordsLine1.map(prev =>{
          return <p className='wrong-guess' key={uuid()}>{prev}</p>
        }))    
        localStorage.wordLinkIncorrectLine1 = JSON.stringify(incorrectWordsLine1)

        setShowIncorrectWordsLine2(incorrectWordsLine2.map(prev =>{
          return <p className='wrong-guess' key={uuid()}>{prev}</p>
        }))      
        localStorage.wordLinkIncorrectLine2 = JSON.stringify(incorrectWordsLine2)

      }
    } 

  }, [JSON.stringify(incorrectWordsLine1), JSON.stringify(incorrectWordsLine2)])

  ///On row change
  useEffect(() =>{
    if(wordDB){
      if(hasLineChanged){
        if(document.getElementById('text-input')){
          document.getElementById('text-input').value = ""
          setTextInput("")
        }
      }
    }///Does get set to undefined, but goes back

  }, [hasLineChanged])

  ///Flashes red when guessing wrong valid word
  useEffect(() =>{
    setTimeout(() =>{
      setFlashRed(false)
    }, 300)
  }, [flashRed])

    ///Flashes green when guessing correct word
    useEffect(() =>{
      setTimeout(() =>{
        setFlashGreen(false)
      }, 450)
    }, [flashGreen])

  useEffect(() =>{
    setGuessingContainer(wordDB?.wordArray.slice(3).map((prev, index) =>{
      return(<CurrentRow flashGreen={flashGreen} flashRed={flashRed} rowChangedState={rowChangedState} setPrevWordArray={setPrevWordArray} onClick2={clickRowTwoFunction} onClick={clickRowOneFunction} clickRowTwo={clickRowTwo} clickRowOne={clickRowOne} key={uuid()} startTimerBoolean={startTimerBoolean} id={index} prevWordArray={prevWordArray} heightCounter={heightCounter} textInput={textInput} className='single-word'></CurrentRow>)
    }))
  },[flashGreen, textInput, startTimerBoolean, clickRowOne, clickRowTwo, incorrectWordsLine1, incorrectWordsLine2, lineChecker, rowChangedState, flashRed])

  

  useEffect(() =>{
    setGuessingContainer(wordDB?.wordArray.slice(3).map((prev, index) =>{
      return(<CurrentRow flashGreen={flashGreen} flashRed={flashRed} rowChangedState={rowChangedState} setPrevWordArray={setPrevWordArray} onClick2={clickRowTwoFunction} onClick={clickRowOneFunction} clickRowTwo={clickRowTwo} clickRowOne={clickRowOne} key={uuid()} startTimerBoolean={startTimerBoolean} id={index} prevWordArray={prevWordArray} heightCounter={heightCounter} textInput={textInput} className='single-word'></CurrentRow>)
    }))
  }, [rowChangedState])

  ///When clicked or when submitting
  ///Changes index of wordDBChecker
  useEffect(() =>{
    if(clickRowOne){
      setLineChecker(0)
    }
    if(clickRowTwo){
      setLineChecker(1)
    }
  }, [clickRowOne, clickRowTwo])
  

  ///Updates local storage
  useEffect(() =>{
    if(localStorageState && gameStarted){
      localStorage.wordLinkTotalTime = localStorageState?.totalTime
    }
  }, [localStorageState?.totalTime])

  useEffect(() =>{
    if(localStorageState && gameStarted){
        localStorage.wordLinkBestTime = localStorageState?.currentTime
    }

  }, [localStorageState?.bestTime])
  useEffect(() =>{
    if(localStorageState && gameStarted){
      localStorage.wordLinkAverageTime = localStorageState?.averageTime
    }

  }, [localStorageState?.averageTime])

  useEffect(() =>{
    if(localStorageState && gameStarted){
      localStorage.wordLinkTotalPlays = localStorageState.totalPlays
    }
  }, [localStorageState?.totalPlays])



  ///Set Text input on input change
  function handleTypeInput(e){
    setTextInput(e.target.value)  
  }


  ///Focus on text input when clicking anywhere
  function focusCursor(){
    if(!showWinPage && startTimerBoolean && (clickRowOne || clickRowTwo)){
      document.getElementById('text-input').focus()
    }
  }

  function updateTimer({time}){
    ///update timer
    setLocalStorageState(prev => ({
      ...prev,
      currentTime: time
    }))
  }

  ///On form submit
  function formSubmit(e){
    e.preventDefault()

    ///Checks if word is in the dictionary
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${textInput}`)
     
    ///On Successful search
    .then(res => {
      ///Correct word
      if(textInput === wordDBChecker[lineChecker]){
        setFlashGreen(true)

        if(!firstRowClicked){
          if(clickRowOne){
            setClickRowOne(false)
            setClickRowTwo(true)
            setFirstRowClicked(true)
            setTextInput("")
            document.getElementById('text-input').value =""
            hasLineChanged = true
            setWinChecker(prev => prev + 1)
          }else{
            setClickRowOne(true)
            setClickRowTwo(false)
            setFirstRowClicked(true)
            setTextInput("")
            hasLineChanged = true
            document.getElementById('text-input').value =""

            setWinChecker(prev => prev + 1)
          }        
        }else{
          ///If they've lost
          if(incorrectWordsLine1.length >= 3 || incorrectWordsLine2.length >= 3){
            setShowWinPage(true)

            setGraphData()

            winOrLose()
          }
        }


        ///Correct text input
        prevWordArray.push(textInput)
        ///add
        setRowChangedState(true)


        setHeightCounter(prev => prev + 1)

        ///Checks if user has won
        if(winChecker === 1){
          winOrLose()
          setShowWinPage(true)
          ///One play a day
          localStorage.wordLinkHasWonToday = JSON.stringify(wordDB.wordArray)


          ///Top line
          let temp = localStorageState.topLine
          temp[incorrectWordsLine1?.length] += 1
          setLocalStorageState(prev => ({
            ...prev,
            topLine: temp
          }))
          
          ///Bottom Line
          let tempBot = localStorageState.bottomLine
          tempBot[incorrectWordsLine2?.length] += 1
          setLocalStorageState(prev => ({
            ...prev,
            bottomLine: tempBot
          }))
          

            setLocalStorageState(prev => ({
              ...prev,
              totalTime: prev.totalTime + prev.currentTime
            }))
            
            ///Sets local storage for best time
            if(localStorage.wordLinkBestTime > localStorageState.currentTime){
              setLocalStorageState(prev => ({
                ...prev,
                bestTime: prev.currentTime
              }))
            }


            setLocalStorageState(prev => ({
              ...prev,
              averageTime: ((prev.totalTime) / prev.totalPlays)
            }))

          ///Sets local storage for best streak
          if(localStorage.wordLinkMaxStreak <= localStorageState.maxStreak){
            setLocalStorageState(prev => ({
              ...prev,
              maxStreak: prev.maxStreak + 1
            }))
            localStorage.wordLinkMaxStreak = localStorageState?.maxStreak + 1

          }


          setLocalStorageState(prev => ({
            ...prev,
            wins: prev.wins+1
          }))
          localStorage.wordLinkWins = localStorageState?.wins + 1


          ///Current streak plus one on win
          setLocalStorageState(prev => ({
            ...prev,
            currentStreak: prev.currentStreak+1
          }))
          localStorage.wordLinkCurrentStreak = localStorageState?.currentStreak + 1

        }

        ///Reset tries
        setTries(1)
      }else{
        ///Incorrect word
        ///Increases guess counter on a single word
        setTries(prev => prev + 1)

        ///Flashes Red
        setFlashRed(true)

        ///Add show a new letter
        if(clickRowOne){
          incorrectWordsLine1.push(textInput)
          

          if(!hasLineChanged){
            setTextInput(wordDBChecker[0].substring(0,incorrectWordsLine1.length))
            document.getElementById('text-input').value = wordDBChecker[0].substring(0,incorrectWordsLine1.length)
          }
        }else{
          incorrectWordsLine2.push(textInput)
          if(!hasLineChanged){
            setTextInput(wordDBChecker[1].substring(0,incorrectWordsLine2.length))
            document.getElementById('text-input').value = wordDBChecker[1].substring(0,incorrectWordsLine2.length)
          }
        }


        ///Once one line is failed
        if(tries >= 3){
          if(clickRowOne){
            prevWordArray.push(wordDBChecker[0])
          }else{
            prevWordArray.push(wordDBChecker[1])
          }
          ///Change to other row if you lose current row
        if(!firstRowClicked){
          ///Switching rows
          if(clickRowOne){
            setClickRowOne(false)
            setClickRowTwo(true)
            setFirstRowClicked(true)
            hasLineChanged = true

            setTextInput("")
            document.getElementById('text-input').value =""
          }else{
            setClickRowOne(true)
            setClickRowTwo(false)
            setFirstRowClicked(true)
            hasLineChanged = true

            setTextInput("")
            document.getElementById('text-input').value =""
          }
        }else{
          ///If the second tried row is being checked
          if(incorrectWordsLine1.length >= 3 || incorrectWordsLine2.length >= 3){
            winOrLose()

            setShowWinPage(true)

            setGraphData()
          }
        }
          setTries(1)
      
          localStorage.wordLinkCurrentStreak = 0
          setLocalStorageState(prev => ({
            ...prev,
            currentStreak: 0
          }))

        }///End of failed line
      }

      ///Resets for next input
      if(document.getElementById('text-input')){
        document.getElementById('text-input').value = ""
      }
      setTextInput("")

      ///Adds a letter each time a guess is incorrect
      if(clickRowOne){
        if(!hasLineChanged){
        setTextInput(wordDBChecker[0].substring(0,incorrectWordsLine1.length))
        if(document.getElementById('text-input')){
          document.getElementById('text-input').value = wordDBChecker[0].substring(0,incorrectWordsLine1.length)
        }
        }
      }
      if(clickRowTwo){
        if(!hasLineChanged){
          setTextInput(wordDBChecker[1].substring(0,incorrectWordsLine2.length))
          if(document.getElementById('text-input')){
            document.getElementById('text-input').value = wordDBChecker[1].substring(0,incorrectWordsLine2.length)
          }
        }
      }
    })
    ///On word not found
    .catch(res => {
      alert("Word not found") 
    })


  }

  ///Happens whenever game finishes
  function winOrLose(){
    ///Stops timer
    setStartTimerBoolean(false)

    setLocalStorageState(prev => ({
        ...prev,
        totalPlays: prev.totalPlays+1
      }))      
    
    localStorage.wordLinkHasWonToday = JSON.stringify(wordDB.wordArray)

  }

  function startTimer(){
    ///Start timer
    setStartTimerBoolean(true)
    setGameStarted(true)
  }
  

  function clickRowOneFunction(){
    setClickRowOne(true)  
  }
  function clickRowTwoFunction(){
    setClickRowTwo(true)  
  }

  function setGraphData(){
    ///Top line
    let temp = localStorageState.topLine
    temp[incorrectWordsLine1?.length] += 1
    setLocalStorageState(prev => ({
      ...prev,
      topLine: temp
    }))
    
    ///Bottom Line
    let tempBot = localStorageState.bottomLine
    tempBot[incorrectWordsLine2?.length] += 1
    setLocalStorageState(prev => ({
      ...prev,
      bottomLine: tempBot
    }))
    

  }

  ///graph arrays
  useEffect(() =>{
    if(localStorageState){
      localStorage.wordLinkTopLine = JSON.stringify(localStorageState.topLine)
      localStorage.wordLinkBottomLine = JSON.stringify(localStorageState.bottomLine)
    }
  }, [JSON.stringify(localStorageState?.bottomLine), JSON.stringify(localStorageState?.topLine)])

  ///If the user has finished the puzzle for this day
  if(localStorage.wordLinkHasWonToday === JSON.stringify(wordDB?.wordArray)){
    return(
      <div className="App" onClick={focusCursor}>
      <Navbar setSettingsShown={setSettingsShown} setShowWinPage={setShowWinPage} setHowToPlayShown={setHowToPlayShown}/>

      {/* All Clickables */}
      {howToPlayShown ? <HowToPlay setHowToPlayShown={setHowToPlayShown}/> : null}
      {showWinPage ? <WinPage incorrectWordsLine1={incorrectWordsLine1} incorrectWordsLine2={incorrectWordsLine2} linkWordDay={linkWordDay} wordDB={wordDB} setShowWinPage={setShowWinPage} localStorageState={localStorageState} /> : null}
      {settingsShown ? <Settings setSettingsShown={setSettingsShown}/> : null}


      <div className='words-container'>
        {/* First Word */}
        <div className='first-word'><LastWord lastWord={firstWord}/></div>

        {/* Middle Words */}
        <div className="first-word single-word">
          <div className="single-letter">{wordDBChecker[0]?.substring(0,1).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(1,2).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(2,3).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(3,4).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(4,5).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(5,6).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(6,7).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(7,8).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(8,9).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(9,10).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(10,11).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[0]?.substring(11,12).toUpperCase()}</div>    
        </div>
        <div className="first-word single-word">
          <div className="single-letter">{wordDBChecker[1]?.substring(0,1).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(1,2).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(2,3).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(3,4).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(4,5).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(5,6).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(6,7).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(7,8).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(8,9).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(9,10).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(10,11).toUpperCase()}</div>
          <div className="single-letter">{wordDBChecker[1]?.substring(11,12).toUpperCase()}</div>    
        </div>

        {/* Last Word */}
        <div className='last-word'><LastWord lastWord={lastWord}/></div>

      </div>

      <div className='tries'><p>Guess: {tries}/3</p></div>

    <Keyboard formSubmit={formSubmit} textInput={textInput} setTextInput={setTextInput}/>

    {/* Incorrect Words */}
    <div className='first-incorrect-word'>
        <h4>Line 1</h4>
        {showIncorrectWordsLine1}
          {/* {incorrectWordsLine1.map(prev =>{
            return <p className='wrong-guess' key={uuid()}>{prev}</p>
        })}         */}
    </div>
    <div className='second-incorrect-word'>
      <h4>Line 2</h4>
      {showIncorrectWordsLine2}
      {/* {incorrectWordsLine2.map(prev =>{
        return <p className='wrong-guess' key={uuid()}>{prev}</p>
      })}       */}
    </div>



    </div>
    )
  }

  if(!wordDB) return null

  return (
    <div className="App" onClick={focusCursor}>
      <Navbar setSettingsShown={setSettingsShown} setShowWinPage={setShowWinPage} setHowToPlayShown={setHowToPlayShown}/>

      {/* All Clickables */}
      {howToPlayShown ? <HowToPlay setHowToPlayShown={setHowToPlayShown}/> : null}
      {showWinPage ? <WinPage incorrectWordsLine1={incorrectWordsLine1} incorrectWordsLine2={incorrectWordsLine2} linkWordDay={linkWordDay} wordDB={wordDB} setShowWinPage={setShowWinPage} localStorageState={localStorageState} /> : null}
      {settingsShown ? <Settings setSettingsShown={setSettingsShown}/> : null}


      <div className='words-container'>
        {/* First Word */}
        {startTimerBoolean ? <div className='first-word'><LastWord lastWord={firstWord}/></div> : <div className='first-word'><LastWord /></div>}

        {/* Middle Words */}
        {guessingContainer}

        {/* Last Word */}
        {startTimerBoolean ? <div className='last-word'><LastWord lastWord={lastWord}/></div> : <div className='last-word'><LastWord /></div>}

      </div>

      <div className='tries'><p>Guess: {tries}/3</p></div>


      {/* Input */}
      <form onSubmit={formSubmit}>
        {showWinPage || (!clickRowOne && !clickRowTwo) ? null : <input autoFocus maxLength={12} onChange={handleTypeInput} type="text" id="text-input" placeholder='guess word'></input>}
      </form>

    <Keyboard formSubmit={formSubmit} textInput={textInput} setTextInput={setTextInput}/>

    {/* Incorrect Words */}
    <div className='first-incorrect-word'>
        <h4>Line 1</h4>
        {showIncorrectWordsLine1}
          {/* {incorrectWordsLine1.map(prev =>{
            return <p className='wrong-guess' key={uuid()}>{prev}</p>
        })}         */}
    </div>
    <div className='second-incorrect-word'>
      <h4>Line 2</h4>
      {showIncorrectWordsLine2}
      {/* {incorrectWordsLine2.map(prev =>{
        return <p className='wrong-guess' key={uuid()}>{prev}</p>
      })}       */}
    </div>

    <div className='timer-and-button'>
      <Timer id="timer" className="timer" active={startTimerBoolean} onTimeUpdate={updateTimer} duration={null}>
        <Timecode />
      </Timer>

      {!startTimerBoolean && !showWinPage ? <button className='start-button' onClick={startTimer}>Start</button> : null}
    </div>


    </div>
  );
}

export default App;


