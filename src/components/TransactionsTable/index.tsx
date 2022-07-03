import { TrashSimple } from "phosphor-react";
import React from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Deesenvolvimento</td>
            <td>20/02/2021</td>
            <td>
              <TrashSimple size={24} color="#969CB2" />
            </td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 600</td>
            <td>Moradia</td>
            <td>15/02/2021</td>
            <td>
              <TrashSimple size={24} color="#969CB2" />
            </td>
          </tr>
          <tr>
            <td>Supermercado</td>
            <td className="withdraw">-R$ 450</td>
            <td>Alimentação</td>
            <td>28/02/2021</td>
            <td>
              <TrashSimple size={24} color="#969CB2" />
            </td>
          </tr>
          <tr>
            <td>Auto Posto</td>
            <td className="withdraw">-R$ 200</td>
            <td>Combustível</td>
            <td>02/02/2021</td>
            <td>
              <TrashSimple size={24} color="#969CB2" />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
