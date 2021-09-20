import { GIG_ADD_ITEM, GIG_LIST_REQUEST, GIG_REMOVE_ITEM } from "../constants/gigConstants";


export const gigListReducer = (state = { gigs: []}, action) => {
   switch (action.type) {

    case GIG_LIST_REQUEST:
      return { gigs: action.payload };

      case GIG_ADD_ITEM:
        const item = action.payload;
        const existItem = state.gigList.find((x) => x.user === item.user)
        if (existItem) {
            return {...state,
            gigList: state.gigList.map( x => x.user === existItem.user? item : x)} 
        }    
        else {
            return {...state, gigList: [...state.gigList, item]}
        }
    case GIG_REMOVE_ITEM:
        return {...state, gigs: [...state.gigs.filter( x => x.id !== action.payload)]}

    default:
      return state;
  }
};

