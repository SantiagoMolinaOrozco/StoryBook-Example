import React from 'react'
import { Provider } from 'react-redux'
import store from '../lib/redux'

import InboxScreen from '../components/layouts/Inbox'

const TodoPage = () => (
  <Provider store={store}>
    <InboxScreen />
  </Provider>
)

export default TodoPage
