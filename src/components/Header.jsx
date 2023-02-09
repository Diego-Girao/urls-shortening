import styles from "./Header.module.css"

import logoUrl from "../assets/images/logo.svg"

export function Header() {
	return (
		<header className={styles.header}>
			<nav className="nav-list">
				<a className="logo" href="/">
					<img src={logoUrl} alt="logo do Shortly" />
				</a>
				<ul className="nav-list-item">
					<li>
						<a href="#Features">Features</a>
					</li>
					<li>
						<a href="#Pricing">Pricing</a>
					</li>
					<li>
						<a href="#Resources">Resources</a>
					</li>
					<li>
						<a href="#Login">Login</a>
					</li>
					<li>
						<a href="#SignUp">Sign Up</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
