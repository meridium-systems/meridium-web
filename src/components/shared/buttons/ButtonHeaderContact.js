import Link from "next/link";

const ButtonHeaderContact = ({ type }) => {
	return (
		<Link
			className={`header_contact d-none  d-xl-inline-flex`}
			href="tel:+61298995868"
		>
			{type === 2 ? (
				<i className="tji-phone"></i>
			) : (
				<span className="icon">
					<i className="tji-phone"></i>
				</span>
			)}

			{type === 2 ? (
				"+61 2 9899 5868"
			) : (
				<span className="text">+61 2 9899 5868</span>
			)}
		</Link>
	);
};

export default ButtonHeaderContact;
