import styles from './link.module.scss';
import clsx from 'clsx';

interface LinkProps {
  to?: string;
  children: React.ReactNode;
  className: string;
}

const Link = (props: LinkProps) => {
  return <a href={props.to || '#'} className={clsx(props.className, styles.link)}>{props.children}</a>
}

export default Link;
