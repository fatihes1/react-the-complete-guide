import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // Mocking the fetch function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    // Arrange
    render(<Async />);
    // Act
    // ...
    // Assert
    // const listItemElements = screen.getAllByRole("listitem");

    // The following line is the correct way to test for async code because it will respond as a promise

    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
