import "./UnderConstruction.css";
import UnderConsttructionImg from "../../assets/under-construction.png"; 

function UnderConstruction() {
    return (
        <div className="under-construction-wrapper">
            <div className="container-one">            
                    <img src={UnderConsttructionImg} alt="Industrial kitchen" />
                    <div className="under-text">
                        <h2>UNDER</h2>
                        <p>Something very interesting is cooking... <br />
                        The recipe includes more options for managing your business.</p>               
                </div>
            </div>

            <div className="container-two">
                <h1>CONSTRUCTION</h1>
            </div> 
        </div>
    );
}

export default UnderConstruction;