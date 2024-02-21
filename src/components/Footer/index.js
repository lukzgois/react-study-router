import styles from './Footer.module.css'
import { ReactComponent as TradeMark } from 'assets/marca_registrada.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <TradeMark /> 
      Desenvolvido por Lucas Gois
    </footer>
  )
}

export default Footer
