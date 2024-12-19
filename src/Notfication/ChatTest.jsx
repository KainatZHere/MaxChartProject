import React from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  TypingIndicator,
  MessageSeparator,
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  AvatarGroup,
  Button,
} from "@chatscope/chat-ui-kit-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite } from "@fortawesome/free-solid-svg-icons";

const ChatTest = () => {
  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        <MainContainer>
          {/* <Avatar
            size="xs"
            status="dnd"
            name="Zoe"
            src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
          /> */}
          {/* <ChatContainer>
            <div as="ConversationHeader">My custom conversation header</div>
          </ChatContainer>
          <MessageInput
            placeholder="Type message here"
            style={{ height: "30px" }}
          />
          <button style={{ height: "20px" }}>Custom button</button>
          <Button
            disabled
            border
            style={{ height: "50px", width: "230px" }}
            icon={<FontAwesomeIcon icon={faSatellite} />}
            labelPosition="left"
          >
            Label on the left
          </Button>
          <AvatarGroup size="md" hoverToFront={true} activeIndex={3}>
            <Avatar
              name="Eliot"
              src="https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg"
            />
            <Avatar
              name="Akane"
              src="https://chatscope.io/storybook/react/assets/akane-MXhWvx63.svg"
            />
            <Avatar
              name="Joe"
              src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
            />
            <Avatar
              name="Zoe"
              src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
            />
          </AvatarGroup> */}
          <ChatContainer
            style={{
              height: "90vh",
            }}
          >
            <ConversationHeader>
              <Avatar
                name="Emily"
                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
              />
              <ConversationHeader.Content
                info="Active 10 mins ago"
                userName="Emily"
              />
              <ConversationHeader.Actions>
                <VoiceCallButton />
                <VideoCallButton />
                <InfoButton />
              </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList
              typingIndicator={<TypingIndicator content="Emily is typing" />}
            >
              <MessageSeparator content="Saturday, 30 November 2019" />
              <Message
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "single",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              >
                <Avatar
                  name="Emily"
                  src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                />
                <Message.Header sentTime="9:45 am" />
              </Message>
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "single",
                  sener: "Oliver",
                  sentTime: "15 mins ago",
                }}
              >
                <Message.Header sentTime="9:50 am" />
              </Message>
              <Message
                avatarSpacer
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "first",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              >
                <Message.Header sentTime="9:50 am" />
              </Message>
              <Message
                avatarSpacer
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "normal",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "normal",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "last",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              >
                <Avatar
                  name="Emily"
                  src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                />
              </Message>
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "first",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "normal",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "normal",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "last",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "first",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "last",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              >
                <Avatar
                  name="Emily"
                  src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                />
              </Message>
              <MessageSeparator content="Saturday, 31 November 2019" />
              <Message
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "single",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              >
                <Avatar
                  name="Emily"
                  src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                />
              </Message>
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "single",
                  sender: "Oliver",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "first",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "normal",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "normal",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "last",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              >
                <Avatar
                  name="Emily"
                  src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                />
              </Message>
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "first",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "normal",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "normal",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "outgoing",
                  message: "Hello my friend",
                  position: "last",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "first",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              />
              <Message
                model={{
                  direction: "incoming",
                  message: "Hello my friend",
                  position: "last",
                  sender: "Emily",
                  sentTime: "15 mins ago",
                }}
              >
                <Avatar
                  name="Emily"
                  src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                />
                <Message.Footer sender="Emily" sentTime="just now" />
                <Message.Header sender="Emily" sentTime="just now" />
              </Message>
            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
};

export default ChatTest;
