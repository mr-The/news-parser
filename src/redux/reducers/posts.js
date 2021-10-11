const initialState = {}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      const site = action.payload.site
      return {
        ...state,
        [site]: action.payload.newData,
        uploading: action.payload.uploading || false,
      }
    case 'SET_UPLOADING':
      return {
        ...state,
        uploading: action.payload,
      }
    default:
      return state
  }
}

export default posts
