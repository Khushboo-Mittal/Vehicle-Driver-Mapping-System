// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DriverForm from './components/DriverForm';
// import VehicleDriverAssignment from './components/VehicleDriverAssignment';
// import DriverList from './components/DriverList';
// import logo from './logo.svg'; // Optional: Include logo if you want to keep it
// import './App.css'; // Optional: Keep existing CSS

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <Routes>
//           <Route path="/drivers" element={<DriverForm />} />
//           <Route path="/assign" element={<VehicleDriverAssignment />} />
//           <Route path="/drivers" element={<DriverList />} />

//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DriverForm from './components/DriverForm';
import VehicleDriverAssignment from './components/VehicleDriverAssignment';
import DriverList from './components/DriverList';
import VehicleForm from './components/VehicleForm'
import logo from './logo.svg'; // Optional: Include logo if you want to keep it
import './App.css'; // Optional: Keep existing CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Routes>
          <Route path="/" element={<DriverForm />} />
          <Route path="/assign" element={<VehicleDriverAssignment />} />
          <Route path="/drivers" element={<DriverList />} />
          <Route path="/vehicles" element={<VehicleForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
