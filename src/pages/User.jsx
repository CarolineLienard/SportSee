// React imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// API call imports
import { getData } from "../utils/getData";

// Main  components imports
import BarCharts from "../components/BarChart";
import ScoreChart from "../components/ScoreChart";
import KeyData from "../components/KeyData";
import UserAverageSessions from "../components/UserAverageSession";
import UserPerformance from "../components/UserPerformance";
import SideBar from "../components/SideBar";
import UserInfos from "../components/UserInfos";

// Assets and style imports
import { Main, Container, Content, BottomChart } from "../styles/userStyle";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";

export default function User() {
  const { id } = useParams(); // We first get the id params from the URL using useParams hook
  const [ data, setData ] = useState([]); // Contain the user data, we set it on the useEffect below

  // Main useEffect, to call the API and get the user data
  useEffect(() => {
    void (async () => { // Syntax for auto executing function, no need to call it after
      const response = await getData("USER_MAIN_DATA", id); // using an async function, waiting for get data to execute before doing the rest
      if (!response) return console.log("error") // Return error if no response
      setData(response.data);
    })();
  }, [id]);

  // Make sure to have a data or return null
  if (data.length === 0) return null;

  return (
    <Main>
      <SideBar />
      <Container>
        <UserInfos name={data.userInfos.firstName} />
        <Content>
          <section>
            <BarCharts />
            <BottomChart>
              <UserAverageSessions />
              <UserPerformance />
              <ScoreChart data={data} />
            </BottomChart>
          </section>
          <aside>
            <KeyData
              icon={caloriesIcon}
              info={`${data.keyData.calorieCount}kCal`}
              text="Calories"
            />
            <KeyData
              icon={proteinsIcon}
              info={`${data.keyData.proteinCount}g`}
              text="Proteines"
            />
            <KeyData
              icon={glucidesIcon}
              info={`${data.keyData.carbohydrateCount}g`}
              text="Glucides"
            />
            <KeyData
              icon={lipidesIcon}
              info={`${data.keyData.lipidCount}g`}
              text="Lipides"
            />
          </aside>
        </Content>
      </Container>
    </Main>
  );
}
