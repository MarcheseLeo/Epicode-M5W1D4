import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { fireEvent } from "@testing-library/react";
import App from './App'
import { Target } from "lucide-react";

describe('Testing App copmponent', () => {
    it('should filter the book list based on text entered', () => {
        render(<App />)
        const input = screen.getByPlaceholderText(/Cerca un libro/i)

        fireEvent.change(input, { target: { value: 'the' } })
        const filteredBooks = screen.getAllByText(/The/i)

        expect(filteredBooks.length).toBeGreaterThan(0)

        fireEvent.change(input, { target: { value: 'last' } })
        const secondFilteredBooks = screen.getAllByText(/last/i)

        expect(secondFilteredBooks.length).toBeGreaterThan(0)
        expect(screen.queryByText(/destiny grimoire/i)).not.toBeInTheDocument();

        fireEvent.change(input, { target: { value: '' } });

        expect(screen.queryByText(/destiny grimoire/i)).toBeInTheDocument();
    })
})
