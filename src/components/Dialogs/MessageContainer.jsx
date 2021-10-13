import React from "react";
import {addMessageActionCreator} from "../../Redux/DialogPageReducer";
import Message from "./Message";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.DialogPage.messages,
        newMessageText: state.DialogPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        },
    }
}
const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;