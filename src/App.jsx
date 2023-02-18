import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import "./global.css"

export function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Content />
			</main>
			<Footer />
		</>
	)
}
