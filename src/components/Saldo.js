import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Saldo = () => {
  const { transacoes } = useContext(GlobalContext);
  // Cálculo dos valores adicionados
  /*  const montante = transacoes.map(transacoes => transacoes.valoradc);
    const total = montante.reduce((acc, item) => (acc += item), 0).toFixed(2); */

  const rendas = transacoes
    .filter((item) => item.tipo === "0")
    .reduce((acc, item) => (acc += item.valoradc), 0)
    .toFixed(2);

  const despesas = transacoes
    .filter((item) => item.tipo === "1")
    .reduce((acc, item) => (acc += item.valoradc), 0)
    .toFixed(2);

  const total = (rendas - despesas).toFixed(2);

  return (
    <div className="titulo-saldo">
      <h5>Seu Saldo</h5>
      <h1 id="balance">R$ {total}</h1>
    </div>
  );
};
