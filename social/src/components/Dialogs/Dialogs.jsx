import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}
let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Dasha' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' }
];

let messedgesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
];

let dialogsElements = dialogsData.map(d => <DialogsItem name={d.name} id={d.id} />);
// функция перебирает весь массив dialogsData и с помощью ф-ции map передает значения.
// d это элемент который записывает в себя значения массива, по этому вместо dialogsData [0].name
// пишем просто dialog.name

let messedgesElements = messedgesData.map(m => <Message message={m.message} />);

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messedgesElements}
            </div>
        </div>
    )
}

export default Dialogs;