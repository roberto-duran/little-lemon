import {render, screen, fireEvent, getByTestId, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import BookingForm from "../components/pages/booking/components/BookingForm.jsx";
import { BrowserRouter} from "react-router-dom";

describe("Booking Form Heading", () => {
    const availableTimes = [
        "17:00",
        "17:30",
        "18:30",
        "19:00",
        "20:30",
        "21:00",
        "22:00",
        "23:30"
    ];
    test('Renders the BookingForm heading', () => {
        render(
            <BrowserRouter>
                <BookingForm availableTimes={availableTimes} />
            </BrowserRouter>);
        const headingElement = screen.getByText("Reservation");
        expect(headingElement).toBeInTheDocument();
    });

    test('should show validation on click on submit', async () => {
        render(
            <BrowserRouter>
                <BookingForm availableTimes={availableTimes} />
            </BrowserRouter>);
        const button = screen.getByText("Make Reservation");
        fireEvent.click(button);

        await waitFor(() => {
            const error = screen.getByTestId("nameError")
            expect(error).toHaveTextContent("Required");
        });
    });

    test('should submit form', async () => {
        render(
            <BrowserRouter>
                <BookingForm availableTimes={availableTimes} />
            </BrowserRouter>);
        const button = screen.getByText("Make Reservation");
        fireEvent.click(button);

        await waitFor(() => {
            const error = screen.getByTestId("nameError")
            expect(error).toHaveTextContent("Required");
        });
    });
});

