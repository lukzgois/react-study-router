import styles from './Banner.module.css'
import coloredCircle from 'assets/circulo_colorido.png'
import myPicture from 'assets/minha_foto.png'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>
          Olá, Mundo!
        </h1>
        
        <p className={styles.paragraph}>
          Boas vindas ao meu espaço pessoal! Sou o Golfinho, estudante de Front-End.
        </p>
      </div>

      <div className={styles.images}>
        <img 
          className={styles.coloredCircle} 
          src={coloredCircle}
          aria-hidden={true}
        />

        <img
          className={styles.myPicture}
          src={myPicture}
          alt="Foto do Golfinho sorrindo!"
        />
      </div>
    </div>
  )
}

export default Banner
