import { create } from "zustand";
import { initialChatList, initialMessageList } from "../data";

export const useAppStore = create((set) => ({
  chatList: initialChatList,
  selectedChat: initialChatList[0],
  messages: initialMessageList,
  setSelectedChat: (chat) => set({ selectedChat: chat }),
  setMessages: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setChatList: (list) => set({ chatList: list })
}));
