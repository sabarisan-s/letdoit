import axios from "axios";
import "./App.css";
import Todo from "./components/Todo";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
    return (
        <>
            <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
            <div className="container">
                <Todo />
            </div>
        </>
    );
}

export default App;
