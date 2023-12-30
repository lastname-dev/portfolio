import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myProjects from "../data/projects";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import BlogCard from "../components/projects/blogCard";
import ContentsList from "../components/projects/contentList";

import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myProjects[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	ArticleStyle = styled.div`
		${article().style}
	`;
	const StyledLink = styled.a`
		padding-left: 5px;
		font-size: 16px;
		font-weight: 600;
		text-decoration-line: none;
		color: #52525b;
		display: inline;
		box-shadow: inset 0 -10px 0 ${article().linkcolor};

		&:hover {
			color: ${article().hovercolor}; // hover 상태의 색상
			transition: color 0.3s ease-in-out;
		}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate("/projects")}
							/>
						</div>
						<div className="read-article-wrapper">
							<div className="title read-article-title">
								{/* {article().title} */}
							</div>

							<div className="read-article-body">
								<img
									src={article().thumbnail_image}
									alt="project thumbnail"
									class="project-image"
								/>

								<div class="project-intro">
									🔍 프로젝트 소개
								</div>
								<div class="project-description">
									{article().long_description}
								</div>
								<div className="read-article-info-container">
									<div className="read-article-date">
										📅 기간 : {article().period}
									</div>
									<div className="read-article-date">
										👤 인원 : {article().team}
									</div>
									<div className="read-article-date">
										{article().video && (
											<>
												🎥 영상 :
												<StyledLink
													href={article().video}
												>
													<FontAwesomeIcon
														icon={faLink}
													/>{" "}
													link
												</StyledLink>
											</>
										)}
									</div>
								</div>

								<div class="project-intro">🔍 기술 스택</div>
								<div class="stacks">
									{article().stacks.map((data, index) => (
										<li>{data}</li>
									))}
								</div>
								<div class="project-intro">🔍 맡은 역할</div>
								{article().develop_role.map((data, index) => (
									<li>{data}</li>
								))}
								<div class="project-intro">🔍 개발 성과</div>
								<ContentsList
									contents={article().contents}
								></ContentsList>
								{article().architecture_image && (
									<>
										<div class="project-intro">
											🎨 아키텍처 다이어그램
										</div>
										<img
											className="architecture-image"
											src={article().architecture_image}
											alt="아키텍처 다이어그램"
										/>
									</>
								)}
								{article().erd_image && (
									<>
										<div class="project-intro">🎨 ERD</div>
										<img
											className="architecture-image"
											src={article().erd_image}
											alt="ERD"
										/>
									</>
								)}
								<ArticleStyle>
									{article().develop_content}
								</ArticleStyle>
								{article().blog && (
									<>
										<div class="project-intro">
											📝 정리 내용
										</div>
										<div className="blogCard-links">
											{article().blog.map(
												(blogItem, index) => (
													<BlogCard
														key={index}
														{...blogItem}
													/>
												)
											)}
										</div>
									</>
								)}

								<div class="project-description">
									💡 서비스에 대해 더 궁금하시다면
									<StyledLink href={article().github}>
										<FontAwesomeIcon icon={faLink} /> Github
									</StyledLink>{" "}
									에서 확인하실 수 있습니다.
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
