import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <div styles={{ border: "red" }} className="footer-container">
      <p>2022 Litton Headphones All rights reserverd</p>
      <div className="footer-icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </div>
    </div>
  );
}
