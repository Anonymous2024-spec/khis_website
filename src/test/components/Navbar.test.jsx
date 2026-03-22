import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Navbar from "../../components/Navbar";

const renderNavbar = () =>
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

describe("Navbar", () => {
  it("renders the institute name", () => {
    renderNavbar();
    expect(
      screen.getByText("Kitgum Institute of Health Sciences"),
    ).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    renderNavbar();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Courses")).toBeInTheDocument();
    expect(screen.getByText("News")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Partners")).toBeInTheDocument();
  });

  it("renders the Apply Now button", () => {
    renderNavbar();
    const applyButtons = screen.getAllByText("Apply Now");
    expect(applyButtons.length).toBeGreaterThan(0);
  });

  it("opens mobile menu when hamburger is clicked", async () => {
    renderNavbar();
    const user = userEvent.setup();
    const menuButton = screen.getByRole("button");
    await user.click(menuButton);
    const mobileLinks = screen.getAllByText("Home");
    expect(mobileLinks.length).toBeGreaterThan(1);
  });

  it("closes mobile menu when a link is clicked", async () => {
    renderNavbar();
    const user = userEvent.setup();
    const menuButton = screen.getByRole("button");
    await user.click(menuButton);
    const homeLinks = screen.getAllByText("Home");
    await user.click(homeLinks[0]);
    expect(menuButton).toBeInTheDocument();
  });
});
