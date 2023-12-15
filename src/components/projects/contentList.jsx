import React from "react";
import "./styles/contentList.css"; // CSS 파일을 불러옵니다.
const ContentsList = ({ contents }) => {
	return (
		<div className="contents-container">
			{contents.map((content, index) => (
				<div key={index} className="content-section">
					<h3 className="content-title">{content.title}</h3>
					<p className="content-description">{content.description}</p>
				</div>
			))}
		</div>
	);
};

export default ContentsList;
