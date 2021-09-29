import React, { useState } from 'react';
import * as styles from './SendMessage.module.css'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


export class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.textinput = React.createRef();
        this.state = {
            author: 'User',
            text: '',
            id: Math.random()
        }
    }

    componentDidMount() {
        this.textinput.current?.focus()
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newVal = this.textinput.current.value;
        this.setState = this.props.message_;
        this.setState({
            author: 'User',
            text: newVal,
            id: Math.random()
        });
        this.textinput.current.value = "";
        this.textinput.current?.focus();
    }

    render() {
        return (
            <div>

                <Form style={{ width: '500px', margin: '0 auto' }} onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" placeholder="Message" ref={this.textinput} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}







