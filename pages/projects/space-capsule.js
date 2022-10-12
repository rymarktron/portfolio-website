import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

const SpaceCapsule = () => {
    return ( 
        <div>
            <Head>
            <title>RM | Space Capsule </title>
            <meta name="keywords" content="space-capsule" />
            </Head>
            <i>            
                <Link href = "/projects">
                    Go Back to Projects
                </Link>
            </i>

            <h1>Mission to Mars</h1>
            <p>The Design of a Space Capsule in Two-Days</p>

            <Image src = "/photos/mars-capsule.png" width = {500} height = {350}/><br/>

            <h2>Introduction</h2>
            <p>In the span of two days on March 19 - 21, the event details were released.
            There were a few topics: farming tractor stabilization, scuba diving wearables, but my partner,
            Michael Yu and I decided to do the Mission to Mars event detail</p>
            
            <h2>Criteria and Constraints</h2>
            <p>The capsule would be designed for outer space with zero gs. In addition, the passengers would be there for up to six months
            on voyage to the red planet. Besides those two requirements, there was creative free space 
            in terms of what needed to be on board.</p>

            <h2>Inspiration and Research</h2>
            Looked at Japanese modular and dense homes which have a small footprint. They used mirrors to make the space look larger.
            Another good reference was the International Space Station.
            It was an open ended design challenge. For this challenge, my partner and I thought of the conditions of zero gravity and the need
                of a modular, multi-purpose design
            <h2>Time Constraints and Project Completion</h2>
            <p>
            In a designathon, there is not much time to finish the project. As such, our design focused on the larger sections.

            <Image src = "/photos/designathon.png" width = {500} height = {350}/><br/>

            For more, check out the presentation that was given to the judges for the event.
            </p>
            <Link href = "https://drive.google.com/file/d/1zc1UCpszFfRfwCRb1AwqTt6B-q-uh6gF/view?usp=sharing">
                <a className = {styles.btn}>Presentation</a>
            </Link>
        </div> 
    );
}
 
export default SpaceCapsule
