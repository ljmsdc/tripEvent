import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
  return (
    <div>
      <Input id={'name'} text={"Name"} />
      <Input id={'lastName'} text={"Last Name"} />
      <Input id={'user'} text={"User"} />
      <Input id={'password'} text={"Password"} />
      <Input id={'confirmPassword'} text={"Confirm Password"} />
      <Button text={"Sign Up"} />
    </div>
  );
};

export default Signup;
