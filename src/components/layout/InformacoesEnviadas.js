import { useEffect, useState } from "react";
import styles from '../styles/Informacoesenvidas.module.css'
function InformacoesEnviadas() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const storedData = localStorage.getItem('dadosEmpresa');
        if (storedData) {
            setData(JSON.parse(storedData));

        }

    }, []);

    return (
        <>
            <div className={styles.informacoes_enviadas_container}>
                <h2>Suas informações:</h2>
                <ul>
                    <li>Nome empresa: <span>{data.nomecliente}</span></li>
                    <li>Email: <span>{data.emailcliente}</span></li>
                    <li>Consumo: <span>{data.consumokwhmensal} kWh</span></li>
                </ul>
            </div>

        </>
    )
}


export default InformacoesEnviadas;