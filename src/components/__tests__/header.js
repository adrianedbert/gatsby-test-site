import React from "react"
import { render } from "react-testing-library"

import Header from "../header"

test("Displays the correct title", () => {
    const { getByTestId } = render(<Header siteTitle="Wedding Invitation"/>)
    expect(getByTestId("home-link")).toHaveTextContent("Wedding Invitation")
})
