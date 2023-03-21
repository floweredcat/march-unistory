import {useDispatch} from 'react-redux';
import {type AppDispatch} from '../Store/store';
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
