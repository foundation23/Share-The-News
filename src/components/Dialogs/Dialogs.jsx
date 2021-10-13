import React from 'react';
import d from './Dialogs.module.css';
import DialogContainer from "./DialogContainer";
import MessageContainer from "./MessageContainer";

const Dialogs = (props) => {

    return <div className={d.dialogs}>
        <DialogContainer/>
        <MessageContainer/>
    </div>
};

export default Dialogs;
