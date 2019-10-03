import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg
} from 'reactstrap';

function TaskItem(props) {
  return (
    <Card body className='m-3'>
      <CardHeader>
        <CardTitle className='font-weight-bold'>{props.title}</CardTitle>
      </CardHeader>
      <CardBody className='text-center'>
        <CardImg
          src={props.photoURL}
          style={{
            margin: '2px'
          }}></CardImg>
        <CardText>{props.description}</CardText>
      </CardBody>
      <CardFooter className='d-flex justify-content-center'>
        <Button
          color='warning'
          className='mr-1'
          onClick={props.updateTask.bind(this, props.id)}>
          Editar
        </Button>
        <Button
          color='danger'
          className='ml-1'
          onClick={props.removeTask.bind(this, props.id)}>
          Borrar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TaskItem;
