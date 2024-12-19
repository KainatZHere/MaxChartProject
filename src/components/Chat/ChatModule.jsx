import {
  Box,
  Chip,
  Divider,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Avatar from "@mui/material/Avatar";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import dayjs from "dayjs";
import EmojiPicker from "emoji-picker-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SendIcon from "@mui/icons-material/Send";
import { nanoid } from "nanoid";
import { Close } from "@mui/icons-material";

const ChatModule = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState([]);
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const loginUserId = 90249;
  const chatList = [
    {
      chatId: 100228,
      conversationType: "Single",
      name: "Saqlain Mushtaq",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 133342,
        messageContent: "salam",
        createdDate: "2024-12-10T11:22:07.5550976+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90291,
      createdDate: "2024-12-05T03:09:01.6066667+00:00",
      deleted: false,
    },
    {
      chatId: 100618,
      conversationType: "Single",
      name: "Tayiba Aly",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 133337,
        messageContent: "Hi!",
        createdDate: "2024-12-10T11:19:41.9758439+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90066,
      createdDate: "2024-12-10T11:19:38.9848375+00:00",
      deleted: false,
    },
    {
      chatId: 100600,
      conversationType: "Single",
      name: "Zeeshan Khalid",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 133335,
        messageContent: "Hi!",
        createdDate: "2024-12-10T11:09:41.2450659+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90085,
      createdDate: "2024-12-10T05:17:51.7297021+00:00",
      deleted: false,
    },
    {
      chatId: 100571,
      conversationType: "Group",
      name: "test group",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 133284,
        messageContent: "\uD83D\uDC4D",
        createdDate: "2024-12-10T07:31:27.5070276+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: null,
      createdDate: "2024-12-09T12:40:58.3232294+00:00",
      deleted: false,
    },
    {
      chatId: 100606,
      conversationType: "Group",
      name: "hhhh",
      picPath: null,
      unreadCount: 0,
      lastMessage: null,
      isFav: null,
      userOnline: false,
      otherUserId: null,
      createdDate: "2024-12-10T06:13:02.1862141+00:00",
      deleted: false,
    },
    {
      chatId: 100588,
      conversationType: "Single",
      name: "Umair Abdullah",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 133154,
        messageContent: "Hi!",
        createdDate: "2024-12-10T05:28:54.097139+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90103,
      createdDate: "2024-12-09T14:16:08.5214135+00:00",
      deleted: false,
    },
    {
      chatId: 100289,
      conversationType: "Single",
      name: "Hassan Gul",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 133133,
        messageContent: "Hi!",
        createdDate: "2024-12-10T05:12:59.7146476+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90285,
      createdDate: "2024-12-05T05:19:22.1166667+00:00",
      deleted: false,
    },
    {
      chatId: 100587,
      conversationType: "Single",
      name: "Kiran Nawaz",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 133129,
        messageContent: "Hi!",
        createdDate: "2024-12-10T05:10:59.8204172+00:00",
      },
      isFav: null,
      userOnline: true,
      otherUserId: 90110,
      createdDate: "2024-12-09T14:14:21.6434341+00:00",
      deleted: false,
    },
    {
      chatId: 100136,
      conversationType: "Single",
      name: "Faseeh Haider",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 132942,
        messageContent: "Hi there",
        createdDate: "2024-12-10T04:18:43.3964349+00:00",
      },
      isFav: null,
      userOnline: true,
      otherUserId: 90056,
      createdDate: "2024-12-04T23:31:09.3933333+00:00",
      deleted: false,
    },
    {
      chatId: 100432,
      conversationType: "Single",
      name: "sundas abbasi",
      picPath: "/Attachments/97f75d25-cba5-41c2-b65d-c8f19911964e.JPG",
      unreadCount: 0,
      lastMessage: {
        messageId: 132879,
        messageContent: "hi",
        createdDate: "2024-12-10T03:54:15.213122+00:00",
      },
      isFav: null,
      userOnline: true,
      otherUserId: 90049,
      createdDate: "2024-12-06T01:12:53.9433333+00:00",
      deleted: false,
    },
    {
      chatId: 100584,
      conversationType: "Single",
      name: "Irfana Saleem",
      picPath: "/Attachments/0f195f17-3c0b-4249-8c39-12b4e1ea8182.jpg",
      unreadCount: 0,
      lastMessage: {
        messageId: 132861,
        messageContent: "test Evening",
        createdDate: "2024-12-09T14:28:53.2697465+00:00",
      },
      isFav: null,
      userOnline: true,
      otherUserId: 90076,
      createdDate: "2024-12-09T13:35:55.7493468+00:00",
      deleted: false,
    },
    {
      chatId: 100586,
      conversationType: "Single",
      name: "M Hasan",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 132849,
        messageContent: "Hi!",
        createdDate: "2024-12-09T14:03:20.8928654+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90057,
      createdDate: "2024-12-09T14:03:17.2412847+00:00",
      deleted: false,
    },
    {
      chatId: 100449,
      conversationType: "Single",
      name: "Muhammad Hamza Sabir",
      picPath: "/Attachments/468ef8fa-9f2c-4636-859b-adfb2175990c.jpg",
      unreadCount: 0,
      lastMessage: {
        messageId: 132818,
        messageContent: "Hi!",
        createdDate: "2024-12-09T13:02:01.397761+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90290,
      createdDate: "2024-12-06T02:42:38.6866667+00:00",
      deleted: false,
    },
    {
      chatId: 100267,
      conversationType: "Single",
      name: "Rimsha Yaqoob",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 132446,
        messageContent: "Walikum Salam Sir",
        createdDate: "2024-12-09T03:51:16.67+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90306,
      createdDate: "2024-12-05T03:35:44.25+00:00",
      deleted: false,
    },
    {
      chatId: 100434,
      conversationType: "Single",
      name: "Suleman Ahmad Ali",
      picPath: "/Attachments/9528f70a-d931-4429-ad70-349e52319480.jpg",
      unreadCount: 0,
      lastMessage: {
        messageId: 132437,
        messageContent: "Online",
        createdDate: "2024-12-07T08:23:50.6333333+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 60044,
      createdDate: "2024-12-06T01:38:22.0633333+00:00",
      deleted: false,
    },
    {
      chatId: 100274,
      conversationType: "Single",
      name: "Kainat Zahra",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 132422,
        messageContent: "testing saturday",
        createdDate: "2024-12-07T06:05:30.37+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90292,
      createdDate: "2024-12-05T03:40:23.57+00:00",
      deleted: false,
    },
    {
      chatId: 100494,
      conversationType: "Group",
      name: "TestGroup",
      picPath: null,
      unreadCount: 0,
      lastMessage: null,
      isFav: null,
      userOnline: false,
      otherUserId: null,
      createdDate: "2024-12-06T22:29:44.03+00:00",
      deleted: false,
    },
    {
      chatId: 100215,
      conversationType: "Single",
      name: "Kashif Khan",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 132215,
        messageContent: "test",
        createdDate: "2024-12-06T10:01:53.0066667+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90305,
      createdDate: "2024-12-05T02:58:33.5466667+00:00",
      deleted: false,
    },
    {
      chatId: 100349,
      conversationType: "Single",
      name: "Muhammad Kamran",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 132145,
        messageContent: "test11",
        createdDate: "2024-12-06T09:06:01.9033333+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90323,
      createdDate: "2024-12-05T19:53:41.1666667+00:00",
      deleted: false,
    },
    {
      chatId: 100276,
      conversationType: "Single",
      name: "Javeria Bilal",
      picPath: null,
      unreadCount: 0,
      lastMessage: {
        messageId: 131639,
        messageContent: "Ws  Sir ok",
        createdDate: "2024-12-05T03:44:02.7733333+00:00",
      },
      isFav: null,
      userOnline: false,
      otherUserId: 90296,
      createdDate: "2024-12-05T03:40:38.5866667+00:00",
      deleted: false,
    },
  ];
  //region Right Side ChatBox
  const [messages, setMessages] = useState([
    {
      messageId: 131592,
      senderId: 90291,
      senderProfilePic: null,
      senderName: "Saqlain Mushtaq",
      messageContent: "AoA",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-05T03:09:23.7866667+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 131593,
      senderId: 90291,
      senderProfilePic: null,
      senderName: "Saqlain Mushtaq",
      messageContent: "kia hal hay boss",
      attachments: [],
      replyMessage: "Alhamdulilah thekk",
      createdDate: "2024-12-05T03:09:27.5333333+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 131594,
      senderId: 90249,
      senderProfilePic:
        "/Attachments/584b5bfb-2a75-4d1c-8691-b74f494b4483.JPEG",
      senderName: "Sameer Abbas",
      messageContent: "W.slam Sir",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-05T03:09:28.08+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 131598,
      senderId: 90249,
      senderProfilePic:
        "/Attachments/584b5bfb-2a75-4d1c-8691-b74f494b4483.JPEG",
      senderName: "Sameer Abbas",
      messageContent: "Allhamdullilah Sir",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-05T03:10:45.97+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 132438,
      senderId: 90249,
      senderProfilePic:
        "/Attachments/584b5bfb-2a75-4d1c-8691-b74f494b4483.JPEG",
      senderName: "Sameer Abbas",
      messageContent: "test again",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-07T08:25:32.97+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 133332,
      senderId: 90291,
      senderProfilePic: null,
      senderName: "Saqlain Mushtaq",
      messageContent: "ok again",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-10T11:06:38.9466707+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 133333,
      senderId: 90291,
      senderProfilePic: null,
      senderName: "Saqlain Mushtaq",
      messageContent: "hello boss",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-10T11:07:05.9766786+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 133334,
      senderId: 90291,
      senderProfilePic: null,
      senderName: "Saqlain Mushtaq",
      messageContent: "test 11232",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-10T11:07:29.5189956+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 133338,
      senderId: 90291,
      senderProfilePic: null,
      senderName: "Saqlain Mushtaq",
      messageContent: "test 10",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-10T11:19:46.3291831+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 133339,
      senderId: 90291,
      senderProfilePic: null,
      senderName: "Saqlain Mushtaq",
      messageContent: "shahid test",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-10T11:20:21.99453+00:00",
      modifiedDate: null,
      seenUsers: [
        {
          userId: 90291,
          profilePicPath: null,
          name: "Saqlain Mushtaq",
        },
      ],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 133341,
      senderId: 90291,
      senderProfilePic: null,
      senderName: "Saqlain Mushtaq",
      messageContent: "hi",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-10T11:21:37.0130823+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
    {
      messageId: 133342,
      senderId: 90291,
      senderProfilePic: null,
      senderName: "Saqlain Mushtaq",
      messageContent: "salam",
      attachments: [],
      replyMessage: null,
      createdDate: "2024-12-10T11:22:07.5550976+00:00",
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    },
  ]);

  const handleEmojiPickerVisibility = () => {
    setEmojiPickerVisible((prev) => !prev);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFile((prevFile) => [...prevFile, ...files]);
  };

  const handleDelete = (fileName) => {
    setSelectedFile((prevfile) =>
      prevfile?.filter((file) => file?.name !== fileName)
    );
  };

  const handleEmojiSelection = (emojiObject) => {
    setSelectedEmoji((prevemoji) => [...prevemoji, emojiObject?.emoji]);
    setInputValue((prevValue) => prevValue + emojiObject?.emoji);
  };

  const handleSend = () => {
    setEmojiPickerVisible(false);
    setInputValue("");
    const newMessage = {
      messageId: Date.now(),
      senderId: 90249,
      senderProfilePic: null,
      senderName: "Sameer Abbas",
      messageContent: inputValue,
      attachments: [],
      replyMessage: null,
      createdDate: new Date().toISOString(),
      modifiedDate: null,
      seenUsers: [],
      reactions: [],
      deleted: false,
    };
    setMessages((prev) => [...prev, newMessage]);

    console.log(newMessage, "newobj");
  };

  return (
    <>
      <Grid2 container>
        {/* Left Grid */}
        <Grid2 size={3}>
          {/* Search Box */}
          <Box
            sx={{
              height: "6vh",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              border: "1px solid #d3d3d3",
              // width: "100%",
            }}
          >
            <TextField
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                width: "40vh",
                height: "35px", // Adjust the height as needed
                bgcolor: "#ffffff",
                color: "#6b7175",
                "& .MuiInputBase-root": {
                  height: "100%",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "40px",
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "#000" }} />
                    </InputAdornment>
                  ),
                },
              }}
              placeholder="Search People,Groups..."
            />
          </Box>
          {/* selected Option */}
          <Box
            sx={{
              bgcolor: "#e4edf4",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              p: 1,
            }}
          >
            {[
              { lable: "Chats", icon: <QuestionAnswerIcon /> },
              { lable: "Calls", icon: <VideoCallIcon /> },
              { lable: "Contacts", icon: <PermContactCalendarIcon /> },
            ].map((items, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveItem(items?.lable)}
                >
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      color:
                        items?.lable === activeItem ? "#085b93" : "#a9a9a9",
                    }}
                  >
                    {items.icon}
                  </Box>
                  <Typography
                    sx={{
                      color:
                        items?.lable === activeItem ? "#085b93" : "#a9a9a9",
                      mt: "5px",
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    {items.lable}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          {/* Third Box */}
          <Box
            sx={{
              bgcolor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {["new Chat", "new Group"].map((items, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    m: "2px",
                  }}
                  onClick={() => console.log("button is clicked")}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      color: "#000",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <AddCircleOutlineOutlinedIcon
                      style={{ fontSize: "16px" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "12px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                    }}
                  >
                    {items}
                  </Typography>
                </Box>
              );
            })}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                m: "2px",
              }}
              onClick={() => console.log("button is clicked")}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Recent Chats
              </Typography>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ArrowDropDownOutlinedIcon style={{ fontSize: "16px" }} />
              </Box>
            </Box>
          </Box>
          {/* Contact Box */}
          <Box
            sx={{
              mt: "20px",
              height: "80vh",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "3px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            {chatList.map((items) => {
              return (
                <Box
                  key={items.chatId}
                  sx={{
                    display: "flex",
                    height: "50px",
                    gap: 2,
                    p: 1,
                    borderBottom: "1px solid #efefef",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#D3D3D3",
                    },
                    bgcolor:
                      selectedContact === items?.chatId ? "#D3D3D3" : "#ffffff",
                  }}
                  onClick={() => setSelectedContact(items.chatId)}
                >
                  <Avatar alt={items.name.charAt(0).toUpperCase()}>
                    {items.picPath}
                  </Avatar>
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      sx={{ fontSize: "14px", color: "#000", fontWeight: 600 }}
                    >
                      {items.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#a9a9a9",
                        fontWeight: 500,
                      }}
                    >
                      {items.lastMessage === null
                        ? ""
                        : items.lastMessage.messageContent}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "10px",
                        color: "#a9a9a9",
                        fontWeight: 600,
                      }}
                    >
                      {items.createdDate
                        ? dayjs(items.createdDate).format("MM/DD/YYYY")
                        : ""}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        color: "#a9a9a9",
                        fontWeight: 500,
                      }}
                    >
                      {items.createdDate
                        ? dayjs(items.createdDate).format("hh: mm A")
                        : ""}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid2>

        {/* Right Grid */}
        <Grid2 size={9}>
          <Box sx={{ overflow: "hidden", height: "100%" }}>
            {/* Header */}
            <Box
              sx={{
                bgcolor: "#e4edf4",
                p: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Header Left Side */}
              <Box sx={{ display: "flex", gap: "14px" }}>
                <Avatar
                  sx={{
                    height: "34px",
                    width: "34px",
                    bgcolor: "pink",
                    color: "red",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  S
                </Avatar>
                <Box>
                  <Typography sx={{ color: "#000", fontSize: "14px" }}>
                    Saqlain Mushtaq
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        bgcolor: "#a9a9a9",
                        borderRadius: "40px",
                      }}
                    />
                    <Typography sx={{ color: "#a9a9a9", fontSize: "11px" }}>
                      Offline
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Header Right Side */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <SearchIcon style={{ color: "grey" }} />
                <IconButton
                  sx={{
                    bgcolor: "#085b93",
                    width: "30px",
                    height: "30px",
                    "&:hover": {
                      bgcolor: "#085b93",
                    },
                  }}
                >
                  <PhotoLibraryIcon
                    style={{ color: "white", fontSize: "18px" }}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "#085b93",
                    width: "30px",
                    height: "30px",
                    "&:hover": {
                      bgcolor: "#085b93",
                    },
                  }}
                >
                  <VideocamOutlinedIcon
                    style={{ color: "white", fontSize: "20px" }}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "#085b93",
                    width: "30px",
                    height: "30px",
                    "&:hover": {
                      bgcolor: "#085b93",
                    },
                  }}
                >
                  <PhoneOutlinedIcon
                    style={{ color: "white", fontSize: "20px" }}
                  />
                </IconButton>
              </Box>
            </Box>
            {/*Display  Chat BOX */}
            <Box
              sx={{
                height: "82vh",
                bgcolor: "#edf8f9",
                p: "12px",
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  width: "3px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#888",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              {messages.map((items, index) => {
                return (
                  <Box key={index}>
                    {" "}
                    <Divider>
                      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                        {items?.createdDate
                          ? dayjs(items?.createdDate).format("MM/DD/YYYY")
                          : ""}
                      </Typography>
                    </Divider>
                    {items?.senderId === loginUserId ? (
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            display: "flex",
                            color: "grey",
                            justifyContent: "flex-end",
                            fontWeight: "bold",
                          }}
                        >
                          {items?.createdDate
                            ? dayjs(items?.createdDate).format("hh:mm: A")
                            : ""}
                        </Typography>
                        <Box
                          sx={{
                            alignItems: "center",
                            mt: "3px",
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Typography
                            sx={{
                              borderRadius: "10px 2px 2px 10px",
                              fontSize: "12px",
                              color: "#000",
                              bgcolor: "#d3d3d3",
                              fontWeight: 550,
                              p: 1,
                            }}
                          >
                            {items?.messageContent}
                          </Typography>
                        </Box>
                      </Box>
                    ) : (
                      " "
                    )}
                    {items?.senderId === 90291 ? (
                      <Box sx={{ display: "flex", gap: "5px" }}>
                        <Avatar sx={{ bgcolor: "#085b93" }}>
                          {items?.senderProfilePic}
                        </Avatar>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "10px",
                              display: "flex",
                              color: "grey",
                              fontWeight: "bold",
                            }}
                          >
                            {items?.senderName},{" "}
                            {items?.createdDate
                              ? dayjs(items?.createdDate).format("hh:mm: A")
                              : ""}
                          </Typography>
                          <Box
                            sx={{
                              alignItems: "center",
                              mt: "3px",
                              display: "flex",
                            }}
                          >
                            <Typography
                              sx={{
                                borderRadius: "2px 10px 10px 2px",
                                fontSize: "12px",
                                color: "#ffffff",
                                bgcolor: "#085b93",
                                p: 1,
                              }}
                            >
                              {items?.messageContent}
                            </Typography>
                          </Box>
                        </Box>
                        <IconButton
                          sx={{
                            m: 0,
                            p: 0,
                            "&:hover": {
                              bgcolor: "transparent",
                            },
                          }}
                        >
                          <MoodOutlinedIcon style={{ fontSize: "15px" }} />
                        </IconButton>
                      </Box>
                    ) : (
                      ""
                    )}
                  </Box>
                );
              })}
            </Box>
            {/* Box for Message Type */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                justifyContent: "center",
              }}
            >
              <TextField
                variant="outlined"
                sx={{
                  width: "80%",
                  bgcolor: "#e4edf4",
                  borderRadius: "20px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    border: "none", // Remove the border by default
                    "&:hover": {
                      borderColor: "none ", // Show green border on hover
                    },
                    "&.Mui-focused": {
                      borderColor: "none", // Show blue border when focused
                    },
                  },
                }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  selectedFile?.length > 0 ||
                  selectedEmoji?.length > 0 ||
                  inputValue?.length > 0
                    ? ""
                    : "Type a message"
                }
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={handleEmojiPickerVisibility}>
                          {isEmojiPickerVisible ? (
                            <KeyboardArrowDownIcon
                              style={{ color: "#085b93", fontSize: "20px" }}
                            />
                          ) : (
                            <MoodOutlinedIcon
                              style={{ color: "#085b93", fontSize: "20px" }}
                            />
                          )}
                        </IconButton>
                        {selectedFile && (
                          <div style={{ display: "flex", gap: 3 }}>
                            {selectedFile?.map((file) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  borderRadius: "20px",
                                  color: "#ffffff",
                                  bgcolor: "#085b93",
                                  height: "20px",
                                  p: 1,
                                }}
                              >
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "11px", fontWeight: 600 }}
                                  >
                                    {file?.name}
                                  </Typography>
                                  <Typography sx={{ fontSize: "10px" }}>
                                    {(file?.size / 1024).toFixed(3)} KB
                                  </Typography>
                                </Box>
                                <IconButton
                                  sx={{
                                    ml: "10px",
                                    width: "16px",
                                    height: "16px",
                                    backgroundColor: "white",
                                    color: "#085b93",
                                    "&:hover": {
                                      backgroundColor: "white",
                                      color: "#085b93",
                                    },
                                  }}
                                  onClick={() => handleDelete(file?.name)}
                                >
                                  <Close
                                    style={{
                                      fontSize: "16px",
                                    }}
                                  />
                                </IconButton>
                              </Box>
                              // <Chip
                              //   onDelete={() => handleDelete(file?.name)}
                              //   label={file?.size}
                              //   sx={{
                              //     marginLeft: "5px",
                              //     bgcolor: "#085b93",
                              //     color: "#ffffff",
                              //   }}
                              // />
                            ))}
                          </div>
                        )}
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{
                            bgcolor: "#b6d5ed",
                            width: "26px",
                            height: "26px",
                            mr: "3%",
                            "&:hover": {
                              bgcolor: "#b6d5ed",
                            },
                          }}
                        >
                          <label htmlFor="file1">
                            <AttachFileOutlinedIcon
                              style={{
                                color: "#085b93",
                                fontSize: "16px",
                              }}
                            />
                          </label>
                        </IconButton>
                        {inputValue?.length > 0 ||
                        selectedEmoji?.length > 0 ||
                        selectedFile?.length > 0 ? (
                          <IconButton onClick={handleSend}>
                            {" "}
                            <SendIcon
                              style={{ color: "#085b93", fontSize: "24px" }}
                            />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <MicOutlinedIcon
                              style={{ color: "#085b93", fontSize: "24px" }}
                            />
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Box>

          <input
            id="file1"
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {isEmojiPickerVisible && (
            <div
              style={{
                position: "absolute",
                top: `48%`, // Position the picker just above the button
                left: "45%",
                transform: "translateX(-50%)", // Center the picker horizontally
                zIndex: 1000,
              }}
            >
              <EmojiPicker
                onEmojiClick={handleEmojiSelection}
                height={400}
                width={400}
              />
            </div>
          )}
        </Grid2>
      </Grid2>
    </>
  );
};

export default ChatModule;
