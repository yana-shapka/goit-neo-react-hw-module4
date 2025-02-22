import {PuffLoader} from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <PuffLoader color="#36d7b7" size={60} />
    </div>
  );
};

export default Loader;
