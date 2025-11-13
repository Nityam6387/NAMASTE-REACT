import { fireEvent, render , screen } from "@testing-library/react"
import Header from "../src/components/Header"
import appStore from "../src/utils/appStore"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

it("Should be render header component with login button" , () => {

    //Rendering

       render(<BrowserRouter>       
    <Provider store = {appStore}>  //in header component there is redux and routing dom code which is part of extrenal library which is react-redux and react-router-dom so we need to wrap the test cases with that library..
       <Header/>
    </Provider>
        </BrowserRouter>)

    //Querying
    const loginbtn = screen.getByRole("button" , {name : "Login"});
    // const loginbtn = screen.getByRole("button");
    // const loginbtn = screen.getByText("Login");

    //Assertion
    expect(loginbtn).toBeInTheDocument();
})

it("Should be load header component with Cart (0)" , () => {
        render(<BrowserRouter>       
    <Provider store = {appStore}>
       <Header/> 
    </Provider>
        </BrowserRouter>)

    //Querying

    const cartBtn = screen.getByText("Cart (0)");

    //Assertion

    expect(cartBtn).toBeInTheDocument();
})

it("Should be load header component with Cart" , () => {
        render(<BrowserRouter>       
    <Provider store = {appStore}>
       <Header/>
    </Provider>
        </BrowserRouter>)

    //Querying

      const cartButton = screen.getByText(/Cart/); //using regex its ensure to find "Cart" text

    //Assertion

    expect(cartButton).toBeInTheDocument();

    
})

it("Should be change login button to logout on click" , () => {

    //Rendering

    render(<Provider store = {appStore}>  //in header component there is redux and routing dom code which is part of extrenal library which is react-redux and react-router-dom so we need to wrap the test cases with that library..
        <BrowserRouter>       
       <Header/>
        </BrowserRouter>
    </Provider>)

    //Querying
    const loginbtn = screen.getByRole("button" , {name : "Login"});
    
    fireEvent.click(loginbtn);

     const logoutbtn = screen.getByRole("button" , {name : "Logout"});

    //Assertion
    expect(logoutbtn).toBeInTheDocument();
})