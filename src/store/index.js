import { combineReducers } from "redux";

import { reducerUsers } from "./application/reducers/users.reducer";

const reducer = combineReducers({
  usersReducer: reducerUsers
});

export default reducer;
