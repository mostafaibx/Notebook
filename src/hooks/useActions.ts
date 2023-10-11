import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../Store";
import { useMemo } from "react";

//Hook for dispatching actions
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
