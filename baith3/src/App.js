import logo from './logo.svg';
import './App.css';
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.container }>
     <h1 className={styles.title} >Login</h1>
     <form>
      <p className={styles.fieldTitle}  for="email">Nhập email</p>
      <input className={styles.input} type="text" name="email" value=""/>
      
      <p className={styles.fieldTitle} for="email">Nhập password</p>
      <input className={styles.input} type="password" name="password" value=""/>
      <br/>
      <label>
          <input className={styles.checkbox}
            name="isRead"
            type="checkbox" />I read and accept the privacy policy:
        </label>
<br/>
        
        <button className={styles.btnSubmit}>submit </button>

     </form>
    </div>
  );
}

export default App;
