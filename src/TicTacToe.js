/*import { createContext, useContext, useState } from "react";


const playerContext = createContext();

function TicTacToe() {
    
    const [player, setPlayer] = useState("O");

    const player1 = "";
    const togglePlayer = () => {
        setPlayer(player == "O" || player == "" ? "X" : "O");
    }


    return(
        <>
            <playerContext.Provider value={{player, togglePlayer}}>
            <div>
                 <TicBox/>
                 <TicBox/>
                 <TicBox/>
            </div>
            <div>
                 <TicBox/>
                 <TicBox/>
                 <TicBox/>
            </div>
            <div>
                 <TicBox/>
                 <TicBox/>
                 <TicBox/>
            </div>
            </playerContext.Provider>
        </>
    ) 
}
function TicBox() {


    const [player, togglePlayer] = useContext(playerContext);
    const [playerChar, setPlayerChar] = useState();

    const onClickHandler = () => {  
        setPlayerChar(setPlayerChar == "O" || setPlayerChar == "" ? "X" : "O");
    }
    return (
        <div className="Tic-box" onClick={onClickHandler}></div>    
    );
}
export default TicTacToe;*/