import React from "react";
import { Button } from "@material-ui/core";
import { IButtonUIProps } from "../Interfaces/index";

const ButtonUI = ({
  styleName,
  variantValue,
  displayName,
  onButtonClick,
  isDisabled,
}: IButtonUIProps) => {
  const onButtonClickHandler = () => {
    onButtonClick();
  };
  return (
    <React.Fragment>
      <Button
        variant={variantValue}
        className={styleName}
        onClick={onButtonClickHandler}
        disabled={isDisabled}
      >
        {displayName}
      </Button>
    </React.Fragment>
  );
};

export default ButtonUI;
