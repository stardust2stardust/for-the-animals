import img1 from "../images/bird.png";
import img2 from "../images/pig-ben-mater.png";

const ImageContainer = () => {
  return (
    <div className="image-container">
      <img
        src={img1}
        alt="img-1"
        className="image-medium"
      />
      <img
        src={img2}
        alt="img-2"
        className="image-medium"
      />
    </div>
  );
};

export default ImageContainer;
