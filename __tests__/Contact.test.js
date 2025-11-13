import { render , screen} from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases" , () => {

     it("Should be load Contact Us Component" , () => {

    render(<Contact/>)  //render Contact component into jsdom envoirnment

    const heading = screen.getByRole("heading"); //to get access of that renderd component through screen object i.e Querying
    expect(heading).toBeInTheDocument() ; //Assertion

})

it("Should be load button inside Contact Us Component" , () => {
    render(<Contact/>)  //render Contact component into jsdom envoirnment

    // const heading = screen.getByRole("button");
         const button = screen.getByText("Submit"); //to get access of that renderd component through screen object i.e Querying
    expect(button).toBeInTheDocument() ; //Assertion
})

test("Should be load input inside Contact Us Component" , () => {
    render(<Contact/>)  //render Contact component into jsdom envoirnment

    // const heading = screen.getByRole("button");
         const inputName= screen.getByPlaceholderText("Name..."); //to get access of that renderd component through screen object

        expect(inputName).toBeInTheDocument() ; //Assertion
})



test("Should be load 2 input box inside Contact Us Component" , () => {
    render(<Contact/>)  //render Contact component into jsdom envoirnment

    // const heading = screen.getByRole("button");
         const inputBoxes = screen.getAllByRole("textbox"); //to get access of that renderd component through screen object
        console.log(inputBoxes.length);    //returns an array of piece of JSX which is a react element/virtualDom/React fibre node

         expect(inputBoxes.length).toBe(2) ; //Assertion
})

})

