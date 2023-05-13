const Header = () => {
	return (
		<div className="mx-6 mt-1">
			<div className="flex items-center">
				<div className="w-5/6">
					<h1 className="text-xl font-bold">Warung Esmon, Bojong Nangka</h1>
				</div>
				<div className="w-1/6">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-auto bi bi-caret-right" viewBox="0 0 16 16">
						<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
					</svg>
				</div>
			</div>
		</div>
	);
};
export default Header;
