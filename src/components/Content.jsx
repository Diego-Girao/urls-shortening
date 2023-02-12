import styles from "./Content.module.css"

import iconBrand from "../assets/images/icon-brand-recognition.svg"
import iconDetailed from "../assets/images/icon-detailed-records.svg"
import iconFully from "../assets/images/icon-fully-customizable.svg"

export function Content() {
	return (
		<>
			<div className={styles.contentHeader}>
				<input placeholder="Shorten a link here..." />
				<button>Shorten It!</button>
			</div>
			<div className={styles.contentMain}>
				<div>
					<h1>Advanced Statistics</h1>
				</div>
				<p>Track how your links are performing across the web with</p>
				<p>our advanced statistics dashboard.</p>
				<div className={styles.cards}>
					<div>
						<img src={iconBrand} />
						<h2>Brand Recognition</h2>
						<p>
							Boost your brand recognition with each click. Generic links don't
							mean a thing. Branded links help instil confidence in your
							content.
						</p>
					</div>
					<div>
						<img src={iconDetailed} />
						<h2>Detailed Records</h2>
						<p>
							Gain insights into who is clicking your links. Knowing when and
							where people engage with your content helps inform better
							decisions.
						</p>
					</div>
					<div>
						<img src={iconFully} />
						<h2>Fully Customizable</h2>
						<p>
							Improve brand awareness and content discoverability through
							customizable links, supercharging audience engagement.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
