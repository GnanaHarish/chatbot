import { configureStore } from '@reduxjs/toolkit'
import reducer from '../features/chat/chatSlice'

export default configureStore({
  reducer: {
    chat: reducer
  }
})