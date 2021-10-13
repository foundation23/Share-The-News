import d from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={d.Dialog + ' ' + d.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Dialog = (props) => {
    let DialogsElements =
        props.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);

    return <div className={d.DialogItem}>
        {DialogsElements}
    </div>
}
export default Dialog;