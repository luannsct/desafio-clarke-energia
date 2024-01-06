import { useNavigate } from 'react-router-dom'
import PropostaForm from '../Propostas/PropostaForm'
import styles from '../styles/Propostas.module.css'
function Proposta() {

    const navigate = useNavigate()

    function createPost(proposta) {

        fetch("http://localhost:4000/v1/cotacao",
            //"https://api-deploy.cyclic.app//v1//cotacao", 
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(proposta)
            }).then((response) => response.json())
            .then((data) => {
                if (data.erro) {
                    console.log(data)
                } else {

                    (navigate('/propostas', { state: { message: "Proposta solicitada com sucesso, um e-mail foi enviado para você confirmando tudo." } }))

                }


            })
            .catch((err) => console.log(err))

    }

    return (
        <>
            <div className={styles.novaProposta_container}>
                <div className={styles.novaProposta_container_text}>
                    <div className={styles.novaProposta_container_div_text}>
                        <h1>Seja nosso Cliente</h1>
                        <p>
                            Faça parte da nossa comunidade exclusiva! Cadastre-se agora para desfrutar de benefícios incríveis, ofertas exclusivas e uma experiência personalizada. Junte-se a nós e faça parte do melhor da Energia Livre. É rápido e fácil. Solicite uma proposta agora mesmo!.
                        </p>
                    </div>
                    <div className={styles.novaProposta_container_div}>
                        <PropostaForm handleSubmit={createPost} btnText="Fazer Cotação" />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Proposta