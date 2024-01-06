import { Link } from "react-router-dom"
import Container from "./Container"
import styles from '../styles/Navbar.module.css'
import logo from '../../img/energy_logo_whit.svg'
function Navbar() {
    return (
        <Container >
            <nav className={styles.navbar}>

                <Link to="/">
                    <img src={logo} alt="logo" width="40px" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}> <Link to="/">Início</Link>
                    </li>
                    <li className={styles.item}><Link to="/sobre">Empresa</Link></li>
                    <li className={styles.item}><Link to="/contato">Contato</Link></li>
                    <li className={styles.item}><Link to="/novo-cliente">Seja cliente</Link></li>
                </ul>

            </nav>
        </Container>
    )
}

export default Navbar