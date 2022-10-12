import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

const SpaceCapsule = () => {
    return ( 
        <div>
            <Head>
            <title>RM | Mars Rover </title>
            <meta name="keywords" content="space-capsule" />
            </Head>
            <h1>UW Mars Rover Robotics Design Team</h1>
            <p>Mechanical Team member</p>

            <h2>Introduction</h2>
            <p>The Mechanical Team designs and manufactures part for the UW Mars Rover robotics team. 
            There are a few key objectives for the rover:</p>
            <ul>
                <li>Robotic arm to complete tests</li>
                <li>Drive train to allow for vehicle to move across Utah sand</li>
                <li>Science to conduct test</li>
            </ul>

            <h2>Design Cycle</h2>
            Like most engineering projects, the design of the truss bridge project was an iterative process, 
            and there were several versions of the bridge throughout the process and challenges the team 
            encountered. We used facts like wood is stronger under compression to our advantage to come up 
            with an optimum design. The other fact was that weight would be loaded at the center and thus supporting 
            it with a greater number of trusses was key.

            <h2>Axis 1 Assembly</h2>
            <p>Led the assembly of this section of the robotic arm. It was important to assign work to the group members,
            manufacture parts myself, and assembly together.</p>

            <Image src = "/photos/axis1-arm-assembly.JPG" width = {500} height = {350}/><br/>

            <h2>Science Test Tube Sub-Assembly</h2>
            <p>Led the assembly of </p>
            <Image src = "/photos/science-motors.JPG" width = {500} height = {350}/><br/>
            <Image src = "/photos/test-tube.png" width = {500} height = {350}/><br/>

            <h2>Manufacturing Parts</h2>
            <p>Used processes such as 3D printing to create parts for the team.</p>
            <Image src = "/photos/3d-prints.JPG" width = {500} height = {350}/><br/>

        </div> 
    );
}
 
export default SpaceCapsule
