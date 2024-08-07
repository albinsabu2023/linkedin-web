import { forwardRef } from "react";
import "../styles/Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="postHeader">
        <Avatar src={photoUrl} />
        <div className="postInfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="postBody">
        <p>{message}</p>
      </div>
      <div className="inputOption">
        <InputOption Icon={ThumbUpIcon} title={"likes"} color={"gray"} />
        <InputOption Icon={ChatBubbleIcon} title={"comments"} color={"gray"} />
        <InputOption Icon={ShareIcon} title={"share"} color="gray" />
        <InputOption Icon={SendIcon} title={"send"} color="gray" />
      </div>
    </div>
  );
});

export default Post;
