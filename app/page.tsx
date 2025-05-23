import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Works,
	StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Experience />
			<Works />
			<Technologies/>
			<Feedbacks />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
			<Footer />
		</div>
	);
}
