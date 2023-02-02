import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useHttp = (action) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    dispatch(action());
  }
};

export default useHttp;
