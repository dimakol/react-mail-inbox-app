import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import IMessage from "../interfaces/IMessage";

// Define a type for the slice state
interface MessagesState {
  inboxList: IMessage[];
}

// Define the initial state using that type
const initialState: MessagesState = {
  inboxList: [],
};

const messagesSlice = createSlice({
  name: "messages",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setInbox(
      state: MessagesState,
      action: PayloadAction<{ messages: IMessage[] }>
    ) {
      state.inboxList = action.payload.messages;
    },
    setMessageAsRead(
      state: MessagesState,
      action: PayloadAction<{ id: number }>
    ) {
      const messageIndex = state.inboxList.findIndex(
        (message) => message.id === action.payload.id
      );
      if (messageIndex !== -1) {
        state.inboxList[messageIndex].hasBeenRead = true;
      }
    },
    setMessageAsUnread(
      state: MessagesState,
      action: PayloadAction<{ id: number }>
    ) {
      const messageIndex = state.inboxList.findIndex(
        (message) => message.id === action.payload.id
      );
      if (messageIndex !== -1) {
        state.inboxList[messageIndex].hasBeenRead = false;
      }
    },
    deleteMessage(state: MessagesState, action: PayloadAction<{ id: number }>) {
      state.inboxList = state.inboxList.filter(
        (message) => message.id !== action.payload.id
      );
    },
  },
});

export const messagesActions = messagesSlice.actions;

export default messagesSlice;
