import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
function App() {
  const [text, setText] = useState<string>("");
  const [isVaild, setValid] = useState<boolean>(true);
  const [isSubscribed, setSubscribed] = useState<boolean>(false);

  return (
    <div className="App">
      <Main
        isValid={isVaild}
        text={text}
        setText={setText}
        setValid={setValid}
        isSubscribed={isSubscribed}
        setSubscribed={setSubscribed}
      />
    </div>
  );
}

export default App;
