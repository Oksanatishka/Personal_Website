
import { UPDATE_LOCATION } from 'redux-simple-router'

const initialState = {
  curr_path: "",
  prev_path: "",
  curr_idx: null,
  prev_idx: null,
  backward: null
}

var sitemap = [
  '/',
  '/portfolio',
  '/about',
  '/contact'
]

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case UPDATE_LOCATION: {
      console.log("UPDATE_LOCATION")
      console.log(action)
      return {
        prev_path: state.curr_path,
        curr_path: action.payload.pathname,
        prev_idx: sitemap.indexOf(state.curr_path),
        curr_idx: sitemap.indexOf(action.payload.pathname),
        backward: sitemap.indexOf(state.curr_path) < sitemap.indexOf(action.payload.pathname)
      };
    }

  }

  return state;
}
