/* eslint-disable no-sequences */
import React from "react"
import Radium from "radium"
import sedansIcon from "../resources/icon-sedans.svg"
import suvsIcon from "../resources/icon-suvs.svg"
import luxuryIcon from "../resources/icon-luxury.svg"
import useWindowDimensions from "../util/windowDimensions"

const styles = {
  header: {
    color: "hsl(0, 0%, 95%)",
    fontFamily: "Big Shoulders Display",
    textTransform: "uppercase",
    fontWeight: "700px"
  },
  infoText: {
    color: "hsla(0, 0%, 100%, 0.7)",
    fontFamily: "Lexend Deca",
  },
  button: {
    backgroundColor: "hsl(0, 0%, 95%)",
    borderStyle: "none",
    fontFamily: "Lexend Deca",
    paddingLeft: "10px",
    paddingBottom: "10px",
    paddingTop: "10px",
    paddingRight: "10px",
    borderRadius: "20px",
    width: "160px"
  },
  orangeButton: {
    color: "hsl(31, 77%, 52%)",
    ":active": {
      backgroundColor: "hsl(31, 77%, 52%)",
      borderStyle: "solid",
      color: "white",
      borderColor: "white",
      paddingLeft: "8px",
      paddingBottom: "8px",
      paddingTop: "8px",
      paddingRight: "8px",
      borderWidth: "2px"
    } 
  },
  darkCyanButton: {
    color: "hsl(184, 100%, 22%)",
    ":active": {
      backgroundColor: "hsl(184, 100%, 22%)",
      borderStyle: "solid",
      color: "white",
      borderColor: "white",
      paddingLeft: "8px",
      paddingBottom: "8px",
      paddingTop: "8px",
      paddingRight: "8px",
      borderWidth: "2px"
    }  
  },
  darkestCyanButton: {
    color: "hsl(179, 100%, 13%)",
    ":active": {
      backgroundColor: "hsl(179, 100%, 13%)",
      borderStyle: "solid",
      color: "white",
      borderColor: "white",
      paddingLeft: "8px",
      paddingBottom: "8px",
      paddingTop: "8px",
      paddingRight: "8px",
      borderWidth: "2px"
    } 
  },
  orangeCard: {
    backgroundColor: 'hsl(31, 77%, 52%)'
  },
  darkCyanCard: {
    backgroundColor: 'hsl(184, 100%, 22%)'
  },
  darkestCyanCard: {
    backgroundColor: 'hsl(179, 100%, 13%)'
  },
  textCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "none",
  },  
}

const mobileStyles = {
  card: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    borderRadius: "7px",
    overflow: "hidden",
    height: "1025px"
  },
  header: {
    fontSize: "32px",
    marginTop: "25px",
    marginBottom: "8px"
  },
  infoText: {
    fontSize: "12px",
    lineHeight: '20px',
    marginRight: "70px"
  },
  textCol: {
    height: "33.3333%",
    width: "100%",
    paddingLeft: "40px",
    paddingTop: "40px"
  },
  image: {
    width: "50px"
  },
  button: {
    fontSize: "12px",
    width: "115px",
    height: "37px",
    marginTop: "5px"
  }
}

const desktopStyles = {
  card: {
    display: "flex",
    flexDirection: "row",
    width: "850px",
    height: "450px",
    borderRadius: "5px",
    overflow: "hidden",
  },
  header: {
    fontSize: "35px",
    marginBottom: "7px"
  },
  infoText: {
    fontSize: '12px',
    lineHeight: '20px',
    marginBottom: "75px"
  },
  image: {
    width: "60px",
    marginBottom: "10px"
  },
  textCol: {
    height: "100%",
    width: "33.3333333%",
    paddingLeft: "50px",
    paddingRight: "64px",
    paddingTop: "50px",
  },
  button: {
    width: "115px",
    height: "40px",
  }
}


const ColumnsCard = () => {
  const { width } = useWindowDimensions()



  return (
    <div style={width > 1000 ? desktopStyles.card : mobileStyles.card}>
      <div style={[styles.textCol, styles.orangeCard, width > 1000 ? desktopStyles.textCol : mobileStyles.textCol]}>
        <img style={width > 1000 ? desktopStyles.image : mobileStyles.image} src={sedansIcon} alt="sedan clipart"/>
        <h1 style={[styles.header, width > 1000 ? desktopStyles.header : mobileStyles.header]}>Sedans</h1>
        <p style={[styles.infoText, width > 1000 ? desktopStyles.infoText : mobileStyles.infoText]}>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
          or on your next road trip.
        </p>
        <button style={[styles.button, styles.orangeButton, width > 1000 ? desktopStyles.button : mobileStyles.button]} key="orangeButton">Learn More</button>
      </div>
      <div style={[styles.textCol, styles.darkCyanCard, width > 1000 ? desktopStyles.textCol : mobileStyles.textCol]}>
        <img style={width > 1000 ? desktopStyles.image : mobileStyles.image} src={suvsIcon} alt="suvs clipart"/>
        <h1 style={[styles.header, width > 1000 ? desktopStyles.header : mobileStyles.header]}>SUVs</h1>
        <p style={[styles.infoText, width > 1000 ? desktopStyles.infoText : mobileStyles.infoText]}>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
          and off-road adventures.
        </p>
        <button style={{...styles.button, ...styles.darkCyanButton, ...(width > 1000 ? desktopStyles.button : mobileStyles.button)}} key="darkCyanButton">Learn More</button>
      </div>
      <div style={[styles.textCol, styles.darkestCyanCard, width > 1000 ? desktopStyles.textCol : mobileStyles.textCol]}>
        <img style={width > 1000 ? desktopStyles.image : mobileStyles.image} src={luxuryIcon} alt="luxury clipart"/>
        <h1 style={[styles.header, width > 1000 ? desktopStyles.header : mobileStyles.header]}>Luxury</h1>
        <p style={[styles.infoText, width > 1000 ? desktopStyles.infoText : mobileStyles.infoText]}>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
          rental and arrive in style.
        </p>
        <button style={{...styles.button, ...styles.darkestCyanButton, ...(width > 1000 ? desktopStyles.button : mobileStyles.button)}} key="darkestCyanButton">Learn More</button>
      </div>
    </div>
  )
}

export default Radium(ColumnsCard)