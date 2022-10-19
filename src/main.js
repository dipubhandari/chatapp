import Sidebar from "./sidebar"
import "./app.css"
import Chatbar from "./chatbar"
import Footer from "./Footer"

const MainChat = (props) => {
    return <>
        <div className="app"><br />
            <div className="app_container">
                <Sidebar className="sidebar" />
                <Chatbar className="chatbar" />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    </>
}

export default MainChat