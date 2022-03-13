import "./App.css";
import Header from "./components/Header";
import Heart from "react-animated-heart";
import { useState } from "react";
import gift from "./assets/gift.gif";

function App() {
  const [isClick, setClick] = useState(false);
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [chances, setChances] = useState(2348);

  const onFinish = (e) => {
    e.preventDefault();
    if (password === "08042019") {
      window.alert("Bonne réponse");
      setIsCorrect(true);
    } else {
      window.alert(
        `Mauvaise réponse, tu as droit encore à ${chances} tentatives`
      );
      setChances((prev) => prev - 1);
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
            {!isClick && <span>Tape sur le coeur</span>}
          </div>
        </div>
      )}

      {isClick && !isCorrect && (
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
          <h3>A toi de jouer</h3>
          <span style={{ margin: "0.5rem", fontSize: "0.8rem" }}>
            (Demande à David pour avoir un indice)
          </span>
          <input
            style={{
              padding: "0.8rem",
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
              padding: "0.8rem",
              borderRadius: "10px",
              outline: "none",
              borderWidth: 0,
              cursor: "pointer",
              backgroundColor: "#ff7675",
              color: "white",
              fontWeight: "bold",
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
          <span style={{ margin: "0.5rem", fontWeight: "bold" }}>
            Bravo ! Tu as trouvé ! Tu peux ouvrir le cadeau
          </span>
          <br />
          <br />
          <a href="https://www.dior.com/fr_fr/mode-femme/bijoux/colliers">
            <img src={gift} width={400} alt="gift" />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
