import { sum } from "../src/components/sum";

test("The sum function should calculate the two numbers", ()=>{
    const result = sum(3 , 4);

    //Assertion
    expect(result).toBe(7);
})