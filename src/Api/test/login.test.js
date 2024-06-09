import { login } from "../index"; 

jest.mock('axios', () => ({
    post: jest.fn()
}));

describe('login', () => {
    it('deve retornar dados após o login', async () => {
        const mockedResponse = { data: { userId: 123, token: 'mockedToken' } };
        require('axios').post.mockResolvedValue(mockedResponse);

        const userData = await login();

        expect(userData).toEqual({ userId: 123, token: 'mockedToken' });
    });

    it('deve retornar erro de login', async () => {
        const mockedError = new Error('Login failed');
        require('axios').post.mockRejectedValue(mockedError);

        await expect(login()).rejects.toThrow('Login failed'); 
    });

    it('deve lidar corretamente com outras exceções', async () => {
        const mockedError = new Error('Outra exceção');
        require('axios').post.mockRejectedValue(mockedError);

        await expect(login()).rejects.toThrow('Outra exceção'); 
    });
});
