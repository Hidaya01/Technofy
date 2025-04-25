import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function CardList({ title, cards, placeholder, onCardClick, userLevel }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="question-page">
      <div className="main-container3">
        {title && <h2 className="cardlist-title">{title}</h2>}

        <div className="search-bar3">
          <FaSearch className="search-icon3" />
          <input
            type="search"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="cards-list3">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div
                key={index}
                className="card3"
                onClick={() => onCardClick && onCardClick(card.route, userLevel)}
                style={{ cursor: "pointer" }}
              >
                <div className="left3">
                  <div className="icon1">{card.icon}</div>
                  <div className="info3">
                    <h6>{card.title}</h6>
                    <p>{card.description}</p>
                  </div>
                </div>
                <span className="arrow">&#x276F;</span>
              </div>
            ))
          ) : (
            <p>No results found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardList;
