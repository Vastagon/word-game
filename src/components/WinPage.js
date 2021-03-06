import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { TwitterIcon, TwitterShareButton, FacebookIcon, FacebookShareButton } from 'react-share';
import "../HowToPlay.css"
import {useEffect, useState} from "react"

const { DateTime } = require("luxon");

Chart.register(...registerables);


export default function WinPage({incorrectWordsLine1, incorrectWordsLine2, linkWordDay, setShowWinPage, localStorageState}){

    let windowWidth = window.innerWidth
    const [time, setTime] = useState(Date.now());
    // const [countdown, setCountdown] = useState([])

    let checkmark = "✅"
    if(incorrectWordsLine1.length === 3){
        checkmark = "❌"
    }
    let checkmark2 = "✅"
    if(incorrectWordsLine2.length === 3){
        checkmark2 = "❌"
    }



    window.addEventListener("resize", () =>{
        windowWidth = window.innerWidth
    })

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);

        return () => {
          clearInterval(interval);
        };
      }, []);

    let seconds = Math.floor((localStorageState?.averageTime / 1000) % 60)
    if(seconds < 10){
        seconds = "0" + seconds
    }

    let minutes = Math.floor(localStorageState?.averageTime / 1000)
    minutes = Math.floor(minutes / 60)
    if(minutes < 10){
        if(minutes === 0){
            minutes = "00"
        }else{
            minutes = "0" + minutes
        }
    }

    let bestSeconds = Math.floor((localStorageState?.bestTime / 1000) % 60)
    if(bestSeconds < 10){
        bestSeconds = "0" + bestSeconds
    }

    let bestMinutes = Math.floor(localStorageState?.bestTime / 1000)
    bestMinutes = Math.floor(bestMinutes / 60)
    if(bestMinutes < 10){
        if(bestMinutes === 0){
            bestMinutes = "00"
        }else{
            bestMinutes = "0" + bestMinutes
        }
    }  

    let currentSeconds = Math.floor((localStorageState?.currentTime / 1000) % 60)
    if(currentSeconds < 10){
        currentSeconds = "0" + currentSeconds
    }

    let currentMinutes = Math.floor(localStorageState?.currentTime / 1000)
    currentMinutes = Math.floor(currentMinutes / 60)
    if(currentMinutes < 10){
        if(currentMinutes === 0){
            currentMinutes = "00"
        }else{
            currentMinutes = "0" + currentMinutes
        }
    }  

    ///Fixes time for countdown to new puzzle
    function fixShownTime( functionMinutes, functionSeconds){
        if(functionSeconds < 10){
            functionSeconds = "0" + functionSeconds
        }

        if(functionMinutes < 10){
            if(functionMinutes === 0){
                functionMinutes = "00"
            }else{
                functionMinutes = "0" + functionMinutes
            }
        }  
        // if(hours < 10){
        //     if(hours === 0){
        //         hours = "00"
        //     }else{
        //         hours = "0" + hours
        //     }
        // }  
        return [functionMinutes, functionSeconds]
    }
    
    ///Gets date
    var d = new Date();
    d = d.toUTCString()
    ///Makes d a string and gets the hours, minutes, and seconds
    d = (d.toString(d))
    d = (d.substring(17,25))
    // const [rezoned, setRezoned] = useState()

    let local = DateTime.local()
    let rezoned = local.setZone("America/Bogota")
    

    let hoursLeft = 23 - rezoned?.c.hour
    let minutesLeft = 59 - parseInt(d.substring(3,5))
    let secondsLeft = 59 - parseInt(d.substring(6,8))

    ///String copied when the copy button is pressed
    let shareString = `#LinkWord ${linkWordDay?.toString()}\n🔗\n${checkmark}Line One ${incorrectWordsLine1.length === 0 ? 1 : incorrectWordsLine1.length}/3\n${checkmark2}Line Two ${incorrectWordsLine2.length === 0 ? 1 : incorrectWordsLine2.length}/3\n🔗\n${currentMinutes.toString()}:${currentSeconds.toString()}\n`


    // useEffect(() =>{
    //     let local = DateTime.local();
        
    
    //     setRezoned(local.setZone("America/Bogota"))

    // }, [secondsLeft])

    function ShareText(){
        if (navigator.share) {
            navigator
            .share({
                title: `#LinkWord ${linkWordDay?.toString()}`,
                text: shareString,
                url: document.location.href,
            })
            .then(() => {
                console.log('Successfully shared');
            })
            .catch(error => {
                console.error('Something went wrong sharing the blog', error);
            });
        }            
    }


    async function CopyText(){
        await navigator.clipboard.writeText(shareString)
        alert("Copied Results to Clipboard")
    }

    function removePage(){
        setShowWinPage(false)
    }

    let countdown = fixShownTime(minutesLeft, secondsLeft)

    return(
        <div className="win-page">
            <div onClick={removePage} className='cross'></div>
            <h4 className='statistics'>Statistics</h4>
            <div className="stats-container">
                <div className="stats-container-row">
                    <div className="stats-element">
                        {localStorageState.totalPlays} <br></br>
                        Played
                    </div>
                    <div className="stats-element">
                        {Math.floor((localStorageState.wins / localStorageState.totalPlays) * 100) }% <br></br>
                        Win Percentage
                    </div>
                    <div className="stats-element">
                        {localStorageState.currentStreak} <br></br>
                        Current Streak
                    </div>
                    <div className="stats-element">
                        {localStorageState.maxStreak} <br></br>
                        Max Streak
                    </div>

                </div>
                <div className="stats-container-row">
                    <div className="stats-element">
                        {minutes}:{seconds}<br></br>
                        Average Time
                    </div>
                    <div className="stats-element">
                        {localStorageState.maxStreak > 0 ? `${bestMinutes}:${bestSeconds}` : "NaN"}<br></br>
                        Best Time
                    </div>
                </div>

            </div>

            {/* Graph Goes here */}
            <div className='bar-graph'>
                <Bar 
                    data={{
                        labels: ["1 try", "2 tries", "3 tries", "Failed"],
                        datasets:[{
                            data: localStorageState.topLine,
                            backgroundColor: "#F2AA4CFF",
                            barThickness: 20,
                            categoryPercentage: .5,
                            barPercentage: .5
                        }],
                    }}
                    options={{
                        scales: {
                            x:{
                                grid: {
                                    display: false
                                },
                                categoryPercentage: 1.0,
                                barPercentage: 1.0
                            },
                            y:{
                                grid: {
                                    display: false
                                }
                            },

                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        indexAxis: 'y',
                        maintainAspectRatio: false
                    }}
                />
            </div>
            <div className='bar-graph'>
                <Bar 
                    data={{
                        labels: ["1 try", "2 tries", "3 tries", "Failed"],
                        datasets:[{
                            data: localStorageState.bottomLine,
                            backgroundColor: "#F2AA4CFF",
                            barThickness: 20,
                            categoryPercentage: .5,
                            barPercentage: .5
                        }],
                    }}
                    options={{
                        scales: {
                            x:{
                                grid: {
                                    display: false
                                },
                                categoryPercentage: 1.0,
                                barPercentage: 1.0
                            },
                            y:{
                                grid: {
                                    display: false
                                }
                            },

                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        indexAxis: 'y',
                        maintainAspectRatio: false
                    }}
                />
            </div>

            <div className='win-page-bottom'>
                <div className='next-puzzle'>
                    NEXT LINKWORD<br></br>
                    <div>{hoursLeft}:{countdown[0]}:{countdown[1]}</div>
                </div>

            <div className='media-sharing'>
                <div className='react-share-buttons'>
                    <TwitterShareButton
                    url="linkwordgame.com"
                    title={`#LinkWord ${linkWordDay?.toString()}\n🔗\n${checkmark}Line One ${incorrectWordsLine1.length === 0 ? 1 : incorrectWordsLine1.length}/3\n${checkmark2}Line Two ${incorrectWordsLine2.length === 0 ? 1 : incorrectWordsLine2.length}/3\n🔗\n${currentMinutes.toString()}:${currentSeconds.toString()}\n`}
                    className="a"
                    >
                        <TwitterIcon size={windowWidth <= 500 ? 32:  48} round />
                    </TwitterShareButton>

                    <FacebookShareButton
                    url="linkwordgame.com"
                        description={``}
                    >
                        <FacebookIcon size={windowWidth <= 500 ? 32:  48} round />
                    </FacebookShareButton>                    
                </div>

                <button className='share-button copy-button' onClick={ShareText}>Share<img className='copy-image' src="https://cdn0.iconfinder.com/data/icons/simple-lines-part-3/32/Share_Send_Copy_Publish_Android-512.png" /></button>
                <button className='copy-button' onClick={CopyText}>Copy<img className='copy-image' src="https://cdn0.iconfinder.com/data/icons/simple-lines-part-3/32/Share_Send_Copy_Publish_Android-512.png" /></button>
            </div>

        </div>
        </div>
    )
}