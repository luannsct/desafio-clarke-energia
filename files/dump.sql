create database desafio_clarke_energia

DROP TABLE IF EXISTS "supplier";

CREATE TABLE "supplier" (
  id SERIAL PRIMARY KEY,
  nome varchar(255),
  logo varchar(255),
  estado varchar(50) default NULL,
  custokwh numeric(27,5) default NULL,
  khwminimo numeric(27,5) NULL,
  clientes integer(27),
  avaliacaomedia numeric(1,1)
);
CREATE TABLE price(
	id SERIAL PRIMARY KEY,
  id_fornecedor integer REFERENCES supplier(id),
  emailCliente varchar(255) NOT NULL  
)

insert into supplier (nome,logo,estado,custokwh,khwminimo,clientes,avaliacaomedia) values
('Moreira, Nogueira and Franco','https://fastly.picsum.photos/id/584/200/300.jpg?hmac=sBfls3kxMp0j0qH3R-K2qM8Wyak1FlpOIgtcd7cEg68','Rio Grande do Norte','0.7851','148.7244','2378',3.8),
  ('Costa e Associados','https://fastly.picsum.photos/id/409/200/300.jpg?hmac=DMEn4qNc0DsvxlQ4NSDPOesRyq8VhhGEi6IXy2DblLk','Maranhão','0.7227','221.6040','1504',5.0),
  ('Macedo - Santos','https://fastly.picsum.photos/id/1061/200/300.jpg?hmac=wvuhffnNEQ5g9Q0f7LZiEvh6JEJqL3ppJuHT2M_YJLI','Distrito Federal','0.4984','147.0951','1028',1.7),
  ('Moraes - Macedo','https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY','Roraima','0.6070','354.4698','1241','2.8'),
  ('Nogueira S.A.','https://fastly.picsum.photos/id/279/200/300.jpg?hmac=fYDbVmnm7vDGt7SA51v-qMUKHIn7HKCp5v9d8Wx_SVM','Sergipe','0.4858','320.8916','1913','4.0'),
  ('Carvalho, Xavier and Franco','https://fastly.picsum.photos/id/642/200/300.jpg?hmac=P8pCy5u7t4JlHkwIUFsWxnCfi2bWmYGey75V_299YPg','Goiás','0.7733','43.2847','1492','4.4'),
  ('Xavier - Batista','https://fastly.picsum.photos/id/234/200/300.jpg?hmac=KD9xFDCez7-lqgcMm-EEi7BtpClIdCzJS6YvFVyLiDs','Amapá','0.9001','434.3285','168','3.8'),
  ('Pereira, Carvalho and Pereira','https://fastly.picsum.photos/id/767/200/300.jpg?hmac=j5YA1cRw-jS6fK3Mx2ooPwl2_TS3RSyLmFmiM9TqLC4','Mato Grosso do Sul','0.5072','285.5154','1037','3.4'),
  ('Batista, Macedo and Souza','https://fastly.picsum.photos/id/570/200/300.jpg?hmac=fMlqjNmBSgN75P_tCU-PVSGzRYQxU23Xqd593HxZSZQ','Amazonas','0.9343','393.1120','324','4.8'),
  ('Albuquerque - Braga','https://fastly.picsum.photos/id/573/200/300.jpg?hmac=3xlTAEXK1dTOXmwZnXwdOV0tTFX1rbg_wL_cava2HfE','Amapá','0.9306','38.7660','1425','1.1'),
  ('Oliveira, Barros and Silva','https://fastly.picsum.photos/id/183/200/300.jpg?hmac=Z9yCtuuIPn5CuOhwIntNEQFIRotghuBn06nqOSL828c','Paraíba','0.8359','376.1202','1848','2.8'),
  ('Nogueira - Santos','https://fastly.picsum.photos/id/280/200/300.jpg?hmac=M5LGtIQZPTGPTTmFXFcgUUV0zXG6sy-bGJ6zDZHedA0','Distrito Federal','0.6465','184.7826','1425','3.5'),
  ('Moraes e Associados','https://fastly.picsum.photos/id/397/200/300.jpg?hmac=9VBInLrifj_yyc2JuJSAVIfj9yQdt5Ovm2sHmvva-48','Rondônia','0.7364','161.7207','838','5.0'),
  ('Moraes Comércio','https://fastly.picsum.photos/id/781/200/300.jpg?hmac=BPGlXlV8K6X2z4SJCt86Qh1io6ezZBBdynv-QiXwLro','Santa Catarina','0.8460','159.7524','744','1.3'),
  ('Xavier, Moraes and Reis','https://fastly.picsum.photos/id/349/200/300.jpg?hmac=gEjHZbjuKtdD2GOM-qQtuaA95TCvDUs6iVvKraQ94nU','Tocantins','0.8142','413.4487','2326','1.9'),
  ('Braga, Batista and Carvalho','https://fastly.picsum.photos/id/692/200/300.jpg?hmac=qoaBsJRR_eEfM9cuFXDECrJYjrebuLirYg5r7H_VVok','Ceará','0.5020','178.6543','1392','1.5'),
  ('Silva, Braga and Barros','https://fastly.picsum.photos/id/317/200/300.jpg?hmac=HdC0gWrND7JkZOjptTsv0Wgbwwbml12B2V7WejQx8Ao','Maranhão','0.6236','417.0231','465','3.4'),
  ('Saraiva, Moreira and Melo','https://fastly.picsum.photos/id/307/200/300.jpg?hmac=35wY422fzycUwe-jX9k1JwdWurkBiowwCBswfyVXY4E','Roraima','0.9000','277.7310','2209','3.5'),
  ('Saraiva - Xavier','https://fastly.picsum.photos/id/834/200/300.jpg?hmac=9hu4aro5r8PEFwzVlhizygx4urxyeGGjgyMRXUgKOsE','Sergipe','0.5301','126.6976','1587','4.1'),
  ('Nogueira - Xavier','https://fastly.picsum.photos/id/1036/200/300.jpg?hmac=VF4u-vITiP0ezQiSbE3UBvxHDFf8ZqJDycaAIoffsCg','Ceará','0.8584','390.3612','2089','1.5'),
  ('Batista S.A.','https://fastly.picsum.photos/id/319/200/300.jpg?hmac=-xZWQr-2igun1QhUD5zoRCQKvRl7bjB_gIbQuv26oj0','Piauí','0.5091','213.4633','469','3.3'),
  ('Moreira - Carvalho','https://fastly.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k','Rio Grande do Sul','0.6741','445.8740','24','3.7'),
  ('Reis - Moraes','https://fastly.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA','Mato Grosso do Sul','0.6542','344.8702','1164','3.7'),
  ('Albuquerque, Braga and Pereira','https://fastly.picsum.photos/id/160/200/300.jpg?hmac=RM8ofyEQBOl_xUcD4r_IVw6CQeVY8AQ4qtdM8js1D18','Rio de Janeiro','0.9475','400.9900','185','1.7'),
  ('Moraes, Xavier and Moreira','https://fastly.picsum.photos/id/280/200/300.jpg?hmac=M5LGtIQZPTGPTTmFXFcgUUV0zXG6sy-bGJ6zDZHedA0','Amazonas','0.5881','396.6400','1122','3.4'),
  ('Batista - Silva','https://fastly.picsum.photos/id/558/200/300.jpg?hmac=RQvEcTitB2RoOqzwdtXcjckM1FybfSHIq676zecLvkw','Maranhão','0.4800','281.1813','504','2.6'),
  ('Braga - Pereira','https://fastly.picsum.photos/id/671/200/300.jpg?hmac=I6A0nYPaPDSVj8NEal4lbRDDN6E617I8S8Pc3ulWHS8','Rio Grande do Norte','0.8007','222.3594','539','3.4'),
  ('Santos LTDA','https://fastly.picsum.photos/id/357/200/300.jpg?hmac=rK03ZiTfDr2EKKfNNjF58dSVmtnPicb3anbbvMkGm1M','Mato Grosso do Sul','0.6072','230.8175','1585','4.7'),
  ('Saraiva e Associados','https://fastly.picsum.photos/id/507/200/300.jpg?hmac=v0NKvUrOWTKZuZFmMlLN_7-RdRgeF-qFLeBGXpufxgg','Amapá','0.9620','479.9229','432','1.9'),
  ('Xavier - Pereira','https://fastly.picsum.photos/id/596/200/300.jpg?hmac=pVPfm7n4UQpHw17xww_PzqSAFP5JYEJo6qGFtPJxxA0','Espírito Santo','0.8717','328.5087','385','1.9'),
  ('Albuquerque, Martins and Carvalho','https://fastly.picsum.photos/id/252/200/300.jpg?hmac=ztShXZawU4GkXMN_-8Bdh5utWr0FM5ekFynI1fJxvtc','Roraima','0.6007','52.4368','227','1.6'),
  ('Pereira - Silva','https://fastly.picsum.photos/id/546/200/300.jpg?hmac=WRVm_tMObPuM2HqJCr5D6N59Mboh73aqEno4MCuu5AE','Rio Grande do Norte','0.8247','251.3895','2354','1.7'),
  ('Albuquerque e Associados','https://fastly.picsum.photos/id/338/200/300.jpg?hmac=rE5P3WDLKY1VMpd9y_FLo_OKhTzG4_3zCbGjKvgOL5w','Ceará','0.7545','111.1715','2170','3.4'),
  ('Moreira, Saraiva and Melo','https://fastly.picsum.photos/id/788/200/300.jpg?hmac=86XnLHCHcI7HWgr9Y662VsXxUxs7H70DjGHc_6iaIw4','São Paulo','0.4658','464.9103','1891','3.6'),
  ('Moreira, Silva and Santos','https://fastly.picsum.photos/id/29/200/300.jpg?hmac=LrtD-VNd4eRyyMbqI05Mpy4EQNgTdZkSEt5ULyXx4lw','Acre','0.5402','457.8986','1121','3.1'),
  ('Pereira, Reis and Braga','https://fastly.picsum.photos/id/822/200/300.jpg?hmac=L4-fkLPiZOUXQokdDk0s2gcjb6w_zq1DGU7WybDqrj0','Mato Grosso','0.5613','376.2249','418','4.5'),
  ('Melo, Moraes and Pereira','https://fastly.picsum.photos/id/790/200/300.jpg?hmac=FVbUQYv_h5C4v5_RAIja_q1c5UShyHhRu6C7DvjZM8U','Tocantins','0.6112','396.0696','1937','2.5'),
  ('Xavier - Martins','https://fastly.picsum.photos/id/132/200/300.jpg?hmac=oY1bslA1BJLjQ_GRTPoSm_Mtps2WtlDyfll3uIayrVQ','Distrito Federal','0.6203','35.2252','2294','5.0'),
  ('Costa, Martins and Braga','https://fastly.picsum.photos/id/832/200/300.jpg?hmac=6gMt7WeRsS41_901ujRTrOgfwtW9MBZ375g8qXO3LUc','Mato Grosso do Sul','0.8518','222.4983','199','2.2'),
  ('Albuquerque - Barros','https://fastly.picsum.photos/id/951/200/300.jpg?hmac=88jOMC9sFPf_Y7l4aMvDLBsqNuoprR9_Rvvbqb0oRPA','Maranhão','0.7915','80.1058','707','1.7')