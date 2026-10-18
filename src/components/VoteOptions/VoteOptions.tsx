import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

interface VoteOptionsProps {
  canReset: boolean;
  onVote: (type: VoteType) => void;
  onReset: () => void;
}

function VoteOptions({ onVote, canReset, onReset }: VoteOptionsProps) {
  return (
    <section className={css['opts-container']}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>

      {canReset && onReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </section>
  );
}

export default VoteOptions;
