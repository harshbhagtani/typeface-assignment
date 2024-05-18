import { Box } from "@mui/material";
import React from "react";
import ContainerContent from "./ContainerContent";
import ContainerFooter from "./ContainerFooter";
import ContainerHeader from "./ContainerHeader";

const ChatContainer = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} flexGrow={"1"}>
      <ContainerHeader />
      <ContainerContent />
      <ContainerFooter />
    </Box>
  );
};

export default ChatContainer;
