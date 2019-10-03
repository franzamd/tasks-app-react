import React, { Fragment } from 'react';
import TaskItem from '../TaskItem';

import { Row, Col } from 'reactstrap';

function Content(props) {
  return (
    <Fragment>
      <div style={{ height: '100px' }}></div>
      <Row>
        {props.tasks.map(task => {
          if (task.state) {
            return (
              <Col key={task.id}>
                <TaskItem
                  // Data
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  photoURL={task.photoURL}
                  state={task.state}
                  // Functions
                  updateTask={props.updateTask}
                  removeTask={props.removeTask}
                />
              </Col>
            );
          } else return null;
        })}
      </Row>
    </Fragment>
  );
}

export default Content;
