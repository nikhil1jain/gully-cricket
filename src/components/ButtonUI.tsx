import React from "react";
import Button from "@material-ui/core/Button";

interface IButtonUIProps {
  styleName: string;
  variantValue?: "text" | "outlined" | "contained" | undefined;
  displayName: string;
}

const ButtonUI = ({ styleName, variantValue, displayName }: IButtonUIProps) => {
  return (
    <React.Fragment>
      <Button variant={variantValue} className={styleName}>
        {displayName}
      </Button>
    </React.Fragment>
  );
};

export default ButtonUI;
