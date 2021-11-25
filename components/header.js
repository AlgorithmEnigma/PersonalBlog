import styles from '../styles/header.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <h2 className={styles.header}>J0rdan L0well</h2>
            <ul>
                <li className={`${utilStyles.listItem}`}></li>
            </ul>
        </div>
    );
}
