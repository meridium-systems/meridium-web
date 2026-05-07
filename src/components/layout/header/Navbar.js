"use client";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems().map(item => makeActiveLink(item));

	return (
		<div
			className={`mainmenu ${
				(headerType === 3 || headerType == 4) && !isStickyHeader ? "menu-3" : ""
			} d-lg-block d-none`}
			id={isStickyHeader ? "mainmenu" : "main-menu"}
		>
			<ul>
				{navItems.map((nav, idx) =>
					nav?.submenu?.length ? (
						<li
							key={idx}
							className={`has-dropdown ${nav?.isActive ? "current-menu-ancestor" : ""}`}
						>
							<Link href={nav?.path ?? "#"}>{nav?.name}</Link>
							<ul className="sub-menu header__mega-menu mega-menu">
								<li>
									<div className="mega-menu-wrapper">
										<div className="container-fluid gap-60-25">
											<div className="row">
												{nav.submenu.map((item, sidx) => (
													<div key={sidx} className="col-xl-3 col-lg-3 col-12">
														<div className="tj-demo-thumb">
															<div className="image">
																<Image
																	src={item?.img ?? "/images/header/demo/home-10.webp"}
																	alt=""
																	width={570}
																	height={434}
																/>
																{item?.badge && (
																	<span className="tj-demo-badge">{item.badge}</span>
																)}
																<div className="tj-demo-button">
																	<ButtonPrimary
																		text={"View demo"}
																		url={item?.path}
																		className={"header_btn"}
																	/>
																</div>
															</div>
															<h6 className="tj-demo-title">
																<Link href={item?.path ?? "#"}>{item?.name}</Link>
															</h6>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</li>
							</ul>
						</li>
					) : (
						<li
							key={idx}
							className={nav?.isActive ? "current-menu-ancestor" : ""}
						>
							<Link href={nav?.path ?? "#"}>{nav?.name}</Link>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default Navbar;
