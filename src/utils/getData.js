// API call imports
import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
} from "./User";

// getData is a function that need 2 params, type and ID. 
// Depending on the type, we call a different API route
export const getData = async (type, id) => {
  let data = []; // Response from the API call are updated here

  switch (type) {
    case "USER_ACTIVITY":
      data = await getUserActivity(id);
      break;
    case "USER_PERFORMANCE":
      data = await getUserPerformance(id);
      break;
    case "USER_AVERAGE_SESSIONS":
      data = await getUserAverageSessions(id);
      break;
    case "USER_MAIN_DATA":
      data = await getUserInfos(id);
      break;
    default: data=[] 
  }
  return data;
};
