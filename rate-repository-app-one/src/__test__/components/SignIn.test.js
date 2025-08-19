import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { SignInForm } from "../../components/SignIn";
// ...

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
    const onSubmit = jest.fn();
    render(<SignInForm onSubmit={onSubmit} />);

    const signIn = { userName: "kalle", password: "password" };    
    fireEvent.changeText(screen.getByPlaceholderText("User Name"), signIn.userName);
    fireEvent.changeText(screen.getByPlaceholderText("Password"), signIn.password);
        fireEvent.press(screen.getByText("Sign In"));
        
      await waitFor(() => {
          // expect the onSubmit function to have been called once and with a correct first argument
              expect(onSubmit).toHaveBeenCalledTimes(1);

              // onSubmit.mock.calls[0][0] contains the first argument of the first call
              expect(onSubmit.mock.calls[0][0]).toEqual({
                userName: "kalle",
                password: "password",
              });
      });
    });
  });
});
