import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialogs + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;

// раздел Messages, диалоги(имена). props.name имена с диалогов