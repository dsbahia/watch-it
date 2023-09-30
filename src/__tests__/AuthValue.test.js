import { render } from "@testing-library/react";
import {
  AuthProvider,
  AuthContext,
} from "../components/Registration/AuthContext";

describe("<AuthProvider />", () => {
  test("provides expected AuthContext obj to child elements", () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>,
    );
  });
});
