import React, { useContext, useState } from 'react'
import classes from './SpreadRoles.module.css';
import Button from './Components/Ui/Button';
import RoleContext from './context/RoleContext';
import './Components/Ui/utilities.css';
const SpreadRoles = () => {
  const [playerRoleText , setPlayerRoleText] = useState('');
  const [roleGroup , setRoleGroup] = useState('');
  const roleContext = useContext(RoleContext);
  const spreadRolesHandler = () => {
    const playerRole = roleContext.selectedRoles[Math.floor(Math.random() * roleContext.selectedRoles.length)];
    roleContext.onRoleUnChecked(playerRole.id);
    setPlayerRoleText(playerRole.name);
    setRoleGroup(playerRole.group);
    setTimeout(() => {
      setPlayerRoleText('');
      setRoleGroup('');
    } , 3000);
  }
  return (
    <div className={classes.container}>
      <div className={classes['img-container']}>
        <img src="images\img.png" alt='role-img' />
      </div>
      <div className={`${classes['role-output']} ${roleGroup}`}>
        <p>{playerRoleText}</p>
      </div>
      <Button onClick={spreadRolesHandler}>
        انتخاب
      </Button>
    </div>
  )
}

export default SpreadRoles
