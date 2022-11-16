import axios from "axios";

const apiUrl = "http://localhost:3000";
//const stack = createStackNavigator();
export function doLogin  (email, password)  {
  const rsp = axios.post(apiUrl + "/login", {email:email, password:password});

  // const rsp =  fetch(apiUrl + "/login", {
  //   method:"POST",
  //   headers:{
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   },
  //   body:JSON.stringify({email:email, password:password})
  //   //TO DO: Verify Login Works
  // });
  console.log(rsp);
  rsp.then(console.log);
  console.log("breast");
  //console.log(rsp);
  
};