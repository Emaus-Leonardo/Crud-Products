import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "../../components/Header";

describe('Header', () => {
    it('deve renderizar os links de navegação e mudar a URL ao clicar', () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        const links = screen.getAllByRole('link');

        const homeLink = links.find(link => link.textContent === 'Home');
        const productsLink = links.find(link => link.textContent === 'Lista de Produtos');
        const aboutLink = links.find(link => link.textContent === 'Sobre');

        expect(homeLink).toBeInTheDocument();
        expect(productsLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();

        fireEvent.click(homeLink);
        expect(window.location.pathname).toBe('/');

        fireEvent.click(productsLink);
        expect(window.location.pathname).toBe('/products');

        fireEvent.click(aboutLink);
        expect(window.location.pathname).toBe('/about');
    });
});