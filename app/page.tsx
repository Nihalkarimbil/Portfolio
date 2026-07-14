import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Works,
	StarsCanvas,
	SplashCursor,
} from "./components";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<SplashCursor
				DENSITY_DISSIPATION={3.5}
				VELOCITY_DISSIPATION={2}
				PRESSURE={0.1}
				CURL={3}
				SPLAT_RADIUS={0.2}
				SPLAT_FORCE={6000}
				COLOR_UPDATE_SPEED={10}
				SHADING
				RAINBOW_MODE={false}
				COLOR="#A855F7"
			/>
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
