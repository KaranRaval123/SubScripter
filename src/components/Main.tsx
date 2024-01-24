import successIcon from "../assets/icon-success.svg";
import image from "../assets/illustration-sign-up-desktop.svg";
import "./Main.css";
import Card from "./Card";

type mainProps = {
  isValid: boolean;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
  isSubscribed: boolean;
  setSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Main = ({
  isValid,
  text,
  setText,
  setValid,
  isSubscribed,
  setSubscribed,
}: mainProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  function isValidEmail(email: string): void {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setValid(isValid);
    if (isValid) {
      setSubscribed(isValid);
    }
  }

  return !isSubscribed ? (
    <div className="container">
      <div className="left">
        <h1> Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div>
          <img src={successIcon} alt="successIcon" height={20} width={20} />
          <span>Product delivery and building what matters</span>
        </div>
        <div>
          <img src={successIcon} alt="successIcon" height={20} width={20} />
          <span>Measuring to ensure updates are a success</span>
        </div>
        <div>
          <img src={successIcon} alt="successIcon" height={20} width={20} />
          <span>And much more</span>
        </div>
        <div className="input-section">
          <div className="email-section">
            <label htmlFor="email">Email address</label>
            {!isValid ? (
              <span className="checkEmail">Valid email required</span>
            ) : (
              ""
            )}
          </div>
          <input
            type="text"
            id="email"
            value={text}
            placeholder="email@company.com"
            onChange={handleInputChange}
            style={!isValid ? { color: "hsl(4, 100%, 67%)" } : {}}
          />
          <button onClick={() => isValidEmail(text)} className="btn">
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
      <div className="right">
        <img src={image} alt="desktop view" />
      </div>
    </div>
  ) : (
    <Card setSubscribed={setSubscribed} />
  );
};

export default Main;
