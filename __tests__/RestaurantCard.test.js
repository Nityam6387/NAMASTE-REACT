import { fireEvent, render , screen , act} from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMocks.json"
import RestaurantCard from "../src/components/RestaurantCard"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Body from "../src/components/Body"

// it("Should render RestaurantCard component with its props data" , () => {

//     //rendering

//     render(<RestaurantCard resData = {MOCK_DATA}/>)

//     //Querying

//     const name = screen.getByText("The Good Bowl");

//     //Assertion

//     expect(name).toBeInTheDocument()
// })

it("Should be render Res Cards after click search button" , async () => {
    
    await act(async () => {                            //act method use whenever you have fetch or state variable get update like through setState etc in tested component its a good practice
           render(<BrowserRouter>
     <Body/>
    </BrowserRouter>
    )

    const searchBtn = screen.getByText("Search");

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput , { target: {value: "burger"}});

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(4)


});
    }) 

it("Should be render Res Cards and check Top Rated Restaurants Button functionality" , () => {
    render(
    <BrowserRouter>
     <Body/>
    </BrowserRouter>
    )
    
   const beforeResCard = screen.getAllByTestId("resCard");

   expect(beforeResCard.length).toBe(15);

    const beforeRatedBtn = screen.getByRole("button" , {name: "Top Rated Restaurants"});

    fireEvent.click(beforeRatedBtn);

    const afterResCard = screen.getAllByTestId("resCard");

    expect(afterResCard.length).toBe(11);

});