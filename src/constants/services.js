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
    icon: <img src={desempenho} width="50%" height="50%" />,
    title: "Especificação de Testes",
    text: `Trabalhamos com um processo de especificação de testes otimizado e que nos permite garantir testes de qualidade`,
  },
  {
    id: 2,
    icon: <img src={funcionais} width="50%" height="50%" />,
    title: "Execução de testes manuais",
    text: `Fazemos uso da técnica de execução de testes manuais baseados em uma especificação rica e que nos permite validar diversos aspectos do software`,
  },
  {
    id: 3,
    icon: <img src={estresse} width="50%" height="50%" />,
    title: "Automação de testes",
    text: `Além dos testes manuais, atuamos também na automação, otimizando o tempo de execução dos testes`,
  },
  {
    id: 4,
    icon: <img src={usabilidade} width="50%" height="50%" />,
    title: "Treinamentos",
    text: `Realizamos treinamento de forma constante na equipe, buscando sempre estar alinhado com as melhores tecnologias da atualidade`,
  },
  {
    id: 5,
    icon: <img src={heuristica} width="50%" height="50%" />,
    title: "Consultoria",
    text: `Atuamoas também prestando consultoria e trazendo soluções para dentro da sua empresa, garantindo a qualidade do seu software`,
  },
  {
    id: 6,
    icon: <img src={ux} width="50%" height="50%" />,
    title: "Pesquisa Aplicada",
    text: `Além de profissionais certificados, temos influência da academia em nossas atividades, com pesquisas constantes por parte do corpo discente de mestres e doutores da UFC`,
  },
]
