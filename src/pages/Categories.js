import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

export default function Categories() {
  const dispatch = useDispatch();
  const { msg } = useSelector((store) => store.categories);

  return (
    <>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>
        Check Status
      </button>
      <div className="msg">
        {msg}
      </div>
    </>
  );
}
