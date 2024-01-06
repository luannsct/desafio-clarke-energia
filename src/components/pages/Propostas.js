import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import MultipleCards from "../card/CartaoInformacoes";
import styles from '../styles/PropostasCards.module.css';
import Informacoesenviadas from '../layout/InformacoesEnviadas'
import { useEffect } from "react";
import Modal from 'react-modal'
function Propostas() {
    useEffect(() => {
        Modal.setAppElement('#root');
        return () => {
            Modal.setAppElement(null);
        };
    }, []);
    return (
        <div className={styles.propostas_container}>
            <Informacoesenviadas />
            <MultipleCards />
        </div>
    )
}

export default Propostas;