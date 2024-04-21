import React from "react";

import Button from "./Button";

const Nav = ({ handler = () => {} }) => {
  return (
    <div>
      <Button text={"Trip"} handler={handler} />
      <Button text={"Quiz"} handler={handler} />
      <Button text={"Awards"} handler={handler} />
      <Button text={"Login"} handler={handler} />
      <Button text={"Signup"} handler={handler} />
      <Button text={"Raffle"} handler={handler} />
      <Button text={"Report"} handler={handler} />
    </div>
  );
};

export default Nav;
