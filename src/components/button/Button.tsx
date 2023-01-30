import clsx from 'clsx';
import styles from './button.module.scss';

export interface IButtonProps {
  color?: 'primary';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ color, children, className }: IButtonProps) => {
  return (
    <button type="button" className={clsx(
      styles.button,
      color === 'primary' && styles.buttonPrimary,
      className
    )}>
      { children }
    </button>
  )
}

export default Button;
