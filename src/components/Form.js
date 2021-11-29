// import { useState } from "react";
// import { useEffect } from "react";
// export default function Formcharacter() {
//   //   const initial_text = "";
//   const [text, set_text] = useState("");

//   const addPlayer = (event) => {
//     event.preventDefault();
//     // console.log("Add a new player with the name:", name);
//     set_text(event.target.value);
//   };
//   //   useEffect(() => {
//   //     console.log("The useEffect action!");
//   //   }, [set_text]);
//   return (
//     <div>
//       <div> I am rendering my form</div>
//       <div>
//         THIS IS THE NEW TEXT:<b>{text}</b>{" "}
//       </div>
//       <form>
//         <h4 id="name">
//           NAME:
//           <input
//             placeholder="Name"
//             type="text"
//             value={text}
//             onChange={(event) => set_text(event.target.value)}
//           />
//         </h4>
//         <h4 id="comment">
//           COMMENT HERE:
//           <input
//             type="text"
//             value={text}
//             onChange={(event) => set_text(event.target.value)}
//           />
//         </h4>
//         <button onClick={addPlayer}>SUBMIT</button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import ReactDOM from "react-dom";

export default function Formcharacter() {
  const [name, setName] = useState("");
  const [description, set_Description] = useState("");
  // console.log("name ", name);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.value.target);
    console.log(`this is the name ${name} and the description ${description}`);
  };

  return (
    <div>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          description:
          <input
            type="text"
            value={description}
            onChange={(event) => set_Description(event.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>SUBIMIT</button>
      </form>
      <h3>{setName}</h3>
    </div>
  );
}
