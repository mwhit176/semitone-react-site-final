// Partially From: https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/create-a-response/

import Popup from 'reactjs-popup';
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import Chatbot from "react-chatbot-kit";
import { createChatBotMessage } from "react-chatbot-kit";
import "./styles/support.css"
import 'reactjs-popup/dist/index.css';
import 'react-chatbot-kit/build/main.css'

const Support = () => {

  const config = {
    initialMessages: [createChatBotMessage("Hello! How can I help you today?")]
  }

  return (
    <div>
      <Popup trigger={<button className="support-button"><p>Live Help</p></button>} position="top left">
        <div>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </Popup>
    </div>
  );
}
 
export default Support;