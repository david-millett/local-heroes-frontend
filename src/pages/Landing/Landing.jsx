import styles from './Landing.module.scss';
import mainImage from '../../../public/images/neighbourhelp.jpg'

const Landing = () => {
  return (
    <>
      <main>
        <div className={styles.content}>
            <h1>Helping others can help us feel a sense of belonging, make new friends, and connect with our communities.</h1>
          <img className={styles.image} src={mainImage} alt='A neighbour helps with groceries' />
        </div>
        <div className={styles.landingCopy}>
          <p>Local Heroes is here to help people help themselves by helping others.</p>
          <p>Ask for help, offer help... either way, you’re a local hero!</p>
        </div>
        <div className={styles.landingPageButtons}>
          <a href="/signup" className={styles.buttonAuth} role="button">Sign Up</a>
          <a href="/signin" className={styles.buttonAuth} role="button">Sign In</a>
        </div>
      </main>
    </>
  );
};

export default Landing;
