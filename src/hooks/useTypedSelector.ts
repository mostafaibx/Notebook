import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../Store";
import { useSelector } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
