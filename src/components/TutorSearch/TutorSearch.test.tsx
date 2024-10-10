import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TutorSearch from "./TutorSearch";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("TutorSearch", () => {
  test("renders TutorSearch component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TutorSearch />
      </QueryClientProvider>
    );
    expect(screen.getByText("Tutor Search")).toBeInTheDocument();
  });

  test("displays search button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TutorSearch />
      </QueryClientProvider>
    );
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  // Add more tests as needed
  // test("sum 2 numbers", () => {
  //   expect(1 + 2).toBe(3);
  //   expect(1 + 3).toBe(2);
  // });
});

// src/__tests__/Login.test.tsx
import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import RegistrateTutor from "../JoinCommunity/CommunityForm";
import CreateAccount from "../CreateAccount/CreateAccount";

describe("Login", () => {
  test("renders Login component", () => {
    render(<Login />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("displays email input field", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  test("displays password input field", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("allows user to type in email input field", () => {
    render(<Login />);
    const input = screen.getByPlaceholderText("Email");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(input.value).toBe("test@example.com");
  });

  test("allows user to type in password input field", () => {
    render(<Login />);
    const input = screen.getByPlaceholderText("Password");
    fireEvent.change(input, { target: { value: "password123" } });
    expect(input.value).toBe("password123");
  });

  test("displays login button", () => {
    render(<Login />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("displays username input field", () => {
    render(<CreateAccount />);
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  });

  test("displays email input field", () => {
    render(<CreateAccount />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  test("displays password input field", () => {
    render(<CreateAccount />);
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("allows user to type in username input field", () => {
    render(<CreateAccount />);
    const input = screen.getByPlaceholderText("Username");
    fireEvent.change(input, { target: { value: "testuser" } });
    expect(input.value).toBe("testuser");
  });

  test("allows user to type in email input field", () => {
    render(<CreateAccount />);
    const input = screen.getByPlaceholderText("Email");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(input.value).toBe("test@example.com");
  });

  test("allows user to type in password input field", () => {
    render(<CreateAccount />);
    const input = screen.getByPlaceholderText("Password");
    fireEvent.change(input, { target: { value: "password123" } });
    expect(input.value).toBe("password123");
  });

  test("displays create account button", () => {
    render(<CreateAccount />);
    expect(
      screen.getByRole("button", { name: /create account/i })
    ).toBeInTheDocument();
  });

  test("renders CommunityForm component", () => {
    render(<RegistrateTutor />);
    expect(screen.getByText("Community Form")).toBeInTheDocument();
  });

  test("displays community name input field", () => {
    render(<RegistrateTutor />);
    expect(screen.getByPlaceholderText("Community Name")).toBeInTheDocument();
  });

  test("displays description input field", () => {
    render(<RegistrateTutor />);
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
  });

  test("allows user to type in community name input field", () => {
    render(<RegistrateTutor />);
    const input = screen.getByPlaceholderText("Community Name");
    fireEvent.change(input, { target: { value: "Math Club" } });
    expect(input.value).toBe("Math Club");
  });

  test("allows user to type in description input field", () => {
    render(<RegistrateTutor />);
    const input = screen.getByPlaceholderText("Description");
    fireEvent.change(input, {
      target: { value: "A club for math enthusiasts" },
    });
    expect(input.value).toBe("A club for math enthusiasts");
  });

  test("displays submit button", () => {
    render(<RegistrateTutor />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  // Add more tests as needed
});
