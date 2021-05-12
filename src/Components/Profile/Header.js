import React, { Component } from 'react'
import { FaHome,FaUser,FaXing,FaEnvelope} from "react-icons/fa";
import {IconContext} from 'react-icons';
import {style} from "typestyle";
class  Header extends Component {
    render() { 
        const mystyle = {
        fontFamily: 'Roboto Condensed',textTransform: "uppercase",backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",borderRadius: "15px",borderStyle: "hidden",padding: "18px", textAlign: "center",width: "auto",
        position: "sticky",top:"0",zIndex: "1", 
        };
        const niceColors = style({
        transition: 'color .2s',color: "rgb(27, 22, 22)",textDecoration: "none",padding: "20px",fontFamily: "Arial",fontSize: "17px",
        $nest: {'&:hover': {color: 'blue',backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
        });
        return ( 
            
            <IconContext.Provider value ={{color:"blue", size:"1.5em" ,}}>
            <nav style={mystyle}>
                <a className={niceColors} href="#home"> <FaHome/>Home</a>
                <a className={niceColors}  href="#about"><FaUser/>Bio</a>
                <a className={niceColors} href="#profession"><FaXing/>Profession</a>
                <a className={niceColors} href="#contact"><FaEnvelope/>Contact</a>
            </nav>
            </IconContext.Provider>
        )
    }
}
export default Header;

