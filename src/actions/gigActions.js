import {
  GIG_LIST_REQUEST, GIG_REMOVE_ITEM,
} from "../constants/gigConstants";
import { data } from "../data";

export const listGigs = () =>  (dispatch) => {
    const gigs  = data.user;
    dispatch({ type: GIG_LIST_REQUEST, payload: gigs });
  
};
export const removeGig = (id) => (dispatch, getState) =>{
  dispatch({type:GIG_REMOVE_ITEM, payload:id});
  
}