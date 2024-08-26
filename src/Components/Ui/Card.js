import './utilities.css';
import './Card.css';
import RoleContext from '../../context/RoleContext';
import React, { useContext, useState } from 'react';
const Card = (props) => {
  const roleContext = useContext(RoleContext);
  const [ isChecked , setIsChecked ] = useState(false);
  const checkedHandler = () =>{
    setIsChecked(prevState => !prevState);
    if(!isChecked){
      roleContext.onRoleChecked(props.onChecked);
    } else {
      roleContext.onRoleUnChecked(props.onChecked.id);
    }
  }
  return (
    <label htmlFor={props.id} key={props.id} className={`text-white card ${isChecked ? props.class : ''} bg-darken`}>
      <input className="input" type="checkbox" id={props.id}  onClick={checkedHandler} disabled={!isChecked && roleContext.cardIsChecked}/>
      <div className="card-body">
        <div className="card-img">
          <img src="images\img.png" alt="asd" />
        </div>
        <div className="card-check font-15">
          <span className="checkmark bg-dark "></span>
          {props.value}
        </div>
      </div>
    </label>
  );
};
export default Card;
