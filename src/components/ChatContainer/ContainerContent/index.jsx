import { Box } from "@mui/material";
import React from "react";
import { useAppStore } from "../../../store/useAppstore";
import MessageTile from "../MessageTile";

const ContainerContent = () => {
  const messages = useAppStore((state) => state.messages);
  const selectedChat = useAppStore((state) => state.selectedChat);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"0.5rem"}
      flexGrow={1}
      padding={"1rem"}
      sx={{ overflowY: "scroll" }}
    >
      {messages
        ?.filter((message) => message.chat_id === selectedChat.id)
        ?.map((message) => (
          <MessageTile message={message} />
        ))}
    </Box>
  );
};

export default ContainerContent;
