
import style from './style.module.css';

interface IProps {
  handleClickButton: React.MouseEventHandler;
  children: string;
}

const Button: React.FC<IProps> = ({handleClickButton, children}) => {
  return <button className={style.buttonAddTask} onClick={handleClickButton}>{children}</button>
}

export default Button;