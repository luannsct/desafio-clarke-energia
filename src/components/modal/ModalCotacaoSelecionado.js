import Modal from 'react-modal'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from '../styles/ModalCotacaoSelecionado.module.css'
import { Rating } from '@mui/material';
const ModalCotacaoSelecionado = ({ isOpen, closeModal, data, salvarNoBanco }) => {
    if (data) {
        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Informações do Card"
                className={styles.modal_content}
            >
                <div className={styles.modal_content_div} >
                    <h2>{data.nome}</h2>
                </div>
                <div className={styles.modal_content_div_text}>
                    <p>Estado: <span>{data.estado}</span></p>
                    <p>Custo kWh: <span>R$ {data.custokwh}</span></p>
                    <span style={{
                        display: 'flex', alignContent: 'space-between', justifyContent: 'space-between'
                    }}>
                        <span>Avaliação:
                            <span style={{ fontWeight: 'bold' }}>{data.avaliacaomedia}</span>
                        </span>
                        {<Rating name="Avaliação" value={parseFloat(data.avaliacaomedia)} precision={0.5} readOnly />}
                    </span>
                </div>

                <Stack direction='row' spacing={10} className={styles.modal_content_stack}>
                    <Button variant="contained" color='success' onClick={() => salvarNoBanco(data)}>Confirmar</Button>
                    <Button variant="outlined" color='error' onClick={closeModal}>Fechar</Button>
                </Stack>

            </Modal>
        );
    }
};

export default ModalCotacaoSelecionado;