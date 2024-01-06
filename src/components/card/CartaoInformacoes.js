import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Rating from '@mui/material/Rating';
import SubmitButton from '../form/SubmitButton';
import styles from '../styles/CartaoInformacoes.module.css';
import ModalCotacaoSelecionado from '../modal/ModalCotacaoSelecionado';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function MultipleCards() {
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
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCardData, setSelectedCardData] = useState(null);
    function openModal(data) {
        setSelectedCardData(data);
        setModalIsOpen(true);
    };

    function closeModal() {
        setModalIsOpen(false);
        setSelectedCardData(null);
    };
    const [empresa, setEmpresa] = useState([]);
    useEffect(() => {
        const storedData = localStorage.getItem('dadosEmpresa');
        if (storedData) {
            setEmpresa(JSON.parse(storedData));
        }
    }, []);
    function salvarNoBanco(informacoesFornecedor) {
        const { id } = informacoesFornecedor;
        const banco = {
            id_fornecedor: id,
            nomecliente: empresa.nomecliente,
            emailcliente: empresa.emailcliente,
            consumokwhmensal: empresa.consumokwhmensal
        }
        //novacotacao
        fetch("http://localhost:4000/v1/novacotacao", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(banco)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro de requisição: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const id = toast.info("Estamos salvando sua solicitação...");
                toast.dismiss(id);
                toast.update(id, { render: "Tudo certo 😁", type: "success", isLoading: false });
                setTimeout(() => {
                    navigate('/');
                }, 2000);

            })
            .catch(error => {
                console.error(error);
                const id = toast.info("Estamos buscando fornecedores de energia limpa para você...");
                toast.dismiss(id);
                if (error.message.includes("404")) {
                    toast.error("Ihh... Nada bom! 😕", { isLoading: false });
                } else {
                    toast.error("Ah... Infelizmente não foi dessa vez 😭", { isLoading: false });
                }
            });

    }

    useEffect(() => {
        const storedData = localStorage.getItem('dadosRequisicao');

        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, {});

    return (<>
        <ToastContainer />

        <div className={styles.cards_container}>
            {data.map((item) => (
                <RecipeReviewCard key={item.id} data={item} openModal={openModal} />
            ))}
            <ModalCotacaoSelecionado
                isOpen={modalIsOpen}
                closeModal={closeModal}
                data={selectedCardData}
                salvarNoBanco={salvarNoBanco}
            />
        </div>
    </>
    );
}

function RecipeReviewCard({ data, openModal }) {


    return (<>

        <Card

            className={styles.cartao_informacoes_fornecedores}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img src={data.logo} alt={data.nome} />
                    </Avatar>
                }
                title={<h3>{data.nome}</h3>}
            />
            <CardMedia
                component="img"
                height="190"
                image={data.logo}
                alt={data.nome}
                style={{ borderRadius: '5px' }}
            />
            <CardContent>
                <Typography variant="body2">
                    <ul>
                        <li>
                            <span>Estado Origem: </span>
                            <span style={{ fontWeight: 'bold' }}>{data.estado}</span>
                        </li>
                        <li>
                            <span>Custo por kWh: </span>
                            <span style={{ fontWeight: 'bold' }}>R$ {data.custokwh}</span>
                        </li>
                        <li>
                            <span>KWH mínimo: </span>
                            <span style={{ fontWeight: 'bold' }}>{data.khwminimo}</span>
                        </li>
                        <li>
                            <span>Número de clientes: </span>
                            <span style={{ fontWeight: 'bold' }}>{data.clientes}</span>
                        </li>
                        <li>
                            <span style={{
                                display: 'flex', alignContent: 'center', justifyContent: 'space-between'
                            }}>
                                <span>Avaliação:
                                    <span style={{ fontWeight: 'bold' }}>{data.avaliacaomedia}</span>
                                </span>
                                {<Rating name="Avaliação" value={parseFloat(data.avaliacaomedia)} precision={0.5} readOnly />}
                            </span>
                        </li>
                    </ul>


                </Typography>
            </CardContent>

            <SubmitButton text="Solicitar Cotação" onClick={() => openModal(data)} />

        </Card >
    </>);
}
