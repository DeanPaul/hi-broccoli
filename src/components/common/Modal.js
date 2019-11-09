import React, {PropTypes, Component} from 'react';
import './Modal.css';

class Modal extends Component {

  render() {
    const {caption, children, show, onDismiss} = this.props;
    return (show?
      <div>
        <div className='root' tabIndex="-1" role="dialog" ref="content">
          <div className='dialog' role="document">
            <div className='content'>
              {/* <div className='header'>*/}
                {/* <span className='close' role="button" onClick={onDismiss}>&times;</span>*/}
                {/* <span className='caption'>{caption}</span>*/}
              {/* </div>*/}
              <div className={'body'}>
                { children }
              </div>
            </div>
          </div>
        </div>
        <div className='backdrop'></div>
      </div>:null
    );
  }
}

export default Modal;
