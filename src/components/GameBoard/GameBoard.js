import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import './GameBoard.css'
// function RenderGrid(array, gameBoard) {
//     return (
//         <Grid container justify="center" className='rowOfTicket' spacing={2}>
//             {array.map((item) => {
//                 return (
//                     <Grid item xs={1.2}>
//                         <Paper className={gameBoard.includes(item)?"done":"todo"}>{item}</Paper>
//                     </Grid>
//                 )
//             })}
//         </Grid>
//     )
// }
const useStyles=makeStyles({
    gridroot:{
        padding: '4px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        width:'72%',
        marginLeft:'14%',
    },
    numbers:{
       margin: '10%',
       textAlign:"center",
       height:'20px',
       width:'20px',
       fontSize:'10px',
        verticalAlign:'center',
        paddingTop:'4px',    
    },
    deleted:{
        margin: '10%',
       textAlign:"center",
       height:'20px',
       width:'20px',
       fontSize:'10px',
        verticalAlign:'center',
        paddingTop:'4px',
        background:'transparent',
        boxShadow:'none'
    }

});
const GameBoard = ({ gameBoard }) => {
    var array = new Array(90);
    for (var i = 1; i <= 90; i++) {
        array[i - 1] = i;
    }
    const classes=useStyles();

    return (
        // <RenderGrid array={array} gameBoard={gameBoard} />
        <Grid container justify="center" classes={{root:classes.gridroot}}>
        {array.map((item) => {
            return (
                <Grid item xs={1}>
                    <Paper classes={gameBoard.includes(item)?{root:classes.deleted}:{root:classes.numbers}} className={gameBoard.includes(item)?"done":"todo"}>{item}</Paper>
                </Grid>
            )
        })}
    </Grid>
    )
}
export default GameBoard;