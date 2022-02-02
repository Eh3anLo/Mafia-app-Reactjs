import './RolesList.css';
import Card from './Ui/Card';
import rolesData from '../assets/rolesData';
import React from 'react';
import RedLine from './Ui/Line';
import TitleSection from './Ui/TitleSection';

const RolesList = () => {
  return (
    <div className="container">
      <TitleSection>
        مافیا
      </TitleSection>
      <div className="role-container">
        {rolesData.filter(role => role.group === 'mafia').map((role) => (
          <Card id={role.id} value={role.name} class={role.group} key={role.id} onChecked={role} />
        ))}
      </div>
      <TitleSection lineColor='#00FF08'>
        شهروند
      </TitleSection>
      <div className="role-container">
        {rolesData.filter(role => role.group === 'citizen').map((role) => (
          <Card id={role.id} value={role.name} class={role.group} key={role.id} onChecked={role}/>
        ))}
      </div>
    </div>
  );
};
export default RolesList;
