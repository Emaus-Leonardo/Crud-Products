import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductsPage from '../../components/Pages/Products';
import { deleteProduct } from '../index';

jest.mock('../index', () => ({
  login: jest.fn().mockResolvedValue({ access_token: 'mocked_access_token' }),
  deleteProduct: jest.fn().mockResolvedValue(),
  listProducts: jest.fn().mockResolvedValue({
    data: [
      { id: 1, name: 'Produto 1', description: 'Descrição 1', price: 10.0, status: 1, stock_quantity: 5 },
    ],
  }),
}));

describe('ProductsPage', () => {
  it('deve deletar um produto ao clicar no botão de deletar', async () => {

    jest.spyOn(window, 'confirm').mockImplementation(() => true);

    render(<ProductsPage />);

    await waitFor(() => expect(screen.getByText('Lista De Produtos')).toBeInTheDocument());

    const deleteButton = await waitFor(() => screen.getByTestId('product-delete-button-1'));
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);

    await waitFor(() => expect(deleteProduct).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(deleteProduct).toHaveBeenCalledWith('mocked_access_token', 1));

    await waitFor(() => expect(screen.queryByTestId('product-delete-button-1')).not.toBeInTheDocument());

    await waitFor(() => expect(screen.getByText('Produto deletado com sucesso!')).toBeInTheDocument());
  });
});
