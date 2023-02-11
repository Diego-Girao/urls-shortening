import styles from "./Hero.module.css"
import imageWorking from "../assets/images/illustration-working.svg"

export function Hero() {
	return (
		<div className={styles.hero}>
			<h1>More than just shorter links</h1>
			Build your brand's recognition and get detailed insights on how your links
			are performing.
			<button>Get Started</button>
			<img src={imageWorking} />
		</div>
	)
}
