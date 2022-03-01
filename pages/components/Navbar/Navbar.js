import React, { Component } from 'react';
import { useState } from 'react';
import {useEffect} from 'react';

function Navbar(){

    useEffect(() => {
        // Web3 Browswer Detection
        if (typeof window.ethereum !== "undefined") {
          console.log("Injected Web3 Wallet is installed!");
        }
    
        //Button ID
        const connectButton = document.getElementById("connect");
    
        //Click Event
        connectButton.addEventListener("click", () => {
          connectAccount();
        });
    
        //Connect Account Function
        async function connectAccount() {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const account = accounts[0];
          connectButton.innerHTML =
            account[0] +
            account[1] +
            account[2] +
            account[3] +
            account[4] +
            account[5] +
            "..." +
            account[38] +
            account[39] +
            account[40] +
            account[41];
        }
      }, []);
    
        return (
            <div className="topnav">
                
                <a href="#home">
                     CryptoCreate
                </a>
                <div  className="navleft" >
                    <button className="button" id="connect" >Connect Wallet</button>

                </div>
            </div>
        );
    
}

export default Navbar;