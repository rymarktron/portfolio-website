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

      <p className = {styles.text}>Ryan is a third-year Mechatronics Engineering student at the University of Waterloo. 
      Ryan has always been fascinated by the intersection of mechanical, electrical, and computer engineering, and he knew 
      that Mechatronics Engineering was the perfect program.</p>

      <p className = {styles.text}>Throughout his time at Waterloo, Ryan has taken a variety of courses in subjects ranging from sensors and instrumentation 
      to computer-aided design and manufacturing. He has also completed several co-op placements, including one at a leading 
      electronics company, Amphenol where he worked on improving processes in manufacturing and the successful production of wire harnesses. </p>
      <p className = {styles.text}>In his spare time, Ryan enjoys participating in design competitions and hackathons, where he can apply his skills and knowledge to solve real-world problems. 
      He is also an active member of the Waterloo Engineering Society, where he has served as a director of website and photography, being an integral member of the team.</p>

      <p className = {styles.text}>More on his past co-op experiences and personal projects can be seen at: <Link href ="/experiences"><a>Experiences</a></Link></p>

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
