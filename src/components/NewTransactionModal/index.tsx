import React from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <X size={22} color="#A8A8B3" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number" />
        <TransactionTypeContainer>
          <button type="button">
            <ArrowCircleUp size={20} color="#33CC95" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <ArrowCircleDown size={20} color="#E52E4D" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
