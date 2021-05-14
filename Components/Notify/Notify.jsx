import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import Loader from "./Loader";

const Notify = () => {
  const [state, dispatch] = useContext(DataContext);

  const { notify } = state;
  return (
    <>
        {notify?.loading && <Loader />}
        {/* notification for error and success too */}
    </>
  );
};

export default Notify;
