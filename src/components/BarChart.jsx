// React imports 
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// API call 
import { getData } from "../utils/getData";

// Recharts library
import { BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer } from "recharts";

// Main components imports 
import ActivityToolType from "./ActivityToolType";

// Assets and style imports 
import {
  Wrapper,
  Head,
  Title,
  Text,
  Icon,
  Legend,
  Info,
} from "../styles/barChartStyle";

// Component "Activité quotidienne"
export default function BarCharts() {
    const { id } = useParams(); // get id param from URL
    const [data, setData] = useState([]);
    // user data, set in the useEffect below,here data is an array of objects (day, Kg, calories )

    useEffect(() => {
            void (async () => { // Syntax for auto executing function, no need to call it after
              const response = await getData("USER_ACTIVITY", id);
              if (!response) return alert("data error");
              setData(response.data.sessions);
            })();
    }, [id]);
    
    // format data.day
    for (let i = 0 ; i < data.length ; i ++)
        {data[i].day = i + 1;}

    // Make sure we have the data
    if (data.length === 0) return null;

    return (  
        <Wrapper>
            <Head>
                <Title>Activité quotidienne</Title>
                <Legend>
                    <Info>
                        <Icon color='#282D30' />
                        <Text>Poids (kg)</Text>
                    </Info>
                    <Info>
                        <Icon color='#E60000' />
                        <Text>Calories brûlées (kCal)</Text>
                    </Info>
                </Legend>
            </Head>
            <ResponsiveContainer  height={200} >
                <BarChart data={data} barGap={8} barCategoryGap={1}> {/* pass data(array of objects) to BarChart*/}
                    <CartesianGrid vertical={false} strokeDasharray="1 1"/>
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
                    <Tooltip content={<ActivityToolType/>}/>x
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    );
}
