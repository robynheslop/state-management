import { uuid } from "uuidv4";
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "DELETE_CONSPIRACY":
      const updatedConspiracies = state.conspiracies.filter(
        ({ id }) => id !== action.payload.id
      );
      return {
        ...state,
        conspiracies: updatedConspiracies,
      };
    case "ADD_CONSPIRACY":
      return {
        ...state,
        conspiracies: [
          ...state.conspiracies,
          { ...action.payload, id: uuid() },
        ],
      };
    default:
      return state;
  }
};

export default reducerFunction;
