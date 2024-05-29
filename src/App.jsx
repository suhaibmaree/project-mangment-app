import Sidebar from "./components/Sidebar/sidebar.jsx";
import NewProject from "./components/NewProject/new-project.jsx";

function App() {
    return (
        <main className='main'>
            <Sidebar></Sidebar>
            <NewProject></NewProject>
        </main>
    );
}

export default App;
