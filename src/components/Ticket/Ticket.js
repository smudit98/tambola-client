import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { Checkbox, Row, Col } from 'antd';
import './Ticket.css'
function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
const Ticket = ({ ticket }) => {
    //console.log({row1}.toString());
    return (
        <div className='ticketPaper'>
            {ticket.map((row) => {
                return (
                    <Grid container justify="center" className='rowOfTicket' spacing={1}>
                        {row.map((item) => {
                            if (item != 0) {
                                return (
                                    <span style={{width:'10%',height:'30px'}}>
                                    <Checkbox value={item}>{item}</Checkbox>
                                    </span>
                                )
                            }
                            else {
                                return (
                                    <span style={{width:'10%'}}>
                                    <Checkbox disabled>{"  "}</Checkbox>
                                    </span>
                                )
                            }
                        })}
                    </Grid>
                )
            })}
        </div>
    )
}
export default Ticket;