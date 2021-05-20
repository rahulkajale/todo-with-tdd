import { fireEvent, getAllByRole, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';
import TodoList from './TodoList';
import { todos } from "../__mock__/Todos";

test("render Input and Add button", () => {
    render(<Todo />)
    const inputEle = screen.getByTestId("add-input");
    expect(inputEle).toBeInTheDocument()
    const addBtn = screen.getByRole("button", { name: /Add/i });
    expect(addBtn).toBeInTheDocument()
})

test("change in input field", () => {
    render(<Todo />)
    const inputEle = screen.getByTestId("add-input");
    const addBtn = screen.getByRole("button", { name: /Add/i });
    const inputOnChange = jest.fn();
    inputEle.onchange = inputOnChange;
    expect(inputEle.value).toEqual('');
    // expect(addBtn).toBeDisabled();
    const query = 'clean floor';
    fireEvent.change(inputEle, { target: { value: query } })
    // expect(addBtn).toBeEnabled();
    expect(inputOnChange).toBeCalledTimes(1);
    expect(inputEle.value).toEqual(query);
})

test("should call add newTodo when add button is clicked", () => {
    const newTodoData = jest.fn();
    render(<Todo newTodo={newTodoData} />);
    const addBtn = screen.getByRole("button", { name: /Add/i });
    const inputEl = screen.getByLabelText('Add Todo')

    userEvent.type(inputEl,"dwedwedwf")
    userEvent.click(addBtn)
    // expect(addBtn).toBeCalledTimes(1);
    expect(newTodoData).toHaveBeenCalled();
})
