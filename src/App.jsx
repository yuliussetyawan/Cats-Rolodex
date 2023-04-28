import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
function App() {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("Cats Rolodex");
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState(cats);
  const fetchApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const catsData = await response.json();
    setCats(catsData);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  // Only will rerenders when search field & monsters state change
  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredCats(newFilteredCats);
  }, [searchField, cats]);

  const handleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const titleChange = (event) => {
    const searchFieldString = event.target.value;
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={handleChange}
        placeholder="cats-search-box"
        className="search-box"
      />
      <br />
      <SearchBox
        onChangeHandler={titleChange}
        placeholder="Change Title"
        className="title-search-box"
      />
      <CardList cats={filteredCats} />
    </div>
  );
}

export default App;
