import d from "./Message.module.css";
import React from "react";
import MyNewMessageForm from "../../forms/MyNewMessageForm";

const MessagesItem = (props) => {
    return <div className={d.message}>{props.message}</div>
}

const Message = (props) => {

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    };

    let MessagesElements = props.messages.map(m => <MessagesItem message={m.message} key={m.id}/>);

    return <div className={d.message}>
        <div className={d.MessageSomeoneLine}>
            {MessagesElements}
        </div>
        <div className={d.MessageMyLine}>
            <MyNewMessageForm addNewMessage={addNewMessage} />
        </div>
    </div>
}


export default Message;