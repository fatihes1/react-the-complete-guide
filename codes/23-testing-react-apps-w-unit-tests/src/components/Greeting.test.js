import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greetings component", () => {
  test("Renders Hello world as a text", () => {
    // Three 'A's of testing:
    // Arrange: set up the test data, test conditions, and test environment
    render(<Greeting />);

    // Act: Run logic that should be tested,
    //      in this case, render the component so nothing to do here

    // Assert: Compare execution results with expected results
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was not clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.getByText("Changed!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    // expect(outputElement).not.toBeInTheDocument();
    expect(outputElement).toBeNull();
  });
});
