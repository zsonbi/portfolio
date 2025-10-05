import React from 'react';
import '../styles/Header.css';

import {LogoIcon, MenuIcon, CloseIcon} from './Icons.jsx';




const navItems = [
	{ href: '#about', title: 'About' },
	{ href: '#skills', title: 'Skills' },
	{ href: '#experience', title: 'Experience' },
	{ href: '#projects', title: 'Projects' },
	{ href: '#homelab', title: 'Homelab' },
	{ href: '#contact', title: 'Contact' },
];

const Header = () => {
	const [activeSection, setActiveSection] = React.useState('');
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const handleNavClick = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (!target) return;

		const headerHeight = document.querySelector('.header').offsetHeight;
		const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
		const offsetPosition = targetPosition - headerHeight;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
		
		setIsMenuOpen(false);
	};

	React.useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640);
		};

		const handleScroll = () => {
			const sections = navItems.map(item => document.querySelector(item.href));
			const scrollPosition = window.scrollY + window.innerHeight / 3;

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

		return () => {
			window.removeEventListener('scroll', handleScroll);
		
		};
	}, []);

	// Close menu when clicking outside
	React.useEffect(() => {
		const handleClickOutside = (event) => {
			if (isMenuOpen && !event.target.closest('.header-container')) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, [isMenuOpen]);

	return (
		<header className="header">
			<div className="header-container">
				{/* Desktop Navigation */}
				<nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
					<ul className="nav-list">
						<li>
							<a 
								href="#home" 
								className="logo-link"
								onClick={(e) => handleNavClick(e, '#home')}
							>
								<LogoIcon />
							</a>
						</li>
						{navItems.map(item => (
							<li key={item.href}>
								<a
									href={item.href}
									className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
									onClick={(e) => handleNavClick(e, item.href)}
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
				{/* Mobile Menu Button */}
				<button 
					className="menu-button"
					onClick={(e) => {
						e.stopPropagation();
						setIsMenuOpen(!isMenuOpen);
					}}
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				>
					{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
				</button>
			</div>
		</header>
	);
};

export default Header;


