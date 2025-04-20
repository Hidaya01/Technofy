// CardList.js
import React from "react";
import { FaSearch } from "react-icons/fa";

function CardList({ title, cards, placeholder }) {
  return (
    <div className="question-page">
      <div className="main-container3">
        <div className="search-bar3">
          <FaSearch className="search-icon3" />
          <input type="search" placeholder={placeholder} />
        </div>

        <div className="cards-list3">
          {cards.map((card, index) => (
            <div key={index} className="card3">
              <div className="left3">
                <div className="icon1">{card.icon}</div>
                <div className="info3">
                  <h6>{card.title}<p>{card.description}</p></h6>
                  
                </div>
              </div>
              <span className="arrow">&#x276F; </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardList;
