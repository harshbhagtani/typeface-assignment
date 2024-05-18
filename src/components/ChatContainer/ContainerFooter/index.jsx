import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { USER_NAME } from "../../../constants";
import { useAppStore } from "../../../store/useAppstore";

const generateUid = () => {
  return Date.now() + "" + Math.round(Math.random() * 1000);
};

const ContainerFooter = () => {
  const [text, setText] = useState("");

  const selectedChat = useAppStore((state) => state.selectedChat);
  const setMessages = useAppStore((state) => state.setMessages);

  useEffect(() => {
    setText("");
  }, [selectedChat.id]);

  const sendMessage = () => {
    const payload = {
      id: generateUid(),
      user_name: USER_NAME,
      content: text,
      chat_id: selectedChat?.id,
      time_stamp: Date.now()
    };
    setMessages(payload);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      height={"2rem"}
      padding={"1rem"}
      gap={"1rem"}
      justifyContent={"space-between"}
    >
      <IconButton>
        <FaPlus />
      </IconButton>
      <TextField size="small" fullWidth value={text} onChange={handleChange} />
      <IconButton onClick={sendMessage}>
        <IoSend />
      </IconButton>
    </Box>
  );
};

export default ContainerFooter;
