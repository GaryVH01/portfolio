import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <div className="project__card__front">
        <img className="project__img" src={item.image} alt="" />
        <h3 className="project__title">{item.title}</h3>
        <p className="project__description">{item.description}</p>
        <a href={item.source} className="project__button" target="_blank">
          Visiter le site{" "}
          <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
      </div>
      {/* <div className="project__card__back">
        <h3 className="project__card__back__description">{item.title}</h3>
      </div> */}
    </div>
  );
};

export default ProjectItems;
