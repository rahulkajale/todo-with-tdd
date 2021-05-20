import { getAllByRole, render, screen, fireEvent, prettyDOM } from '@testing-library/react';
import { renderIntoDocument } from 'react-dom/test-utils';
import TodoList from "./components/TodoList"
import { todos } from "./__mock__/Todos"
import App from './App';
import userEvent from '@testing-library/user-event';


describe('[App Component]', () => {
  it("should render the app component vhvhg", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  })

  it("should have header as Todo List", () => {
    render(<App />);
    expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
  })

  it("should execute addTodo function", () => {
    const {container}=render(<App />);
    // console.log(prettyDOM(container))

    // const newTodoData = {
    //   title: "Clean Desk",
    //   completed: false,
    //   isEditing: false
    // }
    // const addTodo = jest.fn();
    // const addBtn = screen.getByRole("button", { name: /Add/i });
    // addBtn.onclick = addTodo
    // fireEvent.click(addBtn)
    // expect(addTodo).toBeCalledTimes(1);
    // const todoList = screen.getAllByRole("listitem");
    // expect(todoList).toHaveLength(3);
  })
});
