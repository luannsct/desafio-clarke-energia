import styles from '../styles/PropostaForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import { useState, useEffect } from 'react'
function PropostaForm({ handleSubmit, btnText, propostaData }) {
    const [propostas, setPropostas] = useState(propostaData || {})

    const submit = (e) => {
        e.preventDefault()

        handleSubmit(propostas)
    }

    function handleChange(e) {
        setPropostas({ ...propostas, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome Empresa"
                name="nomecliente"
                placeholder="Inorme o nome da sua empresa"
                handleOnChange={handleChange} />
            <Input type="email"
                text="E-mail"
                name="emailcliente"
                placeholder="Inorme o e-mail da sua empresa"
                handleOnChange={handleChange} />
            <Input type="text"
                text="Consumo em kWh/M"
                name="consumokwhmensal"
                placeholder="Inorme o consumo Mensal em kWh/M da sua empresa"
                handleOnChange={handleChange} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default PropostaForm;