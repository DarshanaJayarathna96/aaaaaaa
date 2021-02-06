import React, { Component } from 'react';
import image from './images/1.jpg'
import styles from './Index.module.css'
//import './App.css'

class Index extends Component{
    render(){
        return(
            <div >
                <img src={image} className= {styles.index} />
                <div className = {styles.textblock} >
                    <h2 className={styles.titletext}> Dream Pulse TemplateMo</h2>
                    <p className={styles.text}> This box alpha 30 percent. Left sidebar is a <br/>sticky element.
                          Right side Contents are <br/> scrolling up and down. This background has a<br/>
                          parallax effect.</p>
                    <p className={styles.text}>
                        Dream Pulse is a Bootstrap 4.3.1 template designed for your websites. You can modify this layout as you like.
                    </p>
                </div>
            </div>
        );
    }
}

export default Index;