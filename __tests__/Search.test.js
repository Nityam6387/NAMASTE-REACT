import { render , screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Body from "../src/components/Body"
import MOCK_DATA from "../mocks/mockResListData.json"

global.fetch = jest.fn(() => {    //its a kind of boilerplate code to enable fetch function in js-dom
    return Promise.resolve({
    json: () => {
        return Promise.resolve(MOCK_DATA);
    },
    });
});


it("Should be render Body Component with search button" , () => {
    render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    );

    const searchBtn = screen.getByText("Search");

    expect(searchBtn).toBeInTheDocument();
})