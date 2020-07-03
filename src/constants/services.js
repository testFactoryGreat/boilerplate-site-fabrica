import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
import estresse from "../assets/estresse.png"
import funcionais from "../assets/funcionais.png"
import desempenho from "../assets/desempenho.png"
import heuristica from "../assets/heuristica.png"
import ux from "../assets/ux.png"
import usabilidade from "../assets/usabilidade.png"
export default [
  {
    id: 1,
    icon: <img src={funcionais} width="50%" height="50%" />,
    title: "Testes Funcionais",
    text: `Avaliamos se sua aplicação funciona como esperado`,
  },
  {
    id: 2,
    icon: <img src={desempenho} width="50%" height="50%" />,
    title: "Testes de Desempenho",
    text: `Validamos o comportamento da aplicação para a carga e tempo de resposta esperados`,
  },
  {
    id: 3,
    icon: <img src={estresse} width="50%" height="50%" />,
    title: "Testes de Estresse",
    text: `Testamos o comportamento da aplicação mediante cargas não esperadas de cargas de trabalho (e.g., número muito alto de usuários simultâneos)`,
  },
  {
    id: 4,
    icon: <img src={usabilidade} width="50%" height="50%" />,
    title: "Testes de Usabilidade",
    text: `Observamos e analisamos usuários reais utilizando a aplicação para identificar problemas que prejudiquem a percepção do usuário quanto ao aplicativo`,
  },
  {
    id: 5,
    icon: <img src={heuristica} width="50%" height="50%" />,
    title: "Inspeção Heurística",
    text: `Prestamos consultoria da usabilidade de sistemas através de técnicas utilizadas por especialistas experientes`,
  },
  {
    id: 6,
    icon: <img src={ux} width="50%" height="50%" />,
    title: "Avaliação da Experiência do Usuário (UX)",
    text: `Atuamos também na avaliação da experiência do usuário ao utilizar a aplicação`,
  },
]
