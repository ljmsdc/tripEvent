import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <div>
      <Input id="user" text={"User"} />
      <Input id="password" text={"Password"} />
      <Button text={"Log in"} />
    </div>
  );
};

export default Login;
