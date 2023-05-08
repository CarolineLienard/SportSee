import PropTypes from 'prop-types'; 
import { Head, Name } from "../styles/userInfosStyle";

// Composant Bonjour User
export default function UserInfos({name}) {
  return (  
    <Head>
      <h1>Bonjour <Name>{name}</Name></h1>
      <span>Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
    </Head>
  );
}

UserInfos.propTypes = {
	name: PropTypes.string,
};
