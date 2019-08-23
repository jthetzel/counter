import { configureStore } from 'redux-starter-kit'

import counterDuck from '../redux/counterDuck'

const store = configureStore({
  reducer: {
    counter: counterDuck.reducer
  }
})

export default store

