import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>

            <p className={styles.extraGreen}>Hi I am Weston, I am a super cool software engineer now, and I make neat stuff with the codes</p>

            {/* load an image locally */}
            <Image 
                src='/unnamed.jpg'
                alt='logo'
                width={300}
                height={500}
                // layout='fill'
            />
            {/* <img 
                src='/unnamed.jpg'
                alt='happy beer man'
            /> */}

            {/* load an image hosted on a another domain */}
            <Image 
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={400}
                height={500}
            />
        </div>
    )
}