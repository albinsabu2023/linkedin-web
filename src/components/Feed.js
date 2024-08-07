import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Post from "./Post";
import { db } from "../backend/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import FlipMove from "react-flip-move";
function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "adf",
      description: "dsfgsdf",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feedInputContainer">
        <div className="feedInput">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="inputOption">
          <InputOption Icon={ImageIcon} title={"images"} color="lightblue" />
          <InputOption Icon={VideoChatIcon} title={"videos"} color="orange" />
          <InputOption Icon={CalendarTodayIcon} title={"event"} color="gray" />
          <InputOption
            Icon={NewspaperIcon}
            title={"article"}
            color="lightgreen"
          />
        </div>
      </div>

      <div className="feedPost">
        <FlipMove>
          {posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;
