import React, { Component } from 'react';

class Intro extends Component {
    
    render() {
        return (            
            <div className="App">
                <p>
                    <img
                    align="right"
                    src="https://image.freepik.com/vecteurs-libre/illustration-certification-ligne_23-2148575636.jpg"
                    width="350"
                    />
                </p>
                <br/>
                <h1 class="header">
                    Changing the way to<br />
                    <span class="purpletext">Share</span> and <span class="purpletext">Support</span><br/>
                    Art with help of <span class="purpletext">Crypto</span>
                </h1>

                <div  class="container1">
                    <label  class="intro">With CryptoCreate you can</label>
                </div>

                
            </div>
        );
    }
}

export default Intro;