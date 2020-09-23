import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",

    });
    const expandIt = () => {
        setExpand(true);
    };
    const normal = () => {
        setExpand(false);
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });

    };
    const InputEvent = (event) => {

        const { name, value } = event.target;


        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,

            }

        })

    }

    return (<>
        <div className='main_note' onDoubleClick={normal}>
            <form>
                {expand ?
                    <input type='text' placeholder='title' name='title' value={note.title} onChange={InputEvent} autoComplete="off" /> : null}
                <textarea rows="" column="" name='content' value={note.content} onChange={InputEvent} placeholder="Write a note" onClick={expandIt} />
                {expand ?
                    <Button onClick={addEvent}> <AddIcon className='plus_sign' /></Button> : null}


            </form>


        </div>
    </>);

};
export default CreateNote;