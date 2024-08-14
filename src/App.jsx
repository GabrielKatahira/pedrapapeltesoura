import React, {useState, useEffect} from "react";
import "./App.css"
function App() {
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [playerChoice, setPlayerChoice] = useState(0)
    const [computerChoice, setComputerChoice] = useState(0)
    const [playerResult, setPlayerResult] = useState('')
    const [computerResult, setComputerResult] = useState('')
    const [winnerResult, setWinnerResult] = useState('')
    const escolhas = ['Nenhum','Pedra','Papel','Tesoura']
    useEffect(() => {
        if (playerChoice !== 0) {
            const compChoice = Math.floor(Math.random() * 3) + 1;
            setComputerChoice(compChoice);
        }
    }, [playerChoice]);
    function playRPS() {
        if (playerChoice == 0) {
            alert('Escolha sua jogada!')
            return
        } else {
        const compChoice = Math.floor(Math.random()*3)+1
        setComputerChoice(compChoice)
        let winner = 0
        if(playerChoice == computerChoice) {
            winner = 3
        }
        else if(playerChoice - computerChoice == 1) {
            winner = 1
        }
        else if(computerChoice - playerChoice == 1) {
            winner = 2
        }
        else if (playerChoice == 1 && computerChoice == 3) {
            winner = 1
        } 
        else if (computerChoice == 1 && playerChoice == 3) {
            winner = 2
        }
        setPlayerResult(`Você escolheu: ${escolhas[playerChoice]}`)
        setComputerResult(`O computador escolheu: ${escolhas[computerChoice]}`)
        setWinnerResult(()=>{
            switch (winner) {
                case 1:
                    setPlayerScore(playerScore+1)
                    const playerScoreElement = document.getElementById('player-score');
                    playerScoreElement.style.animation = 'scoreincrease .3s linear'
                    playerScoreElement.onanimationend = () =>{
                        playerScoreElement.style.animation = null
                    }
                    return 'Você venceu!'
               
                case 2:
                    setComputerScore(computerScore+1)
                    const computerScoreElement = document.getElementById('computer-score');
                    computerScoreElement.style.animation = 'scoreincrease .3s linear'
                    computerScoreElement.onanimationend = () =>{
                        computerScoreElement.style.animation = null
                    }
                    return 'O computador venceu!'
               
                case 3:
                    return 'Empate!'
                default:
                    return ''
            }
        })
        document.getElementById('gameButton').style.visibility = 'hidden'
        document.getElementById('gameButton').style.transition = 'none'
        document.getElementById('playAgain').style.visibility = 'visible'
        document.getElementById('playAgain').style.transition = '0.5s'
        }
    }
    function reset(){
        setPlayerChoice(0)
        setPlayerResult('')
        setComputerResult('')
        setWinnerResult('')
        document.getElementById('gameButton').style.visibility = 'visible'
        document.getElementById('gameButton').style.transition = '0.5s'
        document.getElementById('playAgain').style.visibility = 'hidden'
        document.getElementById('playAgain').style.transition = 'none'
        
    }
    return(
        <>
        <h1 id="title">Pedra Papel Tesoura</h1>
        <div id="scoreboard">
            <div>
                <h1>Jogador</h1>
                <h2 id="player-score">{playerScore}</h2>
            </div>
            <div>
                <h1>Computador</h1>
                <h2 id="computer-score">{computerScore}</h2>
            </div>
        </div>
        <div id="choice">
            <h1>Escolha sua jogada</h1>
            <div>
                <button onClick={()=>{setPlayerChoice(1)}}>👊</button>
                <button onClick={()=>{setPlayerChoice(2)}}>🖐️</button>
                <button onClick={()=>{setPlayerChoice(3)}}>✌️</button>
            </div>
            <h2>Escolhido: {escolhas[playerChoice]}</h2>
            <button id="gameButton" onClick={playRPS}>Confirmar</button>
            <button id="playAgain" onClick={reset}>Jogar Novamente</button>
        </div>
        <div id="results">
            <div>
                <div>{playerResult}</div>
                <div>{computerResult}</div>
            </div>
            <p>{winnerResult}</p>
        </div>
        </>
    )
}
export default App