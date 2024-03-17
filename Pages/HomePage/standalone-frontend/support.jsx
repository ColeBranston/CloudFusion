import React, { useEffect, useState } from 'react';
import { IoIosChatboxes } from "react-icons/io";

const Chatbox = () => {
    const [messages, setMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim() === '') return;

        // Add user message
        setMessages(prevMessages => [
            ...prevMessages,
            { name: "User", message: inputValue }
        ]);

        // Perform fetch operation
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: inputValue }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            // Add AI response
            setMessages(prevMessages => [
                ...prevMessages,
                { name: "Sam", message: data.answer }
            ]);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        setInputValue('');
    };

    return (
        <div className="flex flex-row-reverse bg-transparent">
            <div className="flex p-4">
                <div className="">
                    <div className={`chatbox__support chatbox rounded-2xl overflow-hidden w-[23rem] h-[30rem] shadow-xl ${isOpen ? 'block' : 'opacity-0'}`}>
                        {/* Chatbox Header */}
                        <div className="flex justify-between p-4 bg-gradient-to-r from-[#fdfcf0] to-[#bfb749]">
                            <div className="px-4">
                                <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
                            </div>
                            <div className="chatbox__content--header">
                                <h4 className="text-lg font-semibold">Chat support</h4>
                                <p className="chatbox__description--header text-sm text-gray-500">Hi. My name is Ganesh. How can I help you?</p>
                            </div>
                        </div>

                        {/* Chatbox Messages */}
                        <div className="chatbox__messages h-[65%] overflow-y-auto bg-white">
                            {messages.map((msg, index) => (
                                <div key={index} className={`messages__item ${msg.name === "Sam" ? 'messages__item--visitor p-1 m-4 bg-[#bfb749] rounded-tr-xl rounded-tl-xl rounded-bl-xl ml-[50%] overflow-auto' : 'messages__item--operator p-1 m-4 bg-gray-300 rounded-tr-xl rounded-tl-xl rounded-br-xl mr-[50%] overflow-auto'}`}>
                                    {msg.message}
                                </div>
                            ))}
                        </div>

                        {/* Chatbox Footer */}
                        <div className="chatbox__footer px-5 py-2 bg-gradient-to-r from-[#bfb749] to-[#fdfcf0] flex justify-center items-center">
                            <input
                                className='h-full w-full p-2 rounded-2xl'
                                type="text"
                                placeholder="Write a message..."
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                            />
                            <button
                                className="chatbox__send--footer send__button p-4 items-center text-[#bfb749] font-semibold"
                                onClick={handleSend}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                    {/* Chatbox Button */}
                    <div className="chatbox__button pt-7">
                        <button
                            className='text-6xl text-[#bfb749] shadow-xl rounded-3xl p-2 float-right bg-white'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <IoIosChatboxes/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Box = () => {
    return (
        <Chatbox />
    );
};

export default Box;
