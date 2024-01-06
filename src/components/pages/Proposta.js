import { useNavigate } from 'react-router-dom'
import PropostaForm from '../Propostas/PropostaForm'
import styles from '../styles/Propostas.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Proposta() {

    const navigate = useNavigate()

    function createPost(proposta) {
        (
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        )



        // Fazer a requisição
        fetch("https://api-deploy.cyclic.app/v1/cotacao", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(proposta)
        })
            .then(response => {
                if (!response.ok) {
                    // Se a resposta não estiver OK (código de status diferente de 2xx), lançar um erro
                    throw new Error(`Erro de requisição: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // Lógica de sucesso

                // Salvar os dados no localStorage
                localStorage.setItem('dadosRequisicao', JSON.stringify(data));
                localStorage.setItem('dadosEmpresa', JSON.stringify(proposta))


                // Fechar o toast de informação
                const id = toast.info("Estamos buscando fornecedores de energia limpa para você...");
                toast.dismiss(id);

                // Atualizar o toast em caso de sucesso
                toast.update(id, { render: "Encontramos 😁", type: "success", isLoading: false });
                setTimeout(() => {
                    navigate('/propostas');
                }, 2000); // Aguarda 2 segundos (ajuste conforme necessário)

            })
            .catch(error => {
                console.error(error);

                // Fechar o toast de informação
                const id = toast.info("Estamos buscando fornecedores de energia limpa para você...");
                toast.dismiss(id);

                // Verificar se o erro é um erro 404
                if (error.message.includes("404")) {
                    toast.error("Não temos nenhum parceiro que atenda o valor em kwh que vc usa😕", { isLoading: false });
                } else {
                    // Outro tipo de erro
                    toast.error("Ah... Infelizmente não foi dessa vez 😭", { isLoading: false });
                }
            });



    }

    return (
        <>
            <ToastContainer />
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