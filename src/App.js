import React from 'react'; 
import SearchForm from './SearchForm'; 
import SearchResults from './SearchResults'
import NavBar from "./NavBar"; 
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <NavBar />
      <SearchForm />
      {/* <SearchResults /> */}
    </div>
  );
}

export default App;
