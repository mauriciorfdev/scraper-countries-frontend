import type { IconType } from 'react-icons';
import './customButton.css';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ name, Icon }: { name: String; Icon: IconType }) => {
  return (
    <Button size='lg'>
      <span style={{ padding: '0.5rem' }}>{<Icon />}</span>
      <span style={{ padding: '1px solid red' }}>{name}</span>
    </Button>
  );
};

export default CustomButton;
