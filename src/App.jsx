import { Header } from "./components/Header"
import "./global.css"
import { Hero } from "./components/Hero"

export function App() {
	return (
		<div>
			<Header />
			<Hero />
			<h2>Sou um h2 direto no App </h2>
			<p>Title text</p>
			<span>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
				dignissimos, autem itaque sit facilis fuga temporibus expedita eligendi
				quo et soluta necessitatibus repellat, in, numquam velit repellendus
				adipisci rem similique. Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Facere nesciunt nobis mollitia accusamus veniam
				aperiam, hic molestiae, cupiditate incidunt amet et error aliquam maxime
				eligendi voluptates corrupti eaque voluptatum. Quam!
			</span>
			<div></div>
		</div>
	)
}
