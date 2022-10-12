import Head from 'next/head'
import Image from 'next/image'

const Experiences = () => {
    return ( 
        <div>
            <Head>
            <title>RM | Experiences </title>
            <meta name="keywords" content="experiences" />
            </Head>

            <h1>Work Experiences</h1>
            <Image src = "/waterloo.png" width = {500} height = {200}/>
            <p>I have been fortunate to have worked at three wonderful co-ops during my university experience. 
            Co-op has been a great way to apply the theory in class to the real world, and learn about industry.</p>
            <br/>

            <hr></hr>

            <Image src = "/logos/IQC-logo.svg" width = {200} height = {80}/><br/>
            <i>May - August 2022</i>
            <br/>
            <p>It was an extraordinary experience to be at the cutting edge of science and technology with this co-op.
            I worked on the optical beam delivery, a sub-system in charge of sending a light beam to a trapped ion and receiving
            information from cameras and other sensors to ensure the correct position of the ion. There were significant discussions
            on the design and trying to keep it modular and precise, and it was highly rewarding to see the project from the 
            start to the end of the design cycle.</p>
            <hr></hr>


            <Image src = "/logos/Amphenol-logo.svg" width = {200} height = {80}/><br/>
            <i>September - December 2021</i>
            <p>I worked at Amphenol as a process engineering assistant. As a wire and cables manufacturing
            company that builds electric assemblies for major construction and transportation companies
            in North America. I worked there as a process engineer where I applied my AutoCAD skills to
            create work constructions for the factory, and I also had a chance to apply and on the factory
            production floor to help solve problems that arised. To the left is an example of a wire harness
            diagram from online (cannot show ones created for copyright reasons). The drawings I created
            were often larger and more complex and would be put on a 3” x 16” board.</p>
            
            <hr></hr>

            <h2>IDEAS Clinic</h2>
            <p>I worked at the IDEAS Clinic as a research clinician and was able to learn and apply 
            computer vision in the sports industry for golf and robotics with markerless tracking. I learned
            Python, MATLAB, and OpenCV to be able to create a program that would be able to meet different conditions.

            As well, I wrote technical reports for faculty to support them in their classes.</p>

            <hr></hr>
            
            <h1>Design Team Experiences</h1>
            <h2>Mars Rover Design Team</h2>
            <p>I have been involved in the Mars Rover Robotics design team. I started in the mechanical team and learned manufacturing design and 
            how to machine parts using the student design ttmachine shop. </p>

            <h1>Other Experiences</h1>
            Some of experiences worth mentioning is my involvement in Scouts at a local and national level.
            I am also a website and photography director of the UW Engineering Society.
        </div> 
    );
}
 
export default Experiences
