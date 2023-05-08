import PropTypes from 'prop-types'; 
import { Wrapper, Infos, InfosData, InfosText } from "../styles/keyDataStyle";

// Calorie, Proteines... component on the right used in User.jsx
export default function KeyData({ icon, info, text }) {
    return (  
        <Wrapper>
            <img src={icon} alt="calories icon"/>
            <Infos>
                <InfosData>{info}</InfosData>
                <InfosText>{text}</InfosText>
            </Infos>
        </Wrapper>
    );
}

KeyData.propTypes = {
  icon: PropTypes.any,
  info: PropTypes.string,
  text: PropTypes.string,
}