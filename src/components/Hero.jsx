import styles from "./Hero.module.css"
import imageWorking from "../assets/images/illustration-working.svg"

export function Hero() {
	return (
		<div className={styles.hero}>
			<div>
				<h1>More than just shorter links</h1>
				<p>
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<a href="#GetStarted">Get Started</a>
			</div>
			<div>
				<img src={imageWorking} />
			</div>
		</div>
	)
}
