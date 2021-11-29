import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// function compare_name(player_a, player_b) {
//   return player_a.name.localeCompare(player_b.name);
// }
// function compareScore(player_a, player_b) {
//   return player_b.score - player_a.score;
// }
export default function PageWithSelector() {
  const [houses, set_Houses] = useState([]);
  const [sort_by, set_sort_by] = useState("name");

  const API = ` https://hp-assessment-api.herokuapp.com/houses`;

  const fetchData = async () => {
    const response = await axios.get(API);
    console.log("this is my response", response);
    set_Houses(response.data);
    console.log("this is my house and set house", houses, set_Houses);
  };
  // const playersSorteByNameOrScore = [...houses].sort(
  //   sort_by === "name" ? compare_name : compareScore
  // );
  //   const charactersAlphabeticalHouse = [...characters].sort((a, b) =>
  //     a.house.name.localeCompare(b.house.name)
  //   );
  const change_sorting = (event) => {
    // console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };
  const handleChange = (event) => {
    set_Houses(event.target.value);
    // set_Houses(res)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {" "}
        THIS IS THE PAGE WITH THE SELECTORS BY HOUSE, TOUCH THE SELECTOR AND
        OLNLY CHARACTER FROM THAT HOUSE APPEARS
      </div>
      <div>
        <div>
          <select onChange={handleChange} value={set_Houses}>
            {!houses
              ? "Loading"
              : houses.map((x) => {
                  return <option>{x.name}</option>;
                })}
          </select>
        </div>
      </div>
    </div>
  );
}
