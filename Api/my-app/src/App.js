import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [res, setRes] = useState({});
  var myHeaders = new Headers();
  myHeaders.append("apikey", "bM8X7UZjP5S6YkhbQTnOMFUAW83WpT73");
  
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
function callApi(number){
  fetch(
    `https://api.apilayer.com/number_verification/validate?number=${number}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => setRes(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}
  return (
    <div className="App">
      <input
        type="number"
        placeholder="enter number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={()=>callApi(number)}>Submit</button>
      <div>
       
        <p>valid:{res.valid?"TRUE":"N/A"}</p>
        <p>number:{res.number || "N/A"} </p>
        <p>local_format: {res.local_format || "N/A"}</p>
        <p> international_format:{res.international_format || "N/A"} </p>
        <p>country_prefix: {res.country_prefix || "N/A"}</p>
        <p> country_code: {res.country_code || "N/A"}</p>
        <p>country_name:{res.country_name || "N/A"} </p>
        <p>location: {res.location || "N/A"}</p>
        <p> carrier:{res.carrier || "N/A"} </p>
        <p>line_type:{res.line_type || "N/A"} </p>
      </div>
    </div>
  );
}

export default App;
