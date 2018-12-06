import React, { Component } from 'react';
import './index.css';
import ChatBot from 'react-simple-chatbot';
import avatar from '../../images/me.jpg'
import * as emailjs from 'emailjs-com';

class MyChatbot extends Component{

    constructor(props) {
		super(props);
        this.state = {
            name: '',
            senderEmail: '',
            message: '',
            chatlog: '',
        };
    }

    componentDidMount() {
        emailjs.init("user_AA1oAVm18jLRK3TxjvC8L");
        this.handleEnd = this.handleEnd.bind(this);    
    }
    
    
    handleEnd({ steps, values }) {
        this.setState(
            {senderEmail: values[values.length-3], message: values[values.length-2]},
            () => {
                var senderEmail = this.state.senderEmail;
                var message = this.state.message;
        
                emailjs.send('mailjet', 'chatbot', {senderEmail, message})
                .then(res => {
                    console.log('SUCCESS!', res.status, res.text);
                })
                .catch(err => console.error('Failed to send message. Error: ', err)) 
            }
        );  
    }

    render(){        
        return(
            <ChatBot floating={true} headerTitle={"BlomBot"} botDelay={100} handleEnd={this.handleEnd} botAvatar={avatar}
                steps={[
                    
                    {
                        id: '1',
                        message: 'Hi, I am Jespers very own chatbot, BlomBot! What is your name?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}, nice to meet you! What may I help you with today?',
                        trigger: '31',
                    },
                    {
                        id: '31',
                        options: [
                            { value: 1, label: 'Where do you live?', trigger: 'location' },
                            { value: 2, label: 'What do you do?', trigger: 'occupation' },
                            { value: 3, label: 'I would like to send a message to Jesper.', trigger: 'sendMessage' },
                        ],
                    }, 

                    {
                        id: '4',
                        message: 'What may I help you with today?',
                        trigger: 'hubQuestions',
                    },
                    {
                        id: 'hubQuestions',
                        options: [
                            { value: 1, label: 'Where do you live?', trigger: 'location' },
                            { value: 2, label: 'What do you do?', trigger: 'occupation' },
                            { value: 3, label: 'I would like to send a message to Jesper.', trigger: 'sendMessage' },
                        ],
                    },                 
                    {
                        id: 'location',
                        message: 'I am currently living in Umeå',
                        trigger: 'hubQuestions',
                    },
                    {
                        id: 'occupation',
                        message: 'I study Interaction Technology and Design at Umeå University',
                        trigger: 'hubQuestions',
                    },

                    {
                        id: 'sendMessage',
                        message: 'What is your email adress?',
                        trigger: 'sendMessageEmail',
                    },
                    {
                        id: 'sendMessageEmail',
                        user: true,
                        trigger: 'sendMessageMessage',
                    },

                    /*
                    {
                        id: '61',
                        validator: (value) => {
                            if (isNaN(value)) {
                            return 'value should be a number';
                            }
                            return true;
                        },
                        trigger: 7,
                    },
                    */

                    {
                        id: 'sendMessageMessage',
                        message: 'Ok, and what is your message?',
                        trigger: 'sendMessageWriting',
                    },
                    {
                        id: 'sendMessageWriting',
                        user: true,
                        trigger: 'sendMessageSent',
                    },
                    {
                        id: 'sendMessageSent',
                        message: 'Thank you! Your message has been sent!',
                        trigger: 'chatEnd'
                    },

                    /*
                    {
                        id: 'chatlogQuestion',
                        message: 'Would you like a transcript of our conversation sent to you?',
                        trigger: 'chatlogOptions',
                    },
                    {
                        id: 'chatlogOptions',
                        options: [
                            {value: 1, label: 'Yes', trigger: 'chatlogYes'},
                            {value: 2, label: 'No', trigger: 'chatEnd'}
                        ]
                    },
                    {
                        id: 'chatlogYes',
                        message: 'The transcript has been sent',
                        trigger: 'chatEnd',
                    },*/

                    {
                        id: 'chatEnd',
                        message: 'Thank you for your time. I hope you liked the bot!',
                        end: true,
                    }
                ]}
            />
        )
    }
}

export default MyChatbot;