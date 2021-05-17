import { fireEvent, getAllByRole, render, screen, within } from '@testing-library/react';
import App from '../App'
import TodoList from "./TodoList"
import { todos } from "../__mock__/Todos";
import userEvent from '@testing-library/user-event';

test("should render buttons accordingly", () => {
    render(<TodoList list={todos}></TodoList >);
    const markCompleteBtns = screen.getAllByRole("button", {
        name: /Mark Complete/i
    });
    expect(markCompleteBtns.length).toBe(2);

    userEvent.click(markCompleteBtns[0])
    expect(screen.getAllByRole('listitem')[0]).toHaveClass("green")

    const markIncompleteBtn = screen.getAllByRole("button", {
        name: /Mark Incomplete/i
    })

    expect(screen.getAllByRole('listitem')[1]).toHaveClass("red")
    expect(markIncompleteBtn.length).toBe(1);

    const editButtons = screen.getAllByRole("button", {
        name: /Edit/i
    });

    expect(editButtons.length).toBe(2);
    userEvent.click(editButtons[0])

    const inputEle = screen.getByTestId("input")
    const inputOnChange = jest.fn();
    inputEle.onchange = inputOnChange;
    expect(inputEle).toBeInTheDocument()
    expect(inputEle.value).toEqual('');
    const title = 'read book';
    fireEvent.change(inputEle, { target: { value: title } })
    expect(inputOnChange).toBeCalledTimes(1);
    expect(inputEle.value).toEqual(title);
})
