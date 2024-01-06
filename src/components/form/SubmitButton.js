import ModalCotacaoSelecionado from '../modal/ModalCotacaoSelecionado';
import styles from '../styles/SubmitButton.module.css'

function SubmitButton({ text, onClick }) {
    return (
        <>
            <ModalCotacaoSelecionado props={true} />
            <div>
                <button
                    onClick={onClick}
                    className={styles.btn}>{text}</button>
            </div>
        </>
    )
}

export default SubmitButton;