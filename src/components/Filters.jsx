import { useDispatch } from 'react-redux';
import {setFilter,resetFilters} from '../store/propertySlice';

const Filters = () =>{
    const dispatch = useDispatch();

    return(
        <div className='d-flex gap-3 mb-3'>
            <select onChange={(e)=> dispatch(setFilter({property_type:e.target.value}))}>
                <option value=''>All Types</option>
                <option value='Villa'>Villa</option>
                <option value='Apartment'>Apartment</option>
                <option value='Penthouse'>Penthouse</option>
                <option value='Office'>Office</option>
                <option value='Mansion'>Mansion</option>
            </select>
        <button className='btn btn-outline-danger'onClick={()=>dispatch(resetFilters())}>
            Reset All Fliter
        </button>
        </div>
    );
};

export default Filters;

