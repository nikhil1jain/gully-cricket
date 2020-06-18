import React from "react";
import Button from "@material-ui/core/Button";

interface IButtonUIProps {
  styleName: string;
  variantValue?: "text" | "outlined" | "contained" | undefined;
  displayName: string;
  onButtonClick: () => void;
  isDisabled?: boolean;
}

const ButtonUI = ({
  styleName,
  variantValue,
  displayName,
  onButtonClick,
  isDisabled,
}: IButtonUIProps) => {
  const handleButtonClick = () => {
    onButtonClick();
  };
  return (
    <React.Fragment>
      <Button
        variant={variantValue}
        className={styleName}
        onClick={handleButtonClick}
        disabled={isDisabled}
      >
        {displayName}
      </Button>
    </React.Fragment>
  );
};

export default ButtonUI;
