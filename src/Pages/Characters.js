import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function compare_name(character_a, character_b) {
  return character_a.name.localeCompare(character_b.name);
}

export default function Characters() {
  const [characters, set_Characters] = useState([]);

  const API = `https://hp-assessment-api.herokuapp.com/characters`;

  const fetchData = async () => {
    const response = await axios.get(API);
    console.log("this is my response", response);
    set_Characters(response.data);
  };
  console.log("this is my fetchData", fetchData);

  const charactersAlphabetical = [...characters].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>THIS IS ALL THE CHARACTERS FROM HARRY POTTER</div>
      <div>
        {!characters
          ? "Loading"
          : charactersAlphabetical.map((x) => {
              return (
                <div key={x.id}>
                  <Link to={`/character/${x.id}`}>
                    {" "}
                    <h2>Wizard: {x.name}</h2>
                  </Link>
                  <h3>Born in {x.born}</h3>
                  <Link to={`/houses/${x.house.id}`}>
                    <h4>House Member of :{x.house.name}</h4>
                  </Link>

                  <img src={x.imgUrl} />

                  <button
                    onClick={(event) =>
                      (window.location.href = `/character/${x.id}`)
                    }
                  >
                    READ MORE
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
}
// name, birth, image, house (name or houseId) and "read more" button
