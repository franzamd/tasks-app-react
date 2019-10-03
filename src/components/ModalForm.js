import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

function ModalForm(props) {
  return (
    <div>
      <Modal isOpen={props.isOpenModal} toggle={props.toggleModalForm}>
        <ModalHeader toggle={props.toggleModalForm}>
          {props.titleModal}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='title'>Título:</Label>
              <Input
                type='text'
                name='title'
                onChange={props.onChangeText}
                value={props.task.title}
              />
            </FormGroup>
            <FormGroup>
              <Label for='description'>Descripción:</Label>
              <Input
                type='textarea'
                name='description'
                onChange={props.onChangeText}
                value={props.task.description}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={props.saveChanges.bind(this, props.task.id)}>
            Aceptar
          </Button>
          <Button color='warning' onClick={props.toggleModalForm}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalForm;
