import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

//only runs on build time not browser
export const getStaticProps = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')//asynchronous function
    const data = await res.json();

    return {
        props: { ninjas: data}
    }
}

//fetch and wait for data, use get static prop - asynchronous function. timing is key
const Ninjas = ({ ninjas }) => {
    return ( 
        <>
        <h1>All Ninjas</h1>
        {ninjas.map(ninja => (
            <Link href = {'/ninjas/' + ninja.id} key = {ninja.id}>
                <a className = {styles.single}>
                    <h3>{ ninja.name }</h3>
                </a>
            </Link>
        ))}
        </>
     );
}//pump data in component.
 
export default Ninjas;