import React from "react";
import classes from './Dialogs.module.css';
import DialogsItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    // функция перебирает весь массив dialogsData и с помощью ф-ции map передает значения.
    // d это элемент который записывает в себя значения массива, по этому вместо dialogsData [0].name
    // пишем просто dialog.name
    let messagesElements = state.messages.map(m => <Message message={m.message} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {  // e - event
       let body = e.target.value;
       props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                         onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;