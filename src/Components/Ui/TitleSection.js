import React from 'react';
import Line from './Line';
import classes from './TitleSection.module.css';
const TitleSection = (props) => {
  return (
    <React.Fragment>
      <div className={classes['role-head']}>
        <h3 className="text-white">{props.children}</h3>
      </div>
      <Line
        position="relative"
        display="block"
        width="27px"
        height="3px"
        left="50%"
        margin="5px 0"
        index="1"
        bg={props.lineColor}
      />
    </React.Fragment>
  );
};

export default TitleSection;
