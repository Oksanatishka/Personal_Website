
const initialState = {
  show_menu: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case "SHOW_MENU": {
      console.log("SHOW MENU REDUCER")
      return {
        show_menu: true
      }
    }
  }

  return state;
}
