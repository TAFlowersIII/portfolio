import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
     return (
          <div>
          <h1>About Me</h1>

          <p className={styles.lightYellow}>I am Thomas. I do not exist</p>


          <Image
               src='/vercel.svg'
               alt='logo'
               width={300}
               height={300}
          />

          <Image
               src='https://placekitten.com/400/500'
               alt='portfolio cat'
               width={400}
               height={500}
          />
          </div>
     )
}