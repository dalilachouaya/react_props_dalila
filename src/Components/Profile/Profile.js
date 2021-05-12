
import React from 'react'
import PropTypes from "prop-types";
import { FaUserGraduate} from "react-icons/fa";
import { IconContext } from "react-icons";
import {style} from "typestyle";
const Profile=({fullName,children,profession,bio,handleName})=>{
    const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    };
    const myStyleBio={color:"blue" , fontSize:"1.2rem",margin:"7px",};
    const styleDownloadBtn= style({ backgroundColor: "DodgerBlue",border: "none",color: "white" ,padding: "12px 30px",cursor: "pointer",fontSize:"20px",margin:"20px",
    $nest: {'&:hover': {backgroundColor: "RoyalBlue"}}
    });
    return (
        <>
        <div style ={{color:"black",textAlign:"center"}} id="home">
        <h1 style ={myStyle}>  {fullName} </h1>
        <p>Glad to know you</p>
        {/* the nessecity of   {props.children}  for the inner of open and closing tag*/}
        {children}
        </div>
        <br/>
        <div style={{border:"black double",  marginTop:"20px",}} id="about">
        <div className="media">
            <img src="./images/biopicimg.jpg" className="mr-3" alt="Biophoto"  style={{width:"50px"}}/>
            <div className="media-body">
            <h5 className="mt-0" style={{textTransform: "uppercase",margin:"10px",}}>{fullName}</h5>
            <span style = {myStyleBio}>Bio:</span> {bio} <br/>
            <p style= {{margin :"10px"}}> <b>Interests : </b>Learning,Farming ,Taking care of animals, Watching TV , Eating and Sleeping</p>
            <br/>
            </div>
        </div>
        </div>
        <br/>
        <div id="profession">
        <IconContext.Provider value={{ color: "black", size: "1.5em" }}>

        <div className="card bg-dark text-white">
        <img src="./images/working.jpg" className="card-img" alt="working"/>

        <div className="card-img-overlay">
    <FaUserGraduate />
    <h5 className="card-title"><b>Profession</b></h5>
    <p className="card-text" > {profession}
        </p>
        <p className="card-text"><b>SKIILS</b> <br/> -HTML/CSS <br/> -JAVASCRIPT <br/> -REACT <br/> -Visual Studio <br/></p>
        <button onClick={()=>handleName(`The UserName is ${fullName}`)} className={styleDownloadBtn}>UserName</button>
        </div>
    </div>
    </IconContext.Provider>
    </div>
        </>
    );
    };
    /**Define the default props for Profile component. 
        Use PropsType to check props.  
       */
    Profile.defaultProps={fullName :"Dalila Chouaya"};
    Profile.propTypes={ fullName :PropTypes.string,
                        profession :PropTypes.string,
                        bio:PropTypes.string,
                        children:PropTypes.any,
                        handleName:PropTypes.func,
                    };
    
export default Profile;

