import React from 'react';

const LogoIcon = (props) => (
	<svg {...props} width="28" height="28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		<circle cx="50" cy="50" r="50" fill="#0d9488" />
		<text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="55" fontWeight="bold" fill="#f0fdfa">
			D
		</text>
	</svg>
);

const navItems = [
	{ href: '#about', title: 'About' },
	{ href: '#skills', title: 'Skills' },
	{ href: '#experience', title: 'Experience' },
	{ href: '#projects', title: 'Projects' },
	{ href: '#contact', title: 'Contact' },
];

const Header = () => {
	const [activeSection, setActiveSection] = React.useState('');

	React.useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map(item => document.querySelector(item.href));
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			let currentSection = 'home';
			for (const section of sections) {
				if (section && section.offsetTop <= scrollPosition) {
					currentSection = section.id;
				}
			}
			 if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
				 currentSection = 'contact';
			 }
			setActiveSection(currentSection);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className="sticky top-0 z-50 py-4 bg-slate-900">
			<div className="max-w-fit mx-auto">
				<nav className="bg-slate-800/60 backdrop-blur-sm rounded-full border border-slate-700 shadow-lg px-3 py-2">
					<ul className="flex items-center space-x-2">
						<li>
							<a href="#home" className="block p-1">
								<LogoIcon />
							</a>
						</li>
						{navItems.map(item => (
							<li key={item.href}>
								<a
									href={item.href}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 ${activeSection === item.href.substring(1) ? 'bg-slate-700 text-teal-300' : 'text-slate-400'}`}
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;


