import styles from "./Header.module.css"

import logoUrl from "../assets/images/logo.svg"

export function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navList}>
				<a className="logo" href="/">
					<img src={logoUrl} alt="logo do Shortly" />
				</a>
				<ul>
					<li>
						<a href="#Features">Features</a>
					</li>
					<li>
						<a href="#Pricing">Pricing</a>
					</li>
					<li>
						<a href="#Resources">Resources</a>
					</li>
				</ul>
			</nav>
			<nav className={styles.navListLogin}>
				<ul>
					<li>
						<a href="#Login">Login</a>
					</li>
					<li className={styles.signUpButton}>
						<a className={styles.signUp} href="#signup">
							Sign Up
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
