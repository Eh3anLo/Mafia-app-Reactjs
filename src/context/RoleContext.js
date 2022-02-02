import React from "react";

const RoleContext = React.createContext({
  selectedRoles : [],
  playersCount : 0,
  availableCount : 0,
  availableRoleCount: 0,
  onRoleChecked : () => {},
  onRoleUnChecked : () => {},
  cardIsChecked : true
});

export default RoleContext;