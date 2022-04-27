import "../App.css"

export default function LastWord({lightTheme, lastWord}){

    return(
    <div className="last-word single-word">
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(0,1).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(1,2).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(2,3).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(3,4).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(4,5).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(5,6).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(6,7).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(7,8).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(8,9).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(9,10).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(10,11).toUpperCase()}</div>
        <div className={lightTheme ? "light-single-letter single-letter" : "single-letter"}>{lastWord?.substring(11,12).toUpperCase()}</div>
    </div>
    
    )
}