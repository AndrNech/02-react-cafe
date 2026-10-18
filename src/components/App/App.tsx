import { useState } from 'react';
import css from './App.module.css';
import type { Votes, VoteType } from '../../types/votes';

import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalVotes: number = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  const canReset = totalVotes > 0;

  function handleVote(type: VoteType) {
    setVotes(currentVotes => ({
      ...currentVotes,
      [type]: currentVotes[type] + 1,
    }));
  }

  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <main className={css.app}>
      <CafeInfo />

      <VoteOptions
        onVote={handleVote}
        canReset={canReset}
        onReset={resetVotes}
      />

      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </main>
  );
}

export default App;
