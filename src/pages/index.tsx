import Grid from '../components/Grid'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Grid />
    </div>
  )
}
