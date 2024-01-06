import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Rating from '@mui/material/Rating';
import SubmitButton from '../form/SubmitButton'
import styles from '../styles/CartaoInformacoes.module.css'
export default function RecipeReviewCard() {


    const value = 3.8

    return (
        <Card sx={{ maxWidth: 345 }} className={styles.cartao_informacoes_fornecedores}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img src='https://fastly.picsum.photos/id/584/200/300.jpg?hmac=sBfls3kxMp0j0qH3R-K2qM8Wyak1FlpOIgtcd7cEg68' />
                    </Avatar>
                }
                title="Nome da Empresa"
            // subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://fastly.picsum.photos/id/584/200/300.jpg?hmac=sBfls3kxMp0j0qH3R-K2qM8Wyak1FlpOIgtcd7cEg68"
                alt="Nome da Empresa"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <ul>
                        <li>Estado Origem: Rio Grande do Norte</li>
                        <li>Custo por kWh: 0.7851</li>
                        <li>KWH minimo: 148.7244</li>
                        <li>Quantidade de Clientes: 2378</li>
                        <li>Avaliação: </li>
                    </ul>

                    <Rating name="Avaliação" value={value} precision={0.5} readOnly />

                </Typography>

            </CardContent>
            <SubmitButton text='Solicitar Cotação' />
        </Card>
    );
}