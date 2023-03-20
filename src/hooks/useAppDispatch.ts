import { useDispatch } from 'react-redux'
import { AppDispatch } from '../Store/store'
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch;