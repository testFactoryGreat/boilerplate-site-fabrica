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
    title: "Tests Especification",
    text: `We work with a test especification proccess optimized and with assurance about test quality`,
  },
  {
    id: 2,
    icon: <img src={funcionais} width="50%" height="50%" />,
    title: "Manual tests",
    text: `We use manual tests based on a great specification that allow us to validate many software aspects`,
  },
  {
    id: 3,
    icon: <img src={estresse} width="50%" height="50%" />,
    title: "Test automation",
    text: `Beyond manual tests, we work on test automation too, improving our time of execution`,
  },
  {
    id: 4,
    icon: <img src={usabilidade} width="50%" height="50%" />,
    title: "Trainings",
    text: `We apply training camps to improve your team's skills`,
  },
  {
    id: 5,
    icon: <img src={heuristica} width="50%" height="50%" />,
    title: "Consulting",
    text: `We provide consulting to bring solutions to your company, and improve your software quality`,
  },
  {
    id: 6,
    icon: <img src={ux} width="50%" height="50%" />,
    title: "Applied Research",
    text: `We make scientific researchs to inovate solutions on Test Software area`,
  },
]
