import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { USER_NAME } from "../../../constants";
import { formatDateTime } from "../../../utils";

const MessageTile = ({ message }) => {
  const sender = message.user_name !== USER_NAME;

  return (
    <Box display={"flex"} flexDirection={sender ? "row" : "row-reverse"}>
      <Box
        display={"flex"}
        flexDirection={sender ? "row" : "row-reverse"}
        gap={"1rem"}
        width={"20rem"}
      >
        <Avatar>{message?.user_name?.substr(0, 1)}</Avatar>
        <Box
          sx={{
            background: sender ? "#2196f3" : "#f5f5f5",
            color: sender ? "#fff" : "black"
          }}
          flexGrow={"1"}
          padding={"0.5rem"}
          borderRadius={"6px"}
        >
          <Typography sx={{ wordBreak: "break-all", fontWeight: "700" }}>
            {message.user_name}
          </Typography>
          <Typography sx={{ wordBreak: "break-all" }}>
            {message.content}
          </Typography>
          <Typography fontSize={12} textAlign={"right"}>
            {formatDateTime(message.time_stamp)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageTile;
