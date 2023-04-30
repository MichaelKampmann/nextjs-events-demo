import Image from 'next/image';
import classes from './Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/michael2.png"
          alt="An image of me. Micheal"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Michael</h1>
      <p>Paragraph about me. </p>
    </section>
  );
}

export default Hero;
