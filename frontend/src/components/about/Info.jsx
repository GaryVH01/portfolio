import React from "react";
import {
  HiOutlineDesktopComputer,
  HiOutlineTerminal,
  HiOutlineSparkles,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <HiOutlineDesktopComputer className="about__icon" />
        <h3 className="about__title">Expérience</h3>
        <span className="about__subtitle">1 an</span>
      </div>
      <div className="about__box">
        <HiOutlineTerminal className="about__icon" />
        <h3 className="about__title">Réalisations</h3>
        <span className="about__subtitle">9 Projets</span>
      </div>
      <div className="about__box">
        <HiOutlineSparkles className="about__icon" />
        <h3 className="about__title">Joignable</h3>
        <span className="about__subtitle">Par Téléphone ou par Mail</span>
      </div>
    </div>
  );
};

export default Info;
