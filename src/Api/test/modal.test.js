import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsPage from "../../components/Pages/Products";

describe('ProductsPage', () => {
    it('deve abrir e fechar o modal que contem o cadastro de produtos', () => {
        render(<ProductsPage />);

        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
        fireEvent.click(screen.getByTestId("+ Adcionar"));

        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
        fireEvent.click(screen.getByTestId("close-button"))

        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    });
});