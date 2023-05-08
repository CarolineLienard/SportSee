import { Container, Title, Text, Score } from "../styles/scoreChartStyle"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

// Component progression "Score" in % (Pie)
export default function ScoreChart({ data }) {
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
  ];

  return (
    <Container>
      <Title>Score</Title>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score} // pass the props score(array of objects) to Pie component
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" /> // Index 0, this cell is the progression
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Text>
        <Score>
          {score[0].value * 100}%<br />
        </Score>
        de votre
        <br /> objectif
      </Text>
    </Container>
  );
}

ScoreChart.propTypes = {
  data: PropTypes.object,
};
