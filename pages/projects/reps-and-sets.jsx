import Head from 'next/head'
import Link from 'next/link';

const FamilyHistory = () => {
    return ( 
        <div>
            <Head>
            <title>RM | Family History </title>
            <meta name="keywords" content="space-capsule" />
            </Head>
            <h1>Yearbook</h1>
            <p>Project management and graphic design</p>

            <h2>Introduction</h2>
            <p>Yearbook Editor </p>
            
            <h2>Design Cycle</h2>
            Like most engineering projects, the design of the truss bridge project was an iterative process, 
            and there were several versions of the bridge throughout the process and challenges the team 
            encountered. We used facts like wood is stronger under compression to our advantage to come up 
            with an optimum design. The other fact was that weight would be loaded at the center and thus supporting 
            it with a greater number of trusses was key.

            <h2>Final Print</h2>

            Testing was done and it was 
            <Link href ="/">Final report</Link>
        </div> 
    );
}
 
export default FamilyHistory
