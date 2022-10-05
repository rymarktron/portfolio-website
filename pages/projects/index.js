import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Project.module.css'

const Projects = () => {
    return ( 
        <div>
            <Head>
            <title>RM | Projects </title>
            <meta name="keywords" content="projects" />
            </Head>
            <h1>Projects</h1>
            
            <div className = {styles.singleBlock}>
                <p>Below are some past and present projects I have work on.</p>
                <p>Engineering is all about bringing things to life and applying and designing around the constraints of physics and economics.</p>
            </div>

            <br></br>
            <hr></hr>

            <h2>CAD Projects</h2>
            <div className = {styles.singleBlock}>
                <Link href = "/projects/uw-robotics"><h3 className = {styles.single}>Robotics Design Team Contributions</h3></Link>
                This 
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/wooden-truss"><h3 className = {styles.single}>Wooden Truss</h3></Link>
                This 
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/space-capsule"><h3 className = {styles.single}>Space Capsule Designathon</h3></Link>
                This project was done during the weekend-long McMaster University Designathon
                in March 2022. The event focused on designing a capsule for a several month long
                journey to Mars. Besides the simple mission statement, it was an open ended design
                challenge. For this challenge, my partner and I thought
                of the conditions of zero gravity and the need
                of a modular, multi-purpose design. We
                looked at the International Space Station
                as an inspiration, as well as highly dense
                housing.
                Our thought and planning led us to receive
                Second Place at the event.
                <br></br>
            </div>

            <br></br>
            <hr></hr>

            <h2>Computer Science Projects</h2>
            <h3>Reps and Sets</h3>
            <div className = {styles.singleBlock}>
                <Link href = "/projects/reps-and-sets"><h3 className = {styles.single}>Reps and Sets</h3></Link>
                Coding project to document different.
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/rtos"><h3 className = {styles.single}>Real Time Operating System</h3></Link>
                For MTE241, I learned and built an Operating System.
                <br></br>
            </div>

            <br></br>
            <hr></hr>

            <h2>Graphic Design</h2>
            <div className = {styles.singleBlock}>
                <Link href = "/projects/yearbook"><h3 className = {styles.single}>Bayview Secondary School Yearbook</h3></Link>
                This
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/scout-anniversary"><h3 className = {styles.single}>5th Unionville Scouts Group 20th Anniversary</h3></Link>
                This
                <br></br>
            </div>

        </div> 
    );
}
 
export default Projects
