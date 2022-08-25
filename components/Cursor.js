import styles from './Cursor.module.css'

const Cursor = ({ animation = 'blink' }) => {
  const classNames = [styles.root, styles[animation]].join(' ')
  return <span className={classNames}>&nbsp;</span>
}

export default Cursor
