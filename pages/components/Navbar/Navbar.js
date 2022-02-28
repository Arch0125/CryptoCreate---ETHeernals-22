import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="topnav">
                
                <a href="#home">
                     CryptoCreate
                </a>
                <div  className="navleft" >
                    <button className="button" >Connect Wallet</button>
                </div>
            </div>
        );
    }
}

export default Navbar;