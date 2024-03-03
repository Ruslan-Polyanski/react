import { MyButton } from "./items/MyButton";
import styles from './App.module.css';
import { AdminPanel } from "./AdminPanel"

const user = {
  name: 'Inna',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

let isLoggedIn = true;

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function App() {

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <>
      <h1 className={styles['h1']}>Welcome to my app</h1>
      <MyButton />
      <p className={styles.p}> My name is {user.name}!</p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <div>
        {isLoggedIn && <AdminPanel />}
      </div>
      <ul>{listItems}</ul>
      <ul>{['one ', 'two ', 'three ']}</ul>
    </>
  );
}

export default App;
