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
    <Button size='lg' onClick={onHandleClick} disabled={isLoading}>
      {isLoading && <Spinner animation='grow' />}
      <span style={{ padding: '0.5rem' }}>{<Icon />}</span>
      <span style={{ padding: '1px solid red' }}>{name}</span>
    </Button>
  );
};

export default CustomButton;
