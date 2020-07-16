import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'querystring';
import Ticket from '../Ticket/Ticket'
import Ball from '../Ball/Ball'
import GameBoard from '../GameBoard/GameBoard'
let socket;
const Home = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [ticket, setTicket] = useState([]);
    const [started, setStarted] = useState(false);
    const [gameBoard, setGameBoard] = useState([]);
    const [ball,setBall]=useState(0);
    const [count,setCount]=useState(0);
    const [bingo,setBingo]=useState(false);
    const [message,setMessage]=useState('');
    const [efButton,setEfButton]=useState(false);
    const [trButton,setTrButton]=useState(false);
    const [mrButton,setMrButton]=useState(false);
    const [brButton,setBrButton]=useState(false);
    const [bingoButton,setBingoButton]=useState(false);




    const ENDPOINT = 'https://tambola-server.herokuapp.com/';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search.substring(1));
        //console.log(queryString.parse(location.search.substring(1)));
        console.log(name, room);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {
            console.log('Emitted join signal')
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search]);
    useEffect(()=>{
        socket.on('existingUser',()=>{
            alert('Person already exists in the room');
        })
    })
    useEffect(() => {
        socket.on('ticket', (ticket) => {
            setTicket(ticket);
            //alert(ticket.toString());
        })
    }, [ticket]);
    useEffect(() => {
        socket.on('startedGame', (gameArray) => {
            socket.emit('makeConditionsAndStart', gameArray);
            setStarted(true);
            alert('Game started');
        })
    }, [started]);
    useEffect(() => {
        socket.on('ball', (ball) => {
            setBall(ball);
            console.log(ball);
        });
    }, [ball]);
    useEffect(()=>{
        setGameBoard([...gameBoard,ball]);
        setCount(gameBoard.length);
    },[ball])
    useEffect(()=>{
        socket.on('cheatMessage',(message)=>{
            //setMessage(message);
            alert(message);
        });
        socket.on('winMessage',({message,buttonToDisable})=>{
            //setMessage(message);
            alert(message);
            if(buttonToDisable==='ef'){
                setEfButton(true);
            }
            if(buttonToDisable==='tr'){
                setTrButton(true);
            }
            if(buttonToDisable==='mr'){
                setMrButton(true);
            }
            if(buttonToDisable==='br'){
                setBrButton(true);
            }
            if(buttonToDisable==='bingo'){
                setBingoButton(true);
            }
        });

    },[message]);
    const sendStartGame = () => {
        if (!started) {
            socket.emit('start');
        }
    }
    const callBingo=()=>{
        socket.emit('bingo',count);
    }
    const callEarlyFive=()=>{
        socket.emit('ef',count);
    }
    const callTopRow=()=>{
        socket.emit('tr',count);
    }
    const callMidRow=()=>{
        socket.emit('mr',count);
    }
    const callBotRow=()=>{
        socket.emit('br',count);
    }
    return (
        <div>
            <Ball value={ball}/>
            <GameBoard gameBoard={gameBoard}/>
            <Ticket ticket={ticket} />
            <button onClick={(event) => sendStartGame(event)}>Start!</button>
            <button disabled={bingoButton} onClick={(event)=> callBingo(event)}>BINGO!</button>
            <button><a href="/">END</a></button>
            <button disabled={efButton} onClick={(event)=> callEarlyFive(event)}>Early 5!</button>
            <button disabled={trButton} onClick={(event)=> callTopRow(event)}>Top Row!</button>
            <button disabled={mrButton} onClick={(event)=> callMidRow(event)}>Mid Row!</button>
            <button disbaled={brButton} onClick={(event)=> callBotRow(event)}>Bot Row!</button>
        </div>
    )
}
export default Home;