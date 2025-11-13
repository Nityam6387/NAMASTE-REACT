// Header
//  - Logo
//  - Nav Items 
 
// Body
//  - Search 
//  - RestaurantContainer
//     - RestaurantCard 
      //  - heading 
       //  - star rating

// Footer
//  - Copyright 
//  - Links
//  - Address 
//  - Contact 



                                                 ****** LECTURE 03 CODE ******

// //React.createElement => React Element(JS Object) => HTMLElement(render)
// const heading = React.createElement("h1" , {"id" : "heading"} , "Namaste React");
// console.log(heading); // RETURN JSOBJECT

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// //JSX (its a HTML like or XML like syntax not A HTML IN JS)

// //JSX => BABEL COMPILER => React.createElement => React Element(JS Object) => HTMLElement(render)
// const jsxHeading = <h1 id="heading">Namsate React Using JSX</h1>;
// console.log(jsxHeading); //ALSO RETURN JS OBJECT
// root.render(jsxHeading);

// //REACT COMPONENT


// const Title = () => (
//   <h1 className = "head" tabIndex = "5">
//     Namaste React Using JSX
//   </h1>
// );
  

// //COMPONENT COMPOSITION
// const HeadingComponent = () => (
//     <div id="container">
//          < Title />;
//          < Title > </ Title >;
//          { Title() };
//   <h1 className="heading">Namaste React Functional Component </h1>;
//     </div>
// );

// root.render( < HeadingComponent /> );

// // const HeadingComponent = () => {
// // return <h1>Namaste React Functional Component </h1>;
// // };

// //const HeadingComponent = () => <h1>Namaste React Functional Component </h1>;





                                                      ****** LECTURE 1&2 CODE ******

// /* <div  id="parent">
//     <div id="child1">
//         <h1></h1>    create an array of children for create multiple siblings element
//         <h2></h2>
//     </div>

//      <div id="child2">
//         <h1></h1>    create an array of children for create multiple siblings element
//         <h2></h2>
//     </div>
// </div> */

// //core react syntax;
// // const parent = React.createElement("div" , {id : "parent"},
// //              [
// //                   React.createElement("div" , {id : "child"} ,
// //                [
// //                 React.createElement("h1"  , {}  , "I'm h1 tag"),
// //                 React.createElement("h2"  , {}  , "I'm h2 tag"),      
// //                ]
// //                                      ),
// //                 React.createElement("div" , {id : "child"} ,
// //                [
// //                 React.createElement("h1"  , {}  , "I'm h1 tag"),
// //                 React.createElement("h2"  , {}  , "I'm h2 tag"),      
// //                ]
// //                                    )
// //              ]
             
// //                                  );

//     //JSX(it helps to overcome this complex syntax.)

// // console.log(parent);  //object

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(parent);

// // const heading = React.createElement("h1" , { id : "heading" } , "Hello World From React!");

// // console.log(heading);  //return js object ; props conclude children+attribute+prototype

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading); //responsible for convert js object to h1 element which our browser understand , 







                                             LECTURE 07 


Now we use react router instead of this piece of code...

const AppLayout = () => {
   return (
    <div className="app">

           <Header />
           <Body />

    </div>   
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



// NAMASTE-REACT
// |
// |-  src
//     |
//     |-  components
//     |-  utils 
//     |-  .postcssrc
//     |-  App.js
//     |-  tailwind.config.js

// |
// |- .gitIgnore
// |- index.css
// |- index.html
// |- package-Lock.json
// |-package.json
// |-README .md 
// |-server .js



# Types of testing (developer)
  - Unit Testing
  - Integration Testing
  - End to End Testing - e2e testing


# Setting up Testing in our app
  - Install React Testing Library - npm i -D @testing-library/react
  - Install jest - npm i -D jest
  - Installed Babel dependencies - npm  npm install --save-dev babel-jest @babel/core @babel/preset-env
  - Configure Babel - by making babel.config.js file
  - Configure Parcel Config File to disable default Babel transpilation - making .parcelrc file 
  - Jest configuration - npx jest --init
  - Install jsdom library - npm install -D jest-environment-jsdom
  - Install @babel/preset-react - to make JSX enable in test cases
  - Include @babel/preset-react into my babel config.
  - Install @testing-library/jest-dom - to work some method like .toBeInDocument()