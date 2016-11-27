import * as types from '../constants/ActionTypes';

const initialState = {
  friends: [1, 2, 3],
  friendsById: {
    1: {
      id: 1,
      name: 'Name1 Surname1'
    },
    2: {
      id: 2,
      name: 'Name2 Surname2'
    },
    3: {
      id: 3,
      name: 'Name3 Surname3'
    }
  }
};

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        friends: state.friends.concat(newId),
        friendsById: {
          ...state.friendsById,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }

    default:
      return state;
  }
}
