import React from "react";
import Chatlist from "../Chatlist";
import ChatContainer from "../ChatContainer";
import { Box, Button, Typography } from "@mui/material";

const ChatLayout = () => {
  return (
    <Box display={"flex"} height={"100vh"}>
      <Chatlist />
      <ChatContainer />
    </Box>
  );
};

export default ChatLayout;
