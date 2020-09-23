import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { PinDropSharp } from '@material-ui/icons';


const Note = (props) => {

    const deleteNote = () => {

        props.deleteItem(props.id);
    }
    return (
        <>
            <div className='note'>
                <h1> {props.title}</h1><br />
                <p> {props.content}</p>
                <Button className='btn' onClick={deleteNote}>
                    <DeleteIcon className='deleteIcon' />
                </Button>

            </div>
        </>);

};
export default Note;