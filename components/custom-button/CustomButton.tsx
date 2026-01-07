import type { IconType } from 'react-icons';
import './customButton.css';
import Button from 'react-bootstrap/Button';
import type { MouseEventHandler } from 'react';
import Spinner from 'react-bootstrap/Spinner';

interface ButtonProps {
  name: String;
  Icon: IconType;
  onHandleClick: MouseEventHandler;
  isLoading?: boolean;
}

const CustomButton = ({
  name,
  Icon,
  onHandleClick,
  isLoading,
}: ButtonProps) => {
  return (
    <Button onClick={onHandleClick} disabled={isLoading}>
      {isLoading && <Spinner animation='grow' />}
      {<Icon />}
      <span style={{ padding: '1px' }}>{name}</span>
    </Button>
  );
};

export default CustomButton;
