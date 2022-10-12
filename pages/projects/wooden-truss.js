import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

const Truss = () => {
    return ( 
        <div>
            <Head>
            <title>RM | Wooden Truss </title>
            <meta name="keywords" content="bridge" />
            </Head>
            <h1>Wooden Truss Bridge Design</h1>
            <i>Course Project with fellow classmates</i>
            <p>Engineering is all about bringing things to life and applying and designing around the constraints of physics and economics.</p>

            <h2>Introduction</h2>
            <p>Design projects offer a chance to apply theory in real life applications, and thus allow engineers
            to see if the models for the forces are valid. The purpose of this project was to come up with 
            the design of a truss bridge that had the highest possible ratio of weight supported to weight 
            of the bridge (performance value or PV). </p>
            
            <h2>Design Cycle</h2>
            <p>Like most engineering projects, the design of the truss bridge project was an iterative process, 
            and there were several versions of the bridge throughout the process and challenges the team 
            encountered. We used facts like wood is stronger under compression to our advantage to come up 
            with an optimum design. The other fact was that weight would be loaded at the center and thus supporting 
            it with a greater number of trusses was key.</p>

            We found that simpler was better to understand the force design.

            <h2>Testing</h2>
            <Image src = "/photos/broken-members.JPG" width = {500} height = {350}/><br/>
            <p>To design the bridge, the team did calculations for different truss designs to find a truss 
            that would best. Two tests were conducted to test the capabilities of the bridge and determine the 
            modes of failure and identify problems that were not considered at the initial design. </p>



            <h2>Conclusion and Report</h2>
            <Image src = "/photos/final-bridge.JPG" width = {500} height = {350}/><br/>
            <p>The final design had a performance value of 240 times. 

            Testing was done and it was </p>

            <Link href = "https://drive.google.com/file/d/1zc1UCpszFfRfwCRb1AwqTt6B-q-uh6gF/view?usp=sharing">
                <a className = {styles.btn}>Final Report</a>
            </Link>
        </div> 
    );
}
 
export default Truss
