import { useDispatch,useSelector } from "react-redux";
import { setPage } from "../store/propertySlice";

const Pagination = ({totalItems}) => {
    const dispatch = useDispatch()
    const { currentPage } = useSelector((state)=>state.property);

    const itemsPerPage = 9;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if(totalPages <=1) return null;
    console.log(totalPages)
    return (
        <nav className="mt-4">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disable':""}`}>
                    <button className="page-link"
                    onClick={()=>dispatch(setPage(currentPage -1))}>
                        Previous
                    </button>
                </li>
                {[...Array(totalPages)].map((_,index)=>(
                    <li key={index}
                    className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                    }`}>

                    <button
                    className="page-link"
                    onClick={()=> dispatch(setPage(index +1))}>
                        {index+1}
                    </button>
                   </li> 
                ))}

                <li
                className={`page-item ${
                    currentPage === totalPages ? 'disabled': ""
                }`}>
                    <button
                    className="page-link"
                    onClick={()=>dispatch(setPage(currentPage + 1))}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;