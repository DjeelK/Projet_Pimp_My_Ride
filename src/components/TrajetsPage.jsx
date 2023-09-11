import TripForm from "../routes/trip/TripForm";
import NavigationBar from "./NavigationBar";
import "../css/Trip.css";
import fondAddTrajet from "../assets/fond_add_trajet_2.jpg";
 
const TripPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="row">
          <div>
            <img
              src={fondAddTrajet}
              alt="Image de fond"
              className="img-fluid"
            />
          </div>
          <div className="col-md-7">
            <TripForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPage;
