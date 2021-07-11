import React from "react"
import ColumnsCard from "../components/ColumnsCard"
import useWindowDimensions from "../util/windowDimensions"

const styles = {
  cardPage: {
    backgroundColor: "hsl(0, 0%, 95%)",
    height: "100%",
    minHeight: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  mobile: {
    padding: "150px 0 150px 0"
  },
  desktop: {
    height: "100vh",
    position: "fixed",
    minHeight: "100vh"
  },
  mobileShort: {
    padding: "300px 0 300px 0"
  }
}

const ColumnsCardPage = () => {
  const { width, height } = useWindowDimensions()

  return (
    <div style={{...styles.cardPage, ...( width > 1000 ? styles.desktop : height < 650 ? styles.mobileShort : styles.mobile) }}>
      <ColumnsCard />    
    </div>
  )
}

export default ColumnsCardPage