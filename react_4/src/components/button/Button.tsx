
import style from './style.module.css';

interface IProps {
  handleClickButton: React.MouseEventHandler;
  children: string;
  isDisabled?: boolean;
}

const Button: React.FC<IProps> = ({handleClickButton, isDisabled, children}) => {
  return <button disabled={isDisabled} className={style.buttonAddTask} onClick={handleClickButton}>{children}</button>
}

export default Button;