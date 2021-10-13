import React from "react";
import Dialog from "./Dialog";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.DialogPage.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;