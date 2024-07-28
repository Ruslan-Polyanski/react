
import Button from "../../button/Button";
import style from "./style.module.css";

enum ErrorMessage {
  emptyMessage = 'You did not enter any characters'
}

interface IFormAddTask {
  message: string;
  handleTextMessage: React.ChangeEventHandler<HTMLInputElement>;
  handleClickButton: React.MouseEventHandler<HTMLButtonElement>;
  isErrorMessage: boolean;
}

const FormAddTask: React.FC<IFormAddTask> = (props) => {
  const {message, handleTextMessage, handleClickButton, isErrorMessage} = props;
  return <div>
            <form className={style.formAddTask}>
              <input className={style.inputArea} placeholder='Write task' type="text" value={message} onChange={handleTextMessage} />
              <Button handleClickButton={handleClickButton}>Add</Button>
            </form>
            <div className={style.errorMessageForm}>{isErrorMessage ? ErrorMessage.emptyMessage : ''}</div>
         </div>
}

export default FormAddTask;