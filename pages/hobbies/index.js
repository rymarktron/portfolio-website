import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

const Hobbies = () => {
    return ( 
        <div>
            <Head>
            <title>RM | Hobbies </title>
            <meta name="keywords" content="hobbies" />
            </Head>
            <h1>Hobbies</h1>

            <h2>Scouts</h2>
            <Image src = "/canoe-trip.png" width = {500} height = {200}/>

            <p>I have been a member of Scouts for ten years. It was wonderful to be a Youth member
            and have a full experience in Scouting. My favourite memories from Scouts are the canoe trips, the culmination of 
            all the skills we learn in the program, and service events, such as Scouttrees and the CNE accessibility services.
            My main group is 5th Unionville Scouts Group in Markham, ON - a really great group.</p>
            
            <p>Of note, I have received 2nd place in the national Amory Adventure Award twice for my group in 2016, 2018 for my journal documentation of the event.
            As well, I have earned the top-section award, Chief Scout Award and the Queen&apos;s Venturer Award during my time as a youth. Finally,
            I have finished my bronze and silver level for the international Duke of Edinburgh&apos;s Award

            </p>


            <h2>Photography</h2>
            I have enjoyed photography the past eight years, and I have taken photos for various organizations: Scouts Canada,
            high school yearbook team, high school music department, and in the present, the University of Waterloo Engineering Society (EngSoc)
            and the Computer Science Club (CSC). For my personal collection of photos, check out my Flickr page.
            <Link href = "https://www.flickr.com/photos/144634903@N04/">
                <a className = {styles.btn}>Flickr Photo Page</a>
            </Link>

            <h2>Graphic Design</h2>
            I enjoy graphic design because it is a way to communicate more information to the masses that words can. 
            The oldage saying, <q>a picture is worth a thousand words</q> - I believe graphics can do more.
        </div> 
    );
}
 
export default Hobbies
