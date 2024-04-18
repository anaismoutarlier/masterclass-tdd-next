import Home from "@/app/page";
import { render, screen, fireEvent } from "@testing-library/react";

test("Link image has correct alt text", () => {
  render(<Home />);
  const links = screen.queryAllByRole("link");
  const homeLink = links.find(link =>
    link.href.startsWith("https://vercel.com/?")
  );
  expect(homeLink).toBeDefined();

  const logoImage = [...homeLink.children].find(el =>
    el?.alt?.match(/vercel logo/i)
  );
  expect(logoImage).toBeInTheDocument();
});

test("Button increments displayed value", () => {
  render(<Home />);

  const display = screen.getByTestId("counter-display");
  expect(display).toHaveTextContent("0");
  const button = screen.getByTestId("counter-increment-button");
  fireEvent.click(button);
  const displayAfterClick = screen.getByTestId("counter-display");
  expect(displayAfterClick).toHaveTextContent("1");
});
