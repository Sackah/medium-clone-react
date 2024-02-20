import { useDispatch } from "react-redux";
import { clearUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const HomePageComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <section>
      <div>Home page</div>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};

export default HomePageComponent;
