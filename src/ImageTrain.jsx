import "./FlipCard.css";
import Sonali from "../src/assets/images/Boat_picture.png";
import Sonali_orange from "../src/assets/IMG_3702.png";
import Sonali_blue from "../src/assets/IMG_E2880.png";
import Sonali_o1 from "../src/assets/IMG_3444.png";
import Sonali_o2 from "../src/assets/IMG_2915.png";
import Sonali_o3 from "../src/assets/IMG_2465.png";
import Sonali_o4 from "../src/assets/IMG_2917.png";
import Sonali_o5 from "../src/assets/IMG_E3242.png";

const images = [
  Sonali,
  Sonali_orange,
  Sonali_blue,
  Sonali_o1,
  Sonali_o2,
  Sonali_o3,
  Sonali_o4,
  Sonali_o5,
];

function ImageTrain() {
  return (
    <div className="train-wrapper">
      <div className="train-track">
        {[...images, ...images].map((img, index) => (
          <img key={index} src={img} alt="train" />
        ))}
      </div>
    </div>
  );
}

export default ImageTrain;
