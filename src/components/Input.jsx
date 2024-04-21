import classes from '../assets/sass/Input.module.sass'

const Input = ({ id, text }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={id}>{text}</label>
      <input id={id} type="text" autoComplete="off" className={classes.input}/>
    </div>
  );
};

export default Input;
