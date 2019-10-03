import React from 'react';

import { Toast, ToastBody, ToastHeader } from 'reactstrap';

function ToastModal(props) {
  return (
    <div
      style={{
        position: 'fixed',
        margin: '20px',
        bottom: '0',
        right: '0',
        display: props.toast.state ? 'inline' : 'none'
      }}>
      <Toast>
        <ToastHeader icon={props.toast.icon}>{props.toast.title}</ToastHeader>
        <ToastBody>{props.toast.description}</ToastBody>
      </Toast>
    </div>
  );
}

export default ToastModal;
