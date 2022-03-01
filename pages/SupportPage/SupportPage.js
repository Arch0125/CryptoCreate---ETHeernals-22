import React from 'react';
import { useState } from 'react';

function SupportPage(props) {

    const[recepient,setRecepient]=useState();
    const[amount,setAmount]=useState();
    const[message,setMessage]=useState();

    return (
        <div className='leftcont'>
            
            <div className='card'>
                <label className='cardtitle'>Send some Love 💝</label>
                <div className='cardform' >
                    <label  className='cardlabel' >Recepient Address</label>
                    <input 
                        className='cardinput'
                        type="text"
                        value={recepient}
                        placeholder='0x0...'
                        onChange={e => setRecepient(e.target.value)}
                    />

                    <label  className='cardlabel' >Amount</label>
                    <input 
                        className='cardinput'
                        type="numeric"
                        value={amount}
                        placeholder='0'
                        onChange={e => setAmount(e.target.value)}
                    />
                    
                    <label className='cardlabel'>Say some kind words</label>
                    <textarea
                    className='messagearea'
                    type="text"
                    value={message}
                    onChange={e=>setMessage(e.target.value)}
                    />
                </div>
                <button className='button1'>
                    Show your support
                </button>
            </div>
            <div className='card'>
                <label>Support Page</label>
            </div>
        </div>
    );
}

export default SupportPage;