// React imports
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// API call
import { getData } from "../utils/getData";

// Recharts library
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// Assets and style 
import { Container } from "../styles/userPerformanceStyle";

// Component "Spider diagram"
export default function UserPerformance() {
  const { id } = useParams(); // get id in URL
  const [data, setData] = useState([]); // set data in useEffect below, here data is type of performance + value

  useEffect(() => {
    void (async () => { // Syntax for auto executing function, no need to call it after
      const response = await getData("USER_PERFORMANCE", id);
      if (!response) return alert("data error");
      const formatData = response.data.data.map((data) => {
        // Replace number by type of performance
        switch (data.kind) {
          case 1:
            return { ...data, kind: "Cardio" };
          case 2:
            return { ...data, kind: "Energie" };
          case 3:
            return { ...data, kind: "Endurance" };
          case 4:
            return { ...data, kind: "Force" };
          case 5:
            return { ...data, kind: "Vitesse" };
          case 6:
            return { ...data, kind: "Intensité" };
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
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}> {/* pass the props data(array of objects) to RadarChart */}
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis	dataKey="kind" stroke='white' tickLine={false} axisLine={false}  tick={{ fontSize: 10 }} />
          <Radar dataKey='value' stroke='#FF0101'	fill='#FF0101' fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
}
