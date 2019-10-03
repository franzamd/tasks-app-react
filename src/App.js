import React, { Component } from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import ModalForm from './components/ModalForm';
import About from './components/layout/About';
import ToastModal from './components/layout/ToastModal';

import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid/v4';

class App extends Component {
  state = {
    title: 'React Tasks App',
    isOpen: true,
    isOpenModal: false,
    toast: {
      title: '',
      description: '',
      state: false,
      icon: ''
    },
    titleModal: '',
    task: {},
    tasks: [
      {
        id: uuid(),
        title: 'Tarea 1',
        description: 'Primera tarea, aprender estados',
        photoURL: `https://source.unsplash.com/random/${uuid()}`,
        state: true
      },
      {
        id: uuid(),
        title: 'Tarea 2',
        description: 'Segunda tarea, aprender props',
        photoURL: `https://source.unsplash.com/random/${uuid()}`,
        state: true
      },
      {
        id: uuid(),
        title: 'Tarea 3',
        description: 'Tercera tarea aprender a crear componentes',
        photoURL: `https://source.unsplash.com/random/${uuid()}`,
        state: true
      },
      {
        id: uuid(),
        title: 'Tarea 4',
        description: 'Cuarta tarea, aprender crear funciones',
        photoURL: `https://source.unsplash.com/random/${uuid()}`,
        state: true
      },
      {
        id: uuid(),
        title: 'Tarea 5',
        description: 'Quinta tarea, aprendiendo a aplicar estilos',
        photoURL: `https://source.unsplash.com/random/${uuid()}`,
        state: true
      },
      {
        id: uuid(),
        title: 'Tarea 6',
        description: 'Sexta tarea, aprendiendo a crear botones',
        photoURL: `https://source.unsplash.com/random/${uuid()}`,
        state: true
      }
    ]
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  updateTask = id => {
    this.setState({ titleModal: 'Editar Modal' });
    this.toggleModalForm();

    let taskFound = this.state.tasks.filter(task => task.id === id);
    taskFound = taskFound[0];

    this.setState({ task: taskFound });
  };

  onChangeText = e => {
    this.setState({
      task: { ...this.state.task, [e.target.name]: e.target.value }
    });
  };

  removeTask = id => {
    if (window.confirm('Esta seguro de borrar la tarea')) {
      const newTasks = this.state.tasks.filter(task => task.id !== id);
      this.setState({ tasks: newTasks });

      this.setToastDelete();
    }
  };

  saveChanges = id => {
    if (id) {
      // Edit Task

      // Verify if title & description are diferents with task selected
      let taskFound = this.state.tasks.filter(task => task.id === id);
      taskFound = taskFound[0];

      if (
        taskFound.title !== this.state.task.title ||
        taskFound.description !== this.state.task.description
      ) {
        let taskIndex = this.state.tasks.findIndex(task => task.id === id);

        const updateTask = {
          id,
          title: this.state.task.title,
          description: this.state.task.description,
          photoURL: this.state.task.photoURL,
          state: true
        };

        let arrayTasks = this.state.tasks;

        arrayTasks[taskIndex] = updateTask;

        this.setState({ tasks: arrayTasks });

        this.setToastUpdate();
      }
    } else {
      // New Task
      const newTask = {
        id: uuid(),
        title: this.state.task.title,
        description: this.state.task.description,
        photoURL: `https://source.unsplash.com/random/${uuid()}`,
        state: true
      };

      this.setState({ tasks: [newTask, ...this.state.tasks] });

      this.setToastNew();
    }

    this.toggleModalForm();
  };

  newTask = () => {
    this.setState({ titleModal: 'Crear Nueva Tarea' });

    this.toggleModalForm();
  };

  toggleToastDisplay = () =>
    setTimeout(() => {
      this.unSetToast();
    }, 3000);

  toggleModalForm = () =>
    this.setState({
      isOpenModal: !this.state.isOpenModal,
      task: { title: '', description: '' }
    });

  setToastNew = () => {
    this.setState({
      toast: {
        title: 'Tarea Creada!',
        description: 'La tarea ha sido creada.',
        state: true,
        icon: 'success'
      }
    });

    this.toggleToastDisplay();
  };

  setToastUpdate = () => {
    this.setState({
      toast: {
        title: 'Tarea Actualizada!',
        description: 'La tarea ha sido actualizada.',
        state: true,
        icon: 'warning'
      }
    });

    this.toggleToastDisplay();
  };

  setToastDelete = () => {
    this.setState({
      toast: {
        title: 'Tarea Elminada!',
        description: 'La tarea ha sido eliminada.',
        state: true,
        icon: 'danger'
      }
    });

    this.toggleToastDisplay();
  };

  unSetToast = () => {
    this.setState({
      toast: {
        title: '',
        description: '',
        state: false,
        icon: ''
      }
    });
  };

  render() {
    const {
      title,
      tasks,
      isOpen,
      isOpenModal,
      task,
      titleModal,
      toast
    } = this.state;

    return (
      <div>
        <Router>
          <Route
            path='/'
            render={() => (
              <React.Fragment>
                <Header
                  title={title}
                  isOpen={isOpen}
                  newTask={this.newTask}
                  toggleCollapse={this.toggleCollapse}
                />
                <Container className='my-5'>
                  <Content
                    tasks={tasks}
                    updateTask={this.updateTask}
                    removeTask={this.removeTask}
                  />
                </Container>
                <ModalForm
                  isOpenModal={isOpenModal}
                  toggleModalForm={this.toggleModalForm}
                  titleModal={titleModal}
                  task={task}
                  saveChanges={this.saveChanges}
                  onChangeText={this.onChangeText}
                />
                <ToastModal toast={toast}></ToastModal>
              </React.Fragment>
            )}></Route>
          <Route
            path='/about'
            exact
            render={() => (
              <React.Fragment>
                <About title={title}></About>
              </React.Fragment>
            )}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
