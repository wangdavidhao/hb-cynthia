import "./App.css";
import Header from "./components/Header";
import Heart from "react-animated-heart";
import { useState } from "react";
import gift from "./assets/gift.png";

function App() {
  const [isClick, setClick] = useState(false);
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const onFinish = (e) => {
    e.preventDefault();
    if (password === "08042019") {
      window.alert("Bonne réponse");
      setIsCorrect(true);
    } else {
      window.alert("Mauvaise réponse");
    }
  };

  return (
    <div className="App" style={{ margin: "0.3rem" }}>
      <Header />
      {!isCorrect && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Happy birthday</h1>
          <h1>&</h1>
          <h1>Be ready for the take off !</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
            <span>Tape sur le coeur</span>
          </div>
        </div>
      )}

      {isClick && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{}}>
            Tu as un autre cadeau :) faut rentrer le bon mot de passe pour y
            avoir accès
          </h3>
          <span style={{ margin: "0.5rem", fontSize: "0.8rem" }}>
            (Demande à David pour avoir un indice)
          </span>
          <input
            style={{
              padding: "0.5rem",
              borderRadius: "10px",
              borderWidth: "0",
            }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={{
              margin: "0.5rem",
              padding: "0.5rem",
              borderRadius: "10px",
              outline: "none",
              borderWidth: 0,
              cursor: "pointer",
              backgroundColor: "#ff7675",
              color: "white",
            }}
            onClick={onFinish}
          >
            Valider
          </button>
        </div>
      )}
      {isCorrect && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0.5rem",
          }}
        >
          <span style={{ margin: "0.5rem" }}>
            Bravo ! Tu as trouvé ! Tu peux ouvrir le cadeau
          </span>
          <a href="https://www.dior.com/fr_fr/mode-femme/bijoux/colliers">
            <img src={gift} width={100} />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
