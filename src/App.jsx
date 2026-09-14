// Example 1
// import Welcome from "./components/Welcome";

// function App() {
//   return (
//     <div>
//       <h1>My React Website</h1>

//       <Welcome />
//     </div>
//   );
// }

// export default App;

//  Example 2 imports
// import Header from "./components/Header";
// import Content from "./components/Content";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div>
//       <Header />

//       <Content />

//       <Footer />
//     </div>
//   );
// }

// export default App;

// Example 3
// import Student from "./components/Student";

// function App() {
//   return (
//     <div>
//       <h1>Students</h1>

//       <Student />
//       <Student />
//       <Student />
//     </div>
//   );
// }

// export default App;

// Example 4
// import Header from "./components/Header";

// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }

// export default App;


// Example 6
// import Button from "./components/Button";

// function App() {
//   return (
//     <div>
//       <h1>My Website</h1>

//       <Button />
//     </div>
//   );
// }

// export default App;


// Example 7
// import Card from "./components/Card";
// function App () {
//   return(
//     <div>
//       <h1>My Website</h1>

//       <Card />
//     </div>
//   );
// }

// export default App;



import StudentCard from "./StudentCard";
import CourseCard from "./CourseCard";
import Footer from "./components/Footer";

function App() {
  return(
    <div>
      <h1>My Student Website</h1>

      <StudentCard />
      <CourseCard />

      <Footer />
    </div>
  );
}

export default App;