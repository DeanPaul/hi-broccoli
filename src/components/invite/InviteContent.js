import React from 'react'

export default function InviteContent(props) {
    return (<div>
                <div>{props.word_00}</div>
                <div>{props.word_01}</div>
                <div>{props.word_10}</div>
                <button onClick={props.button.handleClick}>{props.button.display}</button>
            </div>);
}
