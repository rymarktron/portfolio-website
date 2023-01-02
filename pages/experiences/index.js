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
            <p>I have been fortunate to have internships at three wonderful companies during my university experience. 
            The co-op experience has been a great way to apply the theory in class to the real world and learn about industry use case and design.
            These experiences are described below.</p>
            <br/>

            <hr></hr>

            <Image src = "/logos/IQC-logo.svg" width = {200} height = {80}/><br/>
            <i>May - August 2022</i>
            <br/>
            <p>
            During Ryan’s co-op term at the Institute for Quantum Computing (IQC), he had the opportunity to work on designing the engineering 
            system for cutting-edge research projects in the field of quantum information science. He was part of a team of researchers working
            on the development of novel quantum algorithms and technologies, and he was able to contribute my engineering experience to several 
            key projects throughout my time at IQC. During his term, one of the major projects that he worked on was the design of an optical 
            beam delivery system. This sub-system was responsible for sending a laser beam to a trapped ion, and it used cameras and other sensors 
            to calibrate the ion`&apos`s position and correct it as needed.


            </p>
            <hr></hr>


            <Image src = "/logos/Amphenol-logo.svg" width = {200} height = {80}/><br/>
            <i>September - December 2021</i>
            <p>During Ryan`&apos`s co-op term as a Process Engineer at an electromechanical manufacturing company, they gained valuable hands-on experience 
            in the production of wire harnesses. One of their main responsibilities was to create engineering drawings for the wire harnesses on AutoCAD, ensuring 
            that all necessary dimensions and specifications were accurately captured.

            In addition to creating engineering drawings, they also worked closely with the team to identify and implement process improvements, and 
            were responsible for maintaining documentation and tracking production data. They enjoyed the opportunity to use their technical skills to 
            contribute to the success of the company, and were proud to be a part of a team that produced high-quality products. 
            </p>
            
            <hr></hr>

            <h2>IDEAS Clinic</h2>
            <p>During their co-op term as a Research Clinician, they had the opportunity to work on a project focused on the application of computer vision in 
            sports golf. They worked closely with a team of researchers to develop and test algorithms that could analyze video footage of golf swings and 
            provide valuable insights to players and coaches. One of the most rewarding aspects of their co-op experience was the opportunity to see their 
            work have a real-world impact. They enjoyed the challenge of finding creative solutions to complex problems, and were excited to be a part of a 
            project that had the potential to revolutionize the way golf is analyzed and taught.
            </p>

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
