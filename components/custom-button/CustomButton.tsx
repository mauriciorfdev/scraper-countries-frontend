import type { IconType } from 'react-icons';
import './customButton.css';
import Button from 'react-bootstrap/Button';
import type { MouseEventHandler } from 'react';

interface ButtonProps {
  name: String;
  Icon: IconType;
  onHandleClick: MouseEventHandler;
}

const CustomButton = ({ name, Icon, onHandleClick }: ButtonProps) => {
  return (
    <Button size='lg' onClick={onHandleClick}>
      <span style={{ padding: '0.5rem' }}>{<Icon />}</span>
      <span style={{ padding: '1px solid red' }}>{name}</span>
    </Button>
  );
};

export default CustomButton;
