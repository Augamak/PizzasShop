import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate()

    const backToList = () => 
    navigate("/", { state: { hello: "hello" } });
    
    return (
        <h1 className="back-to-list" onClick={backToList}>Back to list</h1>    
    )
}

export default BackButton;