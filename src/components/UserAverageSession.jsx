// React imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// API call
import { getData } from "../utils/getData";

// Recharts library
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Main components 
import SessionsToolType from "./SessionsToolType.jsx";

// Assets and style
import { Container, Title } from "../styles/userAverageSessionStyle";

// Composant "Durée moyenne des sessions"
export default function UserAverageSessions() {  
  const { id } = useParams(); // get id param in url
  const [data, setData] = useState([]); // set data with useEffect below, here data contain the Day + session length(data)

  useEffect(() => {
    void (async () => { // Syntax for auto executing function, no need to call it after
      const response = await getData("USER_AVERAGE_SESSIONS", id);
      if (!response) return console.log("error")
      const formatData = response.data.sessions.map((data) => {
        // replace data.day number by every day letter
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    })();
  }, [id]);

  // Check if we have data
  if (data.length === 0) return null;

  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} strokeWidth={1} //pass the props data(array of objects) to LineChart
             onMouseMove={(e) => {
                if (e.isTooltipActive === true) {
                  let div = document.querySelector('.bUPtxZ')
                  let windowWidth = div.clientWidth
                  let mouseXpercentage = Math.round(
                    (e.activeCoordinate.x / windowWidth) * 100
                  )
                  // @ts-ignore
                  div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                }
              }}
        >
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{right:5, left:5}}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionsToolType />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
