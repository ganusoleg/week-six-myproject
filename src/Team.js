import { useState } from "react";
import './App.css';
import { dataTwo } from "./dataTwo";

function Team() {
    
    
  const [person, setPerson] = useState(0);
  const {idTwo, nameTwo, descriptionTwo, ageTwo, imageTwo } = dataTwo[person];
  const [showMore, setShowMore] = useState(false);
 

  const previousPerson = () => {
  setPerson((person =>{
    person --;
    if (person < 0) {
      return dataTwo.length - 1;
    }
    return person;
  }))
  }

  const nextPerson = () => {
    setPerson((person =>{
      person ++;
      if (person > dataTwo.length - 1) {
        person = 0;
      }
      return person;
    }))
  }

  return(
    <div>
      <div className="contone">
        <h2 className="back">YourChoice.kz</h2>
      </div>

      <div className="cont">
        <img src={imageTwo} width="670px" height="400px" alt="kartinka"/>
      </div>

      <div className="cont">
        <h1>{idTwo} - {nameTwo} - {ageTwo} лет</h1>
      </div>

      <div className="cont text">
        <p>{showMore ? descriptionTwo : descriptionTwo.substring(0,195) + "..."}
        <button className="btnmore" onClick={() => setShowMore(!showMore)}>{showMore ? "Скрыть" : "Подробнее"}</button>
        </p>
      </div>

      <div className="conttwo">
        <button className="change" onClick={previousPerson}>Назад</button>
        <button className="change" onClick={nextPerson}>Вперед</button>
      </div>
    </div>
  )
  
}

export default Team;
