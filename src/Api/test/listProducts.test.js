import { render, screen, waitFor } from '@testing-library/react';
import ProductsPage from '../../components/Pages/Products';
import { login, listProducts } from '../index';

jest.mock('../index', () => ({
    login: jest.fn().mockResolvedValue({ access_token: 'mockedToken' }),
    listProducts: jest.fn().mockResolvedValue({
        data: [
            { id: 1, name: 'Produto 1', description: 'Descrição 1', price: 10, status: 1, stock_quantity: 100 },
            { id: 2, name: 'Produto 2', description: 'Descrição 2', price: 20, status: 2, stock_quantity: 200 },
        ]
    }),
    deleteProduct: jest.fn().mockResolvedValue(), 
}));

describe('ProductsPage', () => {
    it('deve renderizar os itens da tabela corretamente', async () => {
        render(<ProductsPage />);

        await waitFor(() => {
            expect(screen.getByText('Produto 1')).toBeInTheDocument();
            expect(screen.getByText('Descrição 1')).toBeInTheDocument();
            expect(screen.getByText('R$10.00')).toBeInTheDocument();
            expect(screen.getByText('Em Estoque')).toBeInTheDocument();
            expect(screen.getByText('100')).toBeInTheDocument();
            
            expect(screen.getByText('Produto 2')).toBeInTheDocument();
            expect(screen.getByText('Descrição 2')).toBeInTheDocument();
            expect(screen.getByText('R$20.00')).toBeInTheDocument();
            expect(screen.getByText('Em Reposição')).toBeInTheDocument();
            expect(screen.getByText('200')).toBeInTheDocument();
        });

        expect(login).toHaveBeenCalledTimes(1);
        expect(listProducts).toHaveBeenCalledTimes(1);
    });

});

