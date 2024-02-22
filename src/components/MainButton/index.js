import styles from "./MainButton.module.css"

const MainButton = ({children, size, onClick = () => {}}) => {
  return (
    <button className={`
        ${styles.buttonMain}
        ${styles[size]}
      `}
      onClick={onClick} 
    >
      {children}
    </button>
  )
}

export default MainButton
