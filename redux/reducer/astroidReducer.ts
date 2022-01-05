import * as types from "../actions/constants";
import { Astroid, AstroidAction } from "../../types/types";
const initialState: Astroid = {
  astroid: {
    name: "",
    is_potentially_hazardous_asteroid: "",
    nasa_jpl_url: "",
  },
  loading: false,
};

export default (state = initialState, action: AstroidAction) => {
  switch (action.type) {
    case types.SET_ASTROID:
      return {
        ...state,
        astroid: action.payload,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
