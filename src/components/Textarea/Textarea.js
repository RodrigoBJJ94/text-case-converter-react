import React from 'react';
import './Styles.css';

export default function Textarea({ text, setText }) {
    return (
        <textarea
            className="text"
            rows="14"
            cols="69"
            value={text}
            onChange={(e) => setText(e.target.value)}>
        </textarea>
    );
};
