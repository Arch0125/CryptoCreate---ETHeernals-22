import React, { Component } from 'react';
import Web3 from 'web3';

class Intro extends Component {

    render() {
        return (            
            <div classNameName="App">
                <p>
                    <img
                    align="right"
                    src="https://image.freepik.com/vecteurs-libre/illustration-certification-ligne_23-2148575636.jpg"
                    width="350"
                    />
                </p>
                <br/>
                <h1 className="header">
                    Changing the way to<br />
                    <span className="purpletext">Share</span> and <span className="purpletext">Support</span><br/>
                    Art with help of <span className="purpletext">Crypto</span>
                    <br/>
                    <label className="feature" >
                        CryptoCreate welcomes you to a new decentralized world of creators and fans
                    </label>
                    

                </h1>

                <div className="container1">
                    <label  className="intro">With CryptoCreate you can</label>  
                    <br/>
                    <br/>
                    <br/>
                    <div className="a-box">
                        <div className="img-container">
                            <div className="img-inner">
                            <div className="inner-skew">
                                <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                            </div>
                            </div>
                        </div>
                        <div className="text-container">
                            <h3>A blue bird</h3>
                            <div>
                            This a demo experiment to skew image container. It looks good.
                        </div>
                        </div>
                    </div> 

                    <div className="a-box">
                        <div className="img-container">
                            <div className="img-inner">
                            <div className="inner-skew">
                                <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                            </div>
                            </div>
                        </div>
                        <div className="text-container">
                            <h3>A blue bird</h3>
                            <div>
                            This a demo experiment to skew image container. It looks good.
                        </div>
                        </div>
                    </div>

                    <div className="a-box">
                        <div className="img-container">
                            <div className="img-inner">
                            <div className="inner-skew">
                                <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                            </div>
                            </div>
                        </div>
                        <div className="text-container">
                            <h3>A blue bird</h3>
                            <div>
                            This a demo experiment to skew image container. It looks good.
                        </div>
                        </div>
                    </div>              
                </div>
                
            </div>
        );
    }
}

export default Intro;