import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

test("Button component renders HTML button", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Button accepts props", () => {
  let i = 0;

  const handleClick = () => {
    i++;
  };

  render(<Button onClick={handleClick}>Test</Button>);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(i).toBe(1);
  expect(button).toHaveTextContent("Test");
});

test("Button is red by default", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: red");
});

test("Button accepts custom color", () => {
  render(<Button backgroundColor="green" />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: green");
});
