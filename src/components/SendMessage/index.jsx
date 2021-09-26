import React, { useState } from 'react';
import * as styles from './SendMessage.module.css'

export class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.textinput = React.createRef();
        this.state = {
            author: 'User',
            text: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newVal = this.textinput.current.value
        this.setState = this.props.message_
        this.setState({
            author: 'User',
            text: newVal
        });
        this.textinput.current.value = ""
    }

    render() {
        return (
            <div>
                <form className={styles.formMess} onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.textinput} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
/*
export const SendMessage = ({ message_ }) => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        message_({
            author: 'User',
            text: value
        });
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}
*/





