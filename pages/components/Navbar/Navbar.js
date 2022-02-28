import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div class="topnav">
                
                <a href="#home">
                     CryptoCreate
                </a>
                <div  class="navleft" >
                    <button class="button" >Connect Wallet</button>
                </div>
            </div>
        );
    }
}

export default Navbar;