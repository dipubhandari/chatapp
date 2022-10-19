import { Search } from "@material-ui/icons"
import "./searchstyle.css"

const Searchs = () => {
  return <div className="searchbar">
    <Search className="searchIcon" />
    <input type="text" placeholder="Search or Start Chat👩" />
  </div>
}

export default Searchs