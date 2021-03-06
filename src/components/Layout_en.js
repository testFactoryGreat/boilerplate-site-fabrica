import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar_en"
import Sidebar from "./Sidebar_en"
import Footer from "./Footer_en"
const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
