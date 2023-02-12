import styles from "./Footer.module.css"

import shortly from "../assets/images/logo-footer.svg"
import facebook from "../assets/images/icon-facebook.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"

export function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.firstContent}>
				<h2>Boost your links today</h2>
				<a href="/">Get Started</a>
			</div>
			<div className={styles.secondContent}>
				<h2>Features</h2>
				<p>
					<a href="/">Link Shortening</a>
				</p>
				<p>
					<a href="/">Branded</a>
				</p>
				<p>
					<a href="/">Analytics</a>
				</p>

				<h2>Resources</h2>
				<p>
					<a href="/">Blog</a>
				</p>
				<p>
					<a href="/">Developers</a>
				</p>
				<p>
					<a href="/">Support</a>
				</p>

				<h2>Company</h2>
				<p>
					<a href="/">About</a>
				</p>
				<p>
					<a href="/">Our Team</a>
				</p>
				<p>
					<a href="/">Careers</a>
				</p>
				<p>
					<a href="/">Contact</a>
				</p>
				<div className={styles.icons}>
					<a href="facebook">
						<img src={facebook} />
					</a>
					<a href="twitter">
						<img src={twitter} />
					</a>
					<a href="pinterest">
						<img src={pinterest} />
					</a>
					<a href="instagram">
						<img src={instagram} />
					</a>
				</div>
			</div>
		</div>
	)
}
