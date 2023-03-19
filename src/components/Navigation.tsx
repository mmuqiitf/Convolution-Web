import React from "react";
import LogoItenas from "@/images/logo-itenas-2.png";
import Image from "next/image";
import Link from "next/link";
import { economica } from "@/app/fonts";
import { BsCaretDownFill } from "react-icons/bs";

interface SubMenuItem {
	name: string;
	link?: string;
	target?: string;
}

interface NavigationItem {
	name: string;
	link?: string;
	subMenu?: Array<SubMenuItem>;
	target?: string;
	as?: "a" | "button";
}

const classNameForNavigation = (item: NavigationItem) => {
	let className = "nav-link";
	if (item.as == "button")
		className += " nav-item-btn d-flex align-items-center";
	else className += " nav-item-link";

	if (item.subMenu && item.subMenu.length > 0)
		className += " dropdown dropdown-xl no-caret";

	return className;
};

const Navigation = () => {
	const navigationItems: Array<NavigationItem> = [
		{
			name: "Filters",
			subMenu: [
				{
					name: "Noise Reduction",
					link: "/noise-reduction",
				},
				{
					name: "Sharpening",
					link: "/sharpening",
				},
				{
					name: "Edge Detection",
					link: "/edge-detection",
				},
				{
					name: "Others",
					link: "/others",
				},
			],
		},
		{
			name: "Documentation",
			subMenu: [
				{
					name: "Pengenalan Pengolahan Citra Digital",
					link: "https://online.flipbuilder.com/ogbjq/syfe/",
					target: "_blank",
				},
				{
					name: "Pengantar Konvolusi",
					link: "https://online.flipbuilder.com/ogbjq/tcom/",
					target: "_blank",
				},
				{
					name: "Cara kerja konvolusi",
					link: "https://online.flipbuilder.com/ogbjq/vuik/",
					target: "_blank",
				},
				{
					name: "Kernel Filter",
					link: "https://online.flipbuilder.com/ogbjq/uyfj/index.html",
					target: "_blank",
				},
			],
		},
		{
			name: "Dokumentasi Pengguna",
			link: "https://online.flipbuilder.com/ogbjq/zuro/",
			target: "_blank",
		},
		{
			name: "Feedback",
			link: "#",
			as: "button",
		},
	];
	return (
		<nav
			className={`${economica.className} navbar navbar-expand-lg navbar-light`}
			id="navbar"
		>
			<div className="container-fluid ps-3">
				<Link className="navbar-brand text-primary" href="/">
					<Image
						src={LogoItenas}
						width={200}
						alt="Logo Itenas"
						className="img-fluid"
						priority={true}
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-menu"
					>
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<line x1="3" y1="18" x2="21" y2="18"></line>
					</svg>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav py-3 ms-auto px-lg-5">
						{navigationItems.map((item, index) => (
							<li className={classNameForNavigation(item)} key={index}>
								{item.as === "button" ? (
									<a className="btn fw-500 ms-lg-4 btn-lg btn-primary" href="#">
										{item.name}
									</a>
								) : (
									<a
										className="nav-link "
										id="navbarDropdownDemos"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-haspopup="true"
									>
										{item.name}
										{item.subMenu && <BsCaretDownFill className="ms-1 fs-5" />}
									</a>
								)}

								{item.subMenu && (
									<div
										className="dropdown-menu dropdown-menu-end animated--fade-in-up"
										aria-labelledby="navbarDropdownDemos"
									>
										<div className="row g-0">
											<div className="col-lg-12 p-3">
												{item.subMenu.map((subItem, index) => (
													<a
														className="dropdown-item"
														style={{ fontSize: 25 + "px" }}
														href={subItem.link}
														target={subItem.target ? subItem.target : "_self"}
														key={index}
													>
														{subItem.name}
													</a>
												))}
											</div>
										</div>
									</div>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
