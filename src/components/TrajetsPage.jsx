import TripForm from "../routes/trip/TripForm";
import NavigationBar from "./NavigationBar";
import "../css/Trip.css";

const TripPage = () => {
    return(
        <div>
            <NavigationBar/>
                <div className="container-add-trajet">
                    <TripForm/>
                </div>
        </div>
    )
}

export default TripPage;