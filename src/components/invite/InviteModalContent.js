import React from 'react'
import './InviteModalContent.css';

export default function InviteModalContent(props) {
    const {button, content, title} = props;
    return (<div className='invite-modal'>
        <span>{title}</span>
        <div className='invite-modal-content'>
            {
                content.inputs && content.inputs.map(input => (
                    <div className={'invite-input'}>
                        <input name={input.name} onBlur={input.save} className={input.className}/>
                    </div>))
            }
            {content.content_text && <span>{content.content_text}</span>}
        </div>
        <div>
            <button
                className={button.className}
                onClick={button.handleButtonClick}>
                {button.display}
            </button>
            {button.error && (<span>button.error</span>)}
        </div>
    </div>)
}
