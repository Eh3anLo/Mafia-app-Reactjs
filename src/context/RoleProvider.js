import React, { useReducer } from 'react';
import RoleContext from './RoleContext';

const defaultStateValue = {
  selectedRoles: [],
  playersCount: 0,
  availableCount: 0,
  cardIsChecked: true,
  availableRoleCount: 0,
};
const rolesReducer = (state, action) => {
  if (action.type === 'ADD') {
    if (state.availableCount !== 0) {
      let updatedRoles = state.selectedRoles.concat(action.role);
      let updatedAvailableCount = state.availableCount - 1;
      if (updatedAvailableCount === 0) {
        console.log(action.role);
        console.log(updatedRoles);
        return {
          selectedRoles: updatedRoles,
          availableCount: updatedAvailableCount,
          playersCount: state.playersCount,
          cardIsChecked: true,
          availableRoleCount: state.playersCount,
        };
      }
      return {
        selectedRoles: updatedRoles,
        availableCount: updatedAvailableCount,
        playersCount: state.playersCount,
        cardIsChecked: false,
        availableRoleCount: state.playersCount,
      };
    } else {
      return {
        ...defaultStateValue,
        cardIsChecked: !state.cardIsChecked,
      };
    }
  }
  if (action.type === 'DELETE') {
    const isCheckedCondition = state.selectedRoles.find((role) => role.id === action.id);
    console.log(isCheckedCondition);
    if (isCheckedCondition) {
      let updatedRoles = state.selectedRoles.filter((role) => role.id !== action.id);
      let updatedAvailableCount = state.availableCount + 1;
      return {
        selectedRoles: updatedRoles,
        availableCount: updatedAvailableCount,
        playersCount: state.playersCount,
        cardIsChecked: false,
        availableRoleCount: state.playersCount,
      };
    }
  }
  if (action.type === 'PLAYERS') {
    const updatedPlayersCount = action.playersCount;
    const updatedAvailableCount = action.playersCount;
    // console.log(updatedPlayersCount);
    // console.log(updatedAvailableCount);
    return {
      selectedRoles: state.selectedRoles,
      availableCount: updatedAvailableCount,
      playersCount: updatedPlayersCount,
      availableRoleCount: updatedPlayersCount,
    };
  }
};
const RoleProvider = ({ children }) => {
  const [rolesState, dispatchRolesState] = useReducer(rolesReducer, defaultStateValue);
  const addRoleHandler = (roleObj) => {
    dispatchRolesState({ type: 'ADD', role: roleObj });
  };
  const deleteRoleHandler = (id) => {
    dispatchRolesState({ type: 'DELETE', id: id });
  };
  const enterPlayerCountHandler = (playersCount) => {
    dispatchRolesState({ type: 'PLAYERS', playersCount });
  };

  const roleContextValue = {
    selectedRoles: rolesState.selectedRoles,
    playersCount: enterPlayerCountHandler,
    availableCount: rolesState.availableCount,
    onRoleChecked: addRoleHandler,
    onRoleUnChecked: deleteRoleHandler,
    cardIsChecked: rolesState.cardIsChecked,
    availableRoleCount: rolesState.availableRoleCount,
  };
  return <RoleContext.Provider value={roleContextValue}>{children}</RoleContext.Provider>;
};

export default RoleProvider;
