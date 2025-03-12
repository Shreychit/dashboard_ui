import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { GiCardboardBoxClosed } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

function NavbarMenu() {
  return (
    <Navbar className="fixed-top bg-body-light" style={{ backgroundColor: "#fff"}}>
      <Container fluid>
        <Navbar.Brand href="#home" style={{fontWeight: "700px", fontSize: "20px"}}><span style={{color: "#9e77d2"}}><GiCardboardBoxClosed /></span> UserBoard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" style={{marginRight: "40px"}}>
          <Navbar.Text style={{marginRight: "10px"}}>
           <span><IoIosNotificationsOutline /></span> Notification
          </Navbar.Text>
          <Navbar.Text style={{marginRight: "10px"}}>
           <span><IoSettingsOutline /></span> Settings
          
          </Navbar.Text>
          <Navbar.Text style={{marginRight: "10px"}}>
           <span><MdLogout /></span> Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;