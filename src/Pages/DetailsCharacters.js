import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Form from "../components/Form";
import Formcharacter from "../components/Form";

export default function DetailsCharacters() {
  const [character, set_Character] = useState("");
  const params = useParams();
  console.log("this is my params", params);

  const fetchData = async () => {
    const response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/character/${params.id}`
    );
    console.log("this is my response from one character", response);
    set_Character(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div> THIS IS A CHARACTER WITH HIS/HER DETAILS</div>
      <div>
        <h1>{character.name}</h1>
        <img src={character.imgUrl} />
        <h3> Blood: {character.blood}</h3>
        <h3> Born in {character.born}</h3>
        <h3> Specie: {character.species}</h3>
        {/* <h3> Member of the {character.house.name} house</h3> */}
        <h3> His patronus is a {character.patronus}</h3>
        <h3> His quote is: {character.quote}</h3>
      </div>
      <Formcharacter />
    </div>
  );
}

// patronus: "Phoenix";
// quote: "It does not do to dwell on dreams and forget to live";
// species: "Human";
