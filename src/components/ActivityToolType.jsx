import { Container, Text } from "../styles/activityToolTypeStyle";
import PropTypes from 'prop-types';

// Tooltip used in BarChart
export default function ActivityToolType({active, payload}) {
    if (active){
        return (
            <Container>
                <Text>{payload[0].value}kg</Text>
                <Text>{payload[1].value}Kcal</Text>
            </Container>
        );
    }
    return null
}

ActivityToolType.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};