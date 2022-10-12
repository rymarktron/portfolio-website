import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Project.module.css'

const Projects = () => {
    return ( 
        <div>
            <Head>
            <title>RM | Projects </title>
            <meta name="description" content="Featured projects for Ryan Mark which include UW mars rover contributions, wooden truss design, coding projects, and more."/>
            </Head>
            <h1>Projects</h1>
            
            <div className = {styles.singleBlock}>
                <p>Below are some past and present projects I have work on. They vary quite a lot, and many come from
                past course projects, personal projects sparked from curious developments, and design and hackathons.</p>
                <p>Engineering is all about creating prototypes and projects and applying and designing 
                around the constraints of physics, science, and economics.</p>
                <p>I hope you enjoy my curation of works.</p>
            </div>

            <br></br>
            <hr></hr>

            <h2>CAD Projects</h2>
            <div className = {styles.singleBlock}>
                <Link href = "/projects/uw-robotics"><h3 className = {styles.single}>Robotics Design Team Contributions ⚙️</h3></Link>
                <p>I have been a part of this design team since January 2022. This collection showcases my contributions to the team, which include:
                manufacturing parts using the student machine shop, leading sub-assemblies, and create component and assembly drawings. </p> 
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/wooden-truss"><h3 className = {styles.single}>Wooden Bridge 🌉</h3></Link>
                <p>This was a design project for the mechanics of deformation course. We explored the different forces 
                that a truss system can experience, and we had a design competition to optimize the bridge
                with these forces in mind. </p>
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/conveyor-belt"><h3 className = {styles.single}>Conveyor Belt</h3></Link>
                <p> Another course project bringing the components of bearings, fasteners, extrusions, and more together.</p>
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/space-capsule"><h3 className = {styles.single}>Space Capsule Designathon 🚀</h3></Link>
                <p>This project was done during the weekend-long McMaster University Designathon
                in March 2022. The event focused on designing a capsule for a several month long
                journey to Mars. Our planning, design, and presentation led us to receive
                Second Place at the event.</p>
                <br></br>
            </div>

            <br></br>
            <hr></hr>

            <h2>Computer Science Projects</h2>
            <div className = {styles.singleBlock}>
                <Link href = "/projects/rtos"><h3 className = {styles.single}>Scout Toolbox</h3></Link>
                Website to share scouting trips. Full-stack website.
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/rtos"><h3 className = {styles.single}>UW Engineering Orientation Website</h3></Link>
                Created new website 
                <br></br>
            </div>

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
            <i>I enjoy using graphic design to convey information in a visual manner. </i>
            <div className = {styles.singleBlock}>
                <Link href = "/projects/yearbook"><h3 className = {styles.single}>Bayview Secondary School Yearbook</h3></Link>
                This
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/scout-anniversary"><h3 className = {styles.single}>5th Unionville Scouts Group 20th Anniversary</h3></Link>
                <p>This was my Scout group&apos;s 20th anniversary. Similar to my experience in yearbook, this book required to bring everything together 
                and showcase it in a limited 80 pages. I worked on the full design of the book and had a chance to communicate with a number of stakeholders 
                to create the book.</p>
                <br></br>
            </div>

            <div className = {styles.singleBlock}>
                <Link href = "/projects/family-history"><h3 className = {styles.single}>Family History</h3></Link>
                There was a lot of practice using Illustrator and InDesign to create a page design. I used Photoshop to bring photos from the past to the present.
                <br></br>
            </div>
        </div> 
    );
}
 
export default Projects
