import { combineReducers } from 'redux'

import sources from './sources'
import posts from './posts'

const rootReducer = combineReducers({ sources, posts })

export default rootReducer
