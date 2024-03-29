// React imports 
import { NavLink } from "react-router-dom";

// Assets and style imports
import iconMeditation from "../assets/iconMeditation.svg";
import iconBike from "../assets/iconBike.svg";
import iconSwiming from "../assets/iconSwiming.svg";
import iconDumbBell from "../assets/iconDumbBell.svg";
import { Container, Nav, Wrapper, NavText } from "../styles/sideBarStyle";

// Component left sideBar navigation
export default function SideBar(){
  return (
    <Container>
      <Nav>
        <Wrapper>
          <NavLink to="#">
            <img src={iconMeditation} alt="Meditation" />
          </NavLink>
          <NavLink to="#">
            <img src={iconSwiming} alt="Swiming" />
          </NavLink>
          <NavLink to="#">
            <img src={iconBike} alt="Bike" />
          </NavLink>
          <NavLink to="#">
            <img src={iconDumbBell} alt="Dumb-Bell" />
          </NavLink>
        </Wrapper>
        <NavText>Copyright, SportSee 2020</NavText>
      </Nav>
    </Container>
  );
};

