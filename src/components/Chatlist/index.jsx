import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { useAppStore } from "../../store/useAppstore";
import ChatTile from "./ChatTile";
import { IoIosPersonAdd } from "react-icons/io";
import { generateUid } from "../../utils";

const Chatlist = () => {
  const chatList = useAppStore((state) => state.chatList);
  const setChatList = useAppStore((state) => state.setChatList);

  const createChat = () => {
    const payload = {
      id: generateUid(),
      chat_name: "Chat" + (chatList?.length + 1)
    };
    const updatedChatList = [...chatList];
    updatedChatList?.push(payload);

    setChatList(updatedChatList);
  };

  return (
    <Box
      height={"100%"}
      padding={"1rem"}
      width={"25rem"}
      boxSizing={"border-box"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      <Typography variant="h5">Chats</Typography>
      <Box display={"flex"} gap={"0.5rem"}>
        <TextField placeholder="Search chat..." size="small" fullWidth />
        <IconButton onClick={createChat}>
          <IoIosPersonAdd />
        </IconButton>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        flexGrow={"1"}
        sx={{ overflowY: "scroll" }}
      >
        {chatList?.map((chat) => (
          <ChatTile chat={chat} />
        ))}
      </Box>
    </Box>
  );
};

export default Chatlist;
