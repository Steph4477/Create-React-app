import K from "../assets/logo/K.svg";
import maison from "../assets/logo/maison.svg";
import S from "../assets/logo/S.svg";
import A from "../assets/logo/A.svg";
import { Link } from "react-router-dom";

export default function Logo() {

  return (
    <div className="logo-spinner">
      <div className="logo_spinner_letter">
        <Link to="/">
          <img src={K} alt="" className="logo_spinner_letter_k" />
          <img src={maison} alt="" className="logo_spinner_letter_maison" />
          <img src={S} alt="" className="logo_spinner_letter_s" />
          <img src={A} alt="" className="logo_spinner_letter_a" />
        </Link>
      </div>
    </div>
  )
}
