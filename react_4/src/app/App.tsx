
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import style from './style.module.css';
import Button from '../components/button/Button';

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

enum ErrorMessage {
  emptyMessage = 'You did not enter any characters'
}

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodoList>(initialTodoList);
  const [message, setMessage] = useState<string>('');
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

  const handleTextMessage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.target.value)
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

  return (
    <div className="App">

      <header className={style.header}>ToDo List</header>

      <form>
        <label>
          Добавить задачу
          <input placeholder='Add task' type="text" value={message} onChange={handleTextMessage} />
        </label>
        <Button handleClickButton={handleClickButton}>Отправить</Button>
        <span>{isErrorMessage ? ErrorMessage.emptyMessage : ''}</span>
      </form>

      <ul>
        <span>My new task: {message}</span>
        {todoList.map(item => {
          return <li key={item.id}>{item.task}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
