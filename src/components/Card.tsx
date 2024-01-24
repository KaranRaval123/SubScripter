import successIcon from "../assets/icon-success.svg";
import "./Card.css";

interface CardProps {
  setSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card: React.FC<CardProps> = ({ setSubscribed }) => {
  return (
    <div className="card">
      <img src={successIcon} alt="successIcon" height={55} width={60} />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <b>ash@loremcompany.com.</b>
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button className="btn" onClick={() => setSubscribed(false)}>
        Dismiss message
      </button>
    </div>
  );
};

export default Card;
