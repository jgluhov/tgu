import styles from './header.module.scss'
import {ReactComponent as Logo} from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Logo className={styles.headerLogo} />
      </div>
    </div>
  );
}

export default Header;
