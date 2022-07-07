import React, { useContext } from "react";
import { Container } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color="#33CC95" />
        </header>
        <strong>R$ 1300,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown size={32} color="#E52E4D" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 800,00</strong>
      </div>
    </Container>
  );
}
