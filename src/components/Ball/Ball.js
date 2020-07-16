import React from 'react'
import './Ball.css'
const Ball = ({value}) => {
    return (
        <div>
            <div className='ball' />
            <div>
                Ball Number is {value}
            </div>
        </div>
    )
}
export default Ball;