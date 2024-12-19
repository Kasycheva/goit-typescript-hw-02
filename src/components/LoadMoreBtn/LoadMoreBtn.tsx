import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  loadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => (
  <button className={css.loadMoreBtn} onClick={loadMore}>
    Load More
  </button>
);

export default LoadMoreBtn;
