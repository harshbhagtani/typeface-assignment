import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useAppStore } from "../../../store/useAppstore";

const ChatTile = ({ chat }) => {
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const selectedChat = useAppStore((state) => state.selectedChat);

  const handleClick = () => {
    setSelectedChat(chat);
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
      <Box flexGrow={"1"}>
        <Typography>{chat.chat_name}</Typography>
        <Typography variant="body2" color={"gray"}>
          Latest message...
        </Typography>
      </Box>
      <IconButton>
        <FaEllipsisVertical fontSize={14} />
      </IconButton>
    </Box>
  );
};

export default ChatTile;
