import { NavLink } from "react-router-dom";
import { Main, Title } from "../styles/homepage";

// Here the HomePage, 
// We use NavLink for link that need to be hilighted such as navigation links
// it set the link to active and add a "activeClassName" attribute.
export default function Home (){
  return (
    <Main>
      <Title>Select USER</Title>
      <NavLink to="user/12">👦 Karl </NavLink> {/* Link to the user page with the user ID*/}
      <NavLink to="user/18">👩 Cecilia </NavLink>
    </Main>
  );
};