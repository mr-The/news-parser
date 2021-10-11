const initialState = {
  sites: [],
  source: '',
}

const sources = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SOURCES':
      return {
        ...state,
        ...action.payload,
      }
    case 'CHANGE_SOURCE':
      return {
        ...state,
        source: action.payload,
      }
    default:
      return state
  }
}

export default sources
