import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
      <title>Ryan Mark</title>
      <meta name="keywords" content="ninjas" />
      <meta name="description" content="I'm Ryan. A student studying mechatronics engineering with experience on design teams and various coops ..." />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>

      <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
        <Image src = "/rm-profile.png" width = {150} height = {150}/>
      </div>

      <h1 className={styles.title}>Ryan Mark</h1>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
      <i className={styles.title}>Mechatronics Engineering at the University of Waterloo</i>
          
        </div>

      <p className = {styles.text}>In 2020, I joined the University of Waterloo in the Mechatronics Engineering program, and it has been a joy-ride since. It is nice to be
      in a program where you have a chance to learn the engineering discipline and apply the concepts from class to engineering design teams and co-op experiences.  
      There are also great connections to industry and a vast network which is really nice.</p>

      <p className = {styles.text}>I am involved with the Robotics Design Team on the Mechanical sub-team, as well as the Formula 1 Motorsports team on the Electronics sub-team. 
      With two different engineering applications and its respective challenges, it is nice to be part of a team to achieve a great product together. </p>
      <p className = {styles.text}>I believe that the value of engineering is being able to solve every day problems with all the tools in the engineering toolbox. In the projects section of my website,
      it showcases different engineering problems and the solutions I came up with on my own or with a team using these tools.</p>

      <p className = {styles.text}>In my free time, I enjoy taking photos - more of which can be seen in my <Link href ="/hobbies"><a>Hobbies</a></Link> section. I take photos 
      for the Engineering Society and Computer Science Club.</p>

      <p className = {styles.text}>Want to have a connect? 
        Feel free to contact me by &nbsp;
        <Link href ="mailto:ryanymark@gmail.com">
           email
        </Link> 
         &nbsp; or connect with me on &nbsp;
        <Link href ="https://www.linkedin.com/in/ryanymark/">
           LinkedIn
        </Link>
      </p>

      <Link href = "/projects">
        <a className = {styles.btn}>See Projects</a>
      </Link>
    </div>
  )
}
