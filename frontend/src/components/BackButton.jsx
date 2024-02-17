import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <MDBIcon
      fas
      icon="chevron-left"
      className="back-icon cursor-pointer"
      onClick={handleBack}
    />
  );
};

export default BackButton;
