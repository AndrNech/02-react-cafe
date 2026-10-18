import css from './CafeInfo.module.css';

function CafeInfo() {
  return (
    <section className={css['info-container']}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </section>
  );
}

export default CafeInfo;
