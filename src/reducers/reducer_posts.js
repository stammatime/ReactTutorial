import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';


export default function(state = {}, action){
    switch(action.type){
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            //take all state and return it with new key/val pair
            //const post = action.payload.data
            //newState[post.id] = post;
            //return newState
            return {...state, [action.payload.data.id]: action.payload.data}
        default:
            return state;
    }
}