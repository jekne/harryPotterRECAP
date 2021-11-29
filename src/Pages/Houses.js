import HouseList from "../components/HouseList";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";

export default function Houses() {
  const [houses, set_Houses] = useState("");

  const params = useParams();
  console.log("this is my params", params);

  const fetchHouses = async () => {
    const response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/house/${params.id}`
    );
    console.log("this is my houses", response);
    set_Houses(response.data.characters);
  };
  useEffect(() => {
    fetchHouses();
  }, []);
  return (
    <div>
      <div>THIS IS ALL THE HOUSES FROM HARRY POTTER</div>

      {!houses
        ? "Loading"
        : houses.map((x) => {
            return <div>{x.characters} </div>;
          })}
    </div>
  );
}
