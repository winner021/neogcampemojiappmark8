import { useState } from "react";
import "./styles.css";
var imojeDictionary = {
  "🙂": "Smiling",
  "😘": "kissing ",
  "😉": "winking ",
  "🥵": "hot",
  "🥶": "cold",
  "🤤": " Drooling Face",
  "😪": "Sleeping Face",
  "🥴": "Woozy Facee",
  "😵": "Dizzy Face"
};

var imojehave = Object.keys(imojeDictionary);
export default function App() {
  var [outmeaning, imomeaning] = useState("");
  var [imojiout, imojin] = useState("");
  function clickhandler(imoj) {
    var userinput = imoj;
    var meaning = imojeDictionary[userinput];
    imomeaning(meaning);
  }

  function textevent(event) {
    var userinput = event.target.value;
    var meaning = imojeDictionary[userinput];
    imomeaning(meaning);
  }

  return (
    <div className="App">
      <input
        style={{ height: "5rem", width: "20rem" }}
        onChange={textevent}
      ></input>
      <h1>{outmeaning}</h1>

      <h1>Emoji we have in our database</h1>
      {imojehave.map((imoj) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={() => clickhandler(imoj)}
          >
            {imoj}
          </span>
        );
      })}
    </div>
  );
}
