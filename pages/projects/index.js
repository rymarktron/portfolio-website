import Head from 'next/head'
import Link from 'next/link';

const Projects = () => {
    return ( 
        <div>
            <Head>
            <title>RM | Projects </title>
            <meta name="keywords" content="projects" />
            </Head>
            <h1>Projects</h1>
            <p>Below are some past and present projects I have work on.</p>
            <p>Engineering is all about bringing things to life and applying and designing around the constraints of physics and economics.</p>


            <h2>CAD Projects</h2>
            <h3>Wooden Bridge</h3>

            <Link href = "/projects/wooden-truss">Cool</Link>

            <h3>Space Capsule Designathon</h3>
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
            <Link href = "/projects/space-capsule">Cool</Link>

            <h2>Computer Science Projects</h2>
            <h3>Reps and Sets</h3>

            <h2>Graphic Design</h2>
            <h3>Bayview Secondary School Yearbook</h3>

            <h3>5th Unionville Scouts Group 20th Anniversary</h3>


        </div> 
    );
}
 
export default Projects
