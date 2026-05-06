import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();
	const homeNav = navItems[0];
	const simpleLinks = navItems.slice(1);

	return (
		<div className="hamburger_menu d-block d-lg-none">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{/* Home — collapsible with thumbnail grid */}
							<MobileMenuItem
								text={homeNav?.name}
								url={homeNav?.path ?? "#"}
								submenuClass={"header__mega-menu mega-menu"}
							>
								<li>
									<div className="mega-menu-wrapper">
										<div className="container-fluid gap-60-25">
											<div className="row">
												{homeNav?.submenu?.map((item, idx) => (
													<div
														key={idx}
														className={`col-xl-3 col-lg-3 col-12 ${
															item?.isComming ? "d-none" : ""
														}`}
													>
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
							</MobileMenuItem>

							{/* Login, Registration, Contact — plain links */}
							{simpleLinks.map((nav, idx) => (
								<li
									key={idx}
									className={idx === simpleLinks.length - 1 ? "mean-last" : ""}
								>
									<Link href={nav?.path ?? "#"}>{nav?.name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
