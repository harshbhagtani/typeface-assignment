import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useAppStore } from "../../../store/useAppstore";

const ContainerHeader = () => {
  const selectedChat = useAppStore((state) => state.selectedChat);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      height={"2rem"}
      padding={"1rem"}
      sx={{ background: "#f5f5f5" }}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
        <Avatar />
        <Typography>{selectedChat?.chat_name}</Typography>
      </Box>

      <IconButton>
        <FaEllipsisVertical fontSize={14} />
      </IconButton>
    </Box>
  );
};

export default ContainerHeader;
