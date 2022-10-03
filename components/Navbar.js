import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <Link href ="/"><div className = "logo">
                <Image src = "/logo.png" width = {80} height = {80}/>
            </div></Link>
            <Link href ="/"><a>Home</a></Link>
            <Link href ="/experiences"><a>Experiences</a></Link>
            <Link href ="/projects"><a>Projects</a></Link>
            <Link href ="/hobbies"><a>Hobbies</a></Link>

        </nav>
     );
}
 
export default Navbar;