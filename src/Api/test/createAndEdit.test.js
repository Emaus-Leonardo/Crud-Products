import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormProducts from '../../components/FormProducts';
import { login, createProducts, editProduct } from '../index';
import { toast } from 'react-toastify';

jest.mock('../index', () => ({
    login: jest.fn().mockResolvedValue({ access_token: 'mockedToken' }),
    createProducts: jest.fn().mockResolvedValue({}),
    editProduct: jest.fn().mockResolvedValue({}), 
}));

jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn()
    }
}));

describe('FormProducts', () => {
    const onProductCreatedMock = jest.fn();
    const onCloseModalMock = jest.fn();
    const editingProduct = {
        id: 1,
        name: 'Produto Editado',
        description: 'Descrição editada',
        price: 15,
        status: 1,
        stock_quantity: 10,
    }; 

    beforeEach(() => {
        jest.clearAllMocks();
        window.confirm = jest.fn().mockImplementation(() => true); 
    });

    it('deve cadastrar um produto corretamente', async () => {
        render(
            <FormProducts
                onProductCreated={onProductCreatedMock}
                onCloseModal={onCloseModalMock}
            />
        );

        fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Produto Teste' } });
        fireEvent.change(screen.getByLabelText('Descrição'), { target: { value: 'Descrição do produto teste' } });
        fireEvent.change(screen.getByLabelText('Preço'), { target: { value: '10' } });
        fireEvent.change(screen.getByLabelText('Quantidade em Estoque'), { target: { value: '5' } });

        fireEvent.click(screen.getByText('Cadastrar'));

        await waitFor(() => {
            expect(login).toHaveBeenCalled();
        });

        await waitFor(() => {
            expect(createProducts).toHaveBeenCalledWith('mockedToken', {
                id: 1,
                name: 'Produto Teste',
                description: 'Descrição do produto teste',
                price: 10,
                status: 1,
                stock_quantity: 5,
            });
        });

        await waitFor(() => {
            expect(toast.success).toHaveBeenCalledWith('Produto cadastrado com sucesso!');
        });
    });


    it('deve editar um produto corretamente', async () => {
        render(
            <FormProducts
                isEditing={true}
                editingProduct={editingProduct} 
                onProductCreated={onProductCreatedMock}
                onCloseModal={onCloseModalMock}
            />
        );

        fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Produto Teste Editado' } });
        fireEvent.change(screen.getByLabelText('Descrição'), { target: { value: 'Descrição do produto teste editada' } });
        fireEvent.change(screen.getByLabelText('Preço'), { target: { value: '20' } });
        fireEvent.change(screen.getByLabelText('Status'), { target: { value: '2' } });
        fireEvent.change(screen.getByLabelText('Quantidade em Estoque'), { target: { value: '8' } });

        fireEvent.click(screen.getByText('Atualizar'));

        await waitFor(() => {
            expect(login).toHaveBeenCalled();
        });

        await waitFor(() => {
            expect(editProduct).toHaveBeenCalledWith('mockedToken', editingProduct.id, {
                id: editingProduct.id,
                name: 'Produto Teste Editado',
                description: 'Descrição do produto teste editada',
                price: 20,
                status: 2,
                stock_quantity: 8,
            });
        });

        await waitFor(() => {
            expect(toast.success).toHaveBeenCalledWith('Produto atualizado com sucesso!');
        });
    });
});
