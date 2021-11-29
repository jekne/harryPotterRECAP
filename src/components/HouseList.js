import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function HouseList() {
  const [houses, set_Houses] = useState("");
  const [characters, set_Character] = useState("");

  const params = useParams();
  console.log("this is my params", params);

  const fetchHouses = async () => {
    const response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/house/${params.id}`
    );
    console.log("this is my houses", response);
    set_Houses(response.data);
    set_Character(response.data.characters);
  };
  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <div>
      <div> THIS SHOULD APPEAR ON THE HOUSE</div>
      <div>
        <h1>{houses.name}</h1>
        <img src={houses.imgUrl} />
        <h3> Animal: {houses.animal}</h3>
        <h3> Colors: {houses.colors}</h3>
        <h3> Founder: {houses.founder}</h3>
        <h3> His ghost is a {houses.ghost}</h3>
        {/* <h3> Charaters belong to this house {houses.characters}</h3> */}
      </div>
      <div>CHARACTERS:</div>
      <div>
        {!characters
          ? "Loading"
          : characters.map((x) => {
              return (
                <ul>
                  <li> {x.name} </li>
                </ul>
              );
            })}
      </div>
      {/* <div>
        {" "}
        {!characters
          ? "loading"
          : characters.map((x) => {
              return (
                <div>
                  {x.characters.map((y) => {
                    return <div>{y.characters}</div>;
                  })}
                </div>
              );
            })}
      </div> */}
    </div>
  );
}

// animal: "Eagle"
// characters: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// colors: "Blue and Bronze"
// createdAt: "2021-10-01T07:32:30.435Z"
// founder: "Rowena Ravenclaw"
// ghost: "Grey Lady"
// id: 3
// imgUrl: "https://1.bp.blogspot.com/-3AU33l-fvxI/V-pACpACLHI/AAAAAAAAFKs/Mqcqyj2sTQksDlMg9vx6TSrarVzZWW-VwCLcB/s1600/pm-pride-Ravenclaw-Twitter-Header-Image-1500-x-500-px.png"
// name: "Ravenclaw"
// updatedAt:
