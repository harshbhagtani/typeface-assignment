import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useAppStore } from "../../../store/useAppstore";
import { formatDateTime, generateUid } from "../../../utils";

const ChatTile = ({ chat }) => {
  const chatList = useAppStore((state) => state.chatList);
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const selectedChat = useAppStore((state) => state.selectedChat);
  const setChatList = useAppStore((state) => state.setChatList);
  const messages = useAppStore((state) => state.messages);

  const getLatestMessage = () => {
    let list = messages?.filter((message) => message.chat_id === chat.id);
    if (!list?.length) return;
    return list[list.length - 1];
  };

  const latestMessage = getLatestMessage();

  const handleClick = () => {
    setSelectedChat(chat);
  };

  const deleteChat = (e) => {
    e.stopPropagation();
    const updatedChatList = chatList?.filter((item) => item.id !== chat.id);
    setChatList([...updatedChatList]);
    setSelectedChat(updatedChatList[0]);
  };

  return (
    <Box
      display={"flex"}
      gap={"1rem"}
      onClick={handleClick}
      borderRadius={"6px"}
      padding={"0.5rem"}
      sx={{
        "&:hover": { background: "#f5f5f5" },
        cursor: "pointer",
        background: chat.id === selectedChat.id ? "#f5f5f5" : ""
      }}
    >
      <Avatar />
      <Box flexGrow={"1"} width={"70%"}>
        <Typography
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
        >
          {chat.chat_name}
        </Typography>
        <Typography
          variant="body2"
          color={"gray"}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
        >
          {latestMessage?.content}
        </Typography>
        <Typography fontSize={10} textAlign={"right"} color={"gray"}>
          {latestMessage ? formatDateTime(latestMessage?.time_stamp) : ""}
        </Typography>
      </Box>
      <IconButton onClick={deleteChat}>
        <MdDelete fontSize={14} />
      </IconButton>
    </Box>
  );
};

export default ChatTile;
