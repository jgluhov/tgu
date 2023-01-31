import clsx from 'clsx';
import styles from './button.module.scss';

export interface IButtonProps {
  color?: 'primary';
  children: React.ReactNode;
  className?: string;
  onClick?: React.EventHandler<React.BaseSyntheticEvent<MouseEvent>>
}

const Button = ({ color, children, className, onClick }: IButtonProps) => {
  return (
    <button type="button"
      onClick={onClick}
      className={clsx(
        styles.button,
        color === 'primary' && styles.buttonPrimary,
        className
      )}>
      { children }
    </button>
  )
}

export default Button;
