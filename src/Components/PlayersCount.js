import React, { useContext, useRef, useState } from 'react';
import './PlayersCount.css';
import RoleContext from '../context/RoleContext';
const PlayerCount = () => {
  const roleContext = useContext(RoleContext);
  const playersCountInput = useRef(null);
  const enterPlayersCountHandler = () => {
    roleContext.playersCount(parseInt(playersCountInput.current.value));
    // console.log(roleContext.availableCount.value)
  }
  return (
    <div className="count-container">
        <label htmlFor="num-input">
          <input type="number" ref={playersCountInput} className="num-input" name="num-input" min={3} onChange={enterPlayersCountHandler}/>
          تعداد بازیکن ها
        </label>
    </div>  );
};

export default PlayerCount;
