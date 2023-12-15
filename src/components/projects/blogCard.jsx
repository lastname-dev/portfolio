import React from "react";
import "./styles/blogCard.css"; // 가정한 CSS 파일 경로

const BlogCard = ({ title, description, link, linkText }) => {
	return (
		<div className="blogCard">
			<div className="blogCard-body">
				<p className="blogCard-title">{title}</p>
				<p className="blogCard-text">{description}</p>
				<a href={link} className="blogCard-link">
					{linkText}
				</a>
			</div>
		</div>
	);
};

export default BlogCard;
