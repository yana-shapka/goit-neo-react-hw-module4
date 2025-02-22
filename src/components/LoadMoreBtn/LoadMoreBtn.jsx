import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({onClick}) => {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.loadMoreButton} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
