import Sidebarheader from "./sidebarheader"
import Searchs from "./search"
import Rooms from "./rooms"
import "./sidebar.css"

const Sidebar = () => {
    const roomcss = {
        width: '40%',
        display: 'flex',
        margin: 'auto'
    }
    function getData() {
        console.log("works")
    }
    return <div className="sidebar">
        <Sidebarheader />
        <Searchs />
        <div className="roomsection">
            <h1 style={roomcss}> All User</h1>
            <Rooms func={getData} />
        </div>

    </div>
}
export default Sidebar