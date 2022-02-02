import React, { useContext } from 'react';
import PlayersCount from './Components/PlayersCount';
import Line from './Components/Ui/Line';
import RolesList from './Components/RolesList';
import RoleContext from './context/RoleContext';
import Button from './Components/Ui/Button';
const Intro = (props) => {
  const roleContext = useContext(RoleContext);
  const startGameHandler = () => {
    if (roleContext.selectedRoles.length === roleContext.availableRoleCount) {
      props.onClick(true);
      console.log('pass');
    } else {
      // console.log(' array :' + roleContext.selectedRoles.length)
      // console.log(' count :' + roleContext.availableRoleCount)
      console.log('faild');
      props.onClick(false);
    }
  };
  return (
    <React.Fragment>
      <div style={{ padding: '70px 0 80px 0' }}>
        <PlayersCount />
        <Line
          position="relative"
          display="block"
          width="208px"
          height="2px"
          left="50%"
          margin="15px 0 15px 0"
          index="1"
        />
        <RolesList />
        <Button onClick={startGameHandler}>شروع بازی</Button>
      </div>
    </React.Fragment>
  );
};

export default Intro;
