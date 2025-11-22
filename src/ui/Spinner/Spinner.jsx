import styles from './Spinner.module.css'

export default function Spinner() {

     return (

          <div className={styles["dot-spinner"]}>
               <div className={styles["dot-spinner__dot"]}></div>
               <div className={styles["dot-spinner__dot"]}></div>
               <div className={styles["dot-spinner__dot"]}></div>
               <div className={styles["dot-spinner__dot"]}></div>
               <div className={styles["dot-spinner__dot"]}></div>
               <div className={styles["dot-spinner__dot"]}></div>
               <div className={styles["dot-spinner__dot"]}></div>
               <div className={styles["dot-spinner__dot"]}></div>
          </div>

     )

}