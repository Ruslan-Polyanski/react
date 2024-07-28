
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import style from './style.module.css';
import Button from '../components/button/Button';
import Header from '../components/header/Header';
import FormAddTask from '../components/form/formAddTask/FormAddTask';

interface ITodoItem {
  task: string; 
  done: boolean;
  id: string;
}

type ITodoList = Array<ITodoItem>;

const initialTodoList: ITodoList = [
  {task: 'Task one', done: false, id: nanoid()},
  {task: 'Task two', done: false, id: nanoid()},
  {task: 'Task three', done: false, id: nanoid()},
  {task: 'Task four', done: false, id: nanoid()},
];

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodoList>(initialTodoList);
  const [message, setMessage] = useState<string>('');
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);
  const [editId, setEditId] = useState<string[]>([]);

  const handleTextMessage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.target.value)
  }

  const handleUpdateTaskMessage = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const updatedTask = todoList.map(item => {
      if(item.id !== id) {
        return item;
      } else {
        return {...item, task: event.target.value}
      }
    })
    setTodoList(updatedTask)
  }

  const handleClickButton: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    if(message.trim()) {
      const newTodoList = [...todoList, {
        task: message, 
        done: false,
        id: nanoid()
      }];
      setIsErrorMessage(false)
      setTodoList(newTodoList)
      setMessage('')
    } else {
      setIsErrorMessage(true)
    }
  }

  const handleChangeDoneTask: ((id: string, done: boolean) => void) = (id, done) => {
    const newTodoList = todoList.map((item) => {
      if(id !== item.id) return item;
      return {...item, done}
    })
    setTodoList(newTodoList)
  }

  const handleDeleteClick = (id: string) => {
    const newTodoList = todoList.filter((item) => {
      if(item.id !== id) return true;
      return false;
    })
    setTodoList(newTodoList)
  }

  const handleEditClick = (id: string) => {
    const set = new Set([...editId, id])
    setEditId([...set])
  }

  const handleSaveClick = (id: string) => {
    const set = new Set([...editId]);
    set.delete(id)
    setEditId([...set])
  }

  return (
    <div className="App">

      <Header />

      <div className={style.formPositin}>
        <FormAddTask message={message} 
                    handleTextMessage={handleTextMessage} 
                    handleClickButton={handleClickButton}
                    isErrorMessage={isErrorMessage}
                    />
      </div>

      <div className={style.messageError}>
          <div className={style.trMessageBase}>My new task</div>
          <div className={style.trMessageText}>{message}</div>
      </div>

      <ul className={style.list}>
        {todoList.map(item => {
          return (
            <li key={item.id}>
              <input type='checkbox' checked={item.done} onChange={() => handleChangeDoneTask(item.id, !item.done)} />
              <span className={style.textTask}>{item.task}</span>
              {editId.includes(item.id) ? <input value={item.task} onChange={(event) => handleUpdateTaskMessage(event, item.id)} /> 
                                        : null
                                        }
              <Button isDisabled={editId.includes(item.id)} handleClickButton={() => handleEditClick(item.id)}>Edit</Button>
              <Button isDisabled={!editId.includes(item.id)} handleClickButton={() => handleSaveClick(item.id)}>Close</Button>
              <Button handleClickButton={() => handleDeleteClick(item.id)}>Deleite</Button>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
