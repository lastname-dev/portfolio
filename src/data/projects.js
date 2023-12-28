import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

function article_1() {
	return {
		period: "2023.10.10 ~ 2023.11.24 (7주)",
		title: "MZBR",
		description: "숏폼을 활용한 맛집 리뷰를 제공하는 사이트",
		linkcolor: "#d6f0ff",
		hovercolor: "#6cb5f9",
		github: "https://github.com/MZBR-2023",
		stacks: [
			"Java, Spring Boot, Spring Security, Spring Data JPA",
			"MySQL, Redis, Elasticsearch",
			"AWS EC2, RDS, S3, Lambda, API Gateway",
			"Kibana, Logstash, Spring Docs ",
		],
		develop_role: [
			"Spring Security를 이용한 OAuth2.0, JWT 방식의 인증/인가",
			"AWS Lambda를 이용한 API Gateway Authorizer 구현",
			"회원 관련 API (로그인/로그아웃, 회원가입, 회원 조회, 구독)",
			"식당 관련 API (Elasticsearch를 이용한 주변 식당 조회, 키워드 기반 조회)",
			"영상 조회 API (특정 식당의 리뷰 영상 조회, 주변 식당의 영상 조회)",
			"식당 데이터 크롤링 (공공데이터, 카카오 API 이용)",
		],
		keywords: ["Spring Boot", "Elasticsearch", "AWS Lambda", "API Gateway"],
		role: "백엔드 개발",
		team: "6명 (FE 2, BE 2, Infra 2)",
		thumbnail_image: "../MZBR.png", // 썸네일 이미지 URL 필요
		architecture_image: "../MZBR_architecure.png", // 아키텍처 다이어그램 이미지 URL 필요
		long_description: (
			<React.Fragment>
				<p>
					💡 MZBR은 숏폼을 활용한 맛집 리뷰를 제공하는 서비스입니다.
				</p>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>프로젝트 성과</h3>
				<p>
					이 프로젝트에서의 경험은 제 개발 역량을 크게 향상시켰습니다.
					특히, Elasticsearch를 통한 검색 최적화와 AWS를 활용한 서비스
					분리는 뛰어난 학습 경험이었습니다. 프로젝트를 통해 얻은
					실무적인 지식과 경험은 제 개발 커리어에 큰 자산이
					되었습니다.
				</p>
			</React.Fragment>
		),
		contents: [
			{
				title: "식당 데이터 수집",
				description:
					"식당 데이터 수집 과정에서 공공 데이터는 잘 사용하지 않는 TM 좌표계를 제공하는 문제점이 있었습니다.",
				description2: [
					"CSV 파일에서 데이터들을 추출하고 카카오 API를 이용하여 이를 위경도로 변환하여 RDB와 Elasticsearch에 저장하였습니다.",
				],
			},
			{
				title: "검색 성능 130배 개선",
				description:
					"실행계획 분석을 통해 형태소 단위의 검색이나 위치 반경 데이터를 검색할 때 인덱스가 적용되지 않아 Full Scan이 발생함을 확인했습니다.",
				description2: [
					"MySQL의 공간인덱스를 적용하여 위경도 기반 검색 성능을 향상 시켰습니다.",
					"Elasticsearch를 도입하여 Nori Tokenizer를 활용한 형태소 분석 및 Geo Point를 통하여 위치 검색 성능 대폭 향상시켰습니다.",
				],
			},
			{
				title: "인증 서비스 분리",
				description:
					"MSA 환경에서 인증 처리를 위해 서버마다 인증 서비스를 중복해서 구현해야 한다는 번거로움이 있었습니다. ",
				description2: [
					"AWS API Gateway와 Lambda Authorizer를 이용하여 인증 로직을 서버리스 함수로 분리하여 관리하였습니다.",
					"통합된 인증을 통해 중앙 집중화된 아키텍처를 구성하였고 확장성 있는 서비스를 구축하였습니다.",
				],
				image: "../authorizer.png",
			},
			{
				title: "모니터링 및 시각화",
				description:
					"ELK 스택을 도입하여 Logstash로 Spring 서버의 로그를 가공하여 Elasticsearch에 적재하고 Kibana로 시각화 하였습니다.",
				description2: [],
			},
		],
		blog: [
			{
				title: "AWS Lambda Authorizer",
				description: "API Gateway와 Lambda 를 이용한 통합 인증 ",
				link: "https://velog.io/@ch0jm/AWS-Lambda-Authorizer-%EB%A1%9C-JWT-%EA%B2%80%EC%A6%9D",
				linkText: "Read more",
			},
			{
				title: "식당 검색 성능 개선기",
				description: "MySQL 공간 인덱스를 이용한 성능 측정 및 개선 ",
				link: "https://velog.io/@ch0jm/7asl837m",
				linkText: "Read more",
			},
			{
				title: "Elasitcsearch 적용기",
				description: "로그 수집 및 검색 엔진으로 Elasticsearch 도입 ",
				link: "https://velog.io/@ch0jm/h844r002",
				linkText: "Read more",
			},
		],
	};
}

function article_2() {
	return {
		period: "2023.10.10 ~ 2023.11.24 (7주)",
		title: "MZBR",
		description: "숏폼을 활용한 맛집 리뷰를 제공하는 사이트",
		linkcolor: "#d6f0ff",
		hovercolor: "#6cb5f9",
		github: "https://github.com/MZBR-2023",
		stacks: [
			"Java, Spring Boot, Spring Security, Spring Data JPA",
			"MySQL, Redis, Elasticsearch",
			"AWS EC2, RDS, S3, Lambda, API Gateway",
			"Kibana, Logstash, Spring Docs ",
		],
		develop_role: [
			"Spring Security를 이용한 OAuth2.0, JWT 방식의 인증/인가",
			"AWS Lambda를 이용한 API Gateway Authorizer 구현",
			"회원 관련 API (로그인/로그아웃, 회원가입, 회원 조회, 구독)",
			"식당 관련 API (Elasticsearch를 이용한 주변 식당 조회, 키워드 기반 조회)",
			"영상 조회 API (특정 식당의 리뷰 영상 조회, 주변 식당의 영상 조회)",
			"식당 데이터 크롤링 (공공데이터, 카카오 API 이용)",
		],
		keywords: ["Spring Boot", "Elasticsearch", "AWS Lambda", "API Gateway"],
		role: "백엔드 개발",
		team: "6명 (FE 2, BE 2, Infra 2)",
		thumbnail_image: "../MZBR.png", // 썸네일 이미지 URL 필요
		architecture_image: "../MZBR_architecure.png", // 아키텍처 다이어그램 이미지 URL 필요
		long_description: (
			<React.Fragment>
				<p>
					💡 MZBR은 숏폼을 활용한 맛집 리뷰를 제공하는 서비스입니다.
				</p>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>프로젝트 성과</h3>
				<p>
					이 프로젝트에서의 경험은 제 개발 역량을 크게 향상시켰습니다.
					특히, Elasticsearch를 통한 검색 최적화와 AWS를 활용한 서비스
					분리는 뛰어난 학습 경험이었습니다. 프로젝트를 통해 얻은
					실무적인 지식과 경험은 제 개발 커리어에 큰 자산이
					되었습니다.
				</p>
				{/* 기타 프로젝트 리뷰 내용 */}
			</React.Fragment>
		),
		contents: [
			{
				title: "데이터 수집",
				description:
					"식당 정보 수집 과정에서 공공 데이터는 잘 사용하지 않는 TM 좌표계를 제공하는 문제점이 있었습니다. 이를 위경도로 변환하여 RDB 및 Elasticsearch에 저장하였습니다.",
			},
			{
				title: "검색 성능 16배 개선",
				description:
					"RDB에서 위치 기반 키워드 검색을 진행할 때 매우 느린 성능을 보여주고 있었습니다. 이를 Elasticsearch를 도입하고 Nori Tokenizer를 통한 형태소 분석 및 Geo_point를 통한 위치 검색으로 대폭 향상시켰습니다.",
			},
			{
				title: "인증 서비스 분리",
				description:
					"MSA 환경에서 인증 처리를 위해 서버마다 인증 서비스를 중복해서 구현해야 한다는 번거로움이 있었습니다. AWS API Gateway와 Lambda Authorizer를 이용하여 인증 로직을 서버리스 함수로 분리하여 관리하였습니다.",
			},
			{
				title: "모니터링 및 시각화",
				description:
					"ELK 스택을 도입하여 Logstash로 Spring 서버의 로그를 가공하여 Elasticsearch에 적재하고 Kibana로 시각화 하였습니다.",
			},
		],
		blog: [
			{
				title: "AWS Lambda Authorizer",
				description: "API Gateway와 Lambda 를 이용한 통합 인증 ",
				link: "https://velog.io/@ch0jm/AWS-Lambda-Authorizer-%EB%A1%9C-JWT-%EA%B2%80%EC%A6%9D",
				linkText: "Read more",
			},
			{
				title: "식당 검색 성능 개선기",
				description: "MySQL 공간 인덱스를 이용한 성능 측정 및 개선 ",
				link: "https://velog.io/@ch0jm/7asl837m",
				linkText: "Read more",
			},
			{
				title: "Elasitcsearch 적용기",
				description: "로그 수집 및 검색 엔진으로 Elasticsearch 도입 ",
				link: "https://velog.io/@ch0jm/h844r002",
				linkText: "Read more",
			},
		],
	};
}

function article_3() {
	return {
		period: "2023.05 (4주)",
		title: "✈️ Ovtrip",
		description: "간편한 여행 계획 관리 사이트",
		linkcolor: "#fbec96",
		hovercolor: "#F2B518",
		links: [
			{
				info: "영상 URL",
				url: "https://youtu.be/xXZT1JgYleg",
			},
			{
				info: "Github URL",
				url: "https://github.com/orgs/OvTrip/repositories",
			},
		],
		stacks: [
			"Java, Spring Boot, Maven",
			"Spring Cloud Open Feign",
			"MyBatis, Amazon RDS(MySQL)",
			"OAuth2.0, JWT",
			"Vue.js",
		],
		develop_role: [
			"데이터베이스 설계 참여",
			"회원가입 및 로그인",
			"여행 계획 조회",
			"공지사항 게시판",
			"사용자 검색",
			"메인, 로그인/회원가입, 마이페이지, 검색, 게시판 페이지 구현",
		],
		keywords: [
			"Spring Boot",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		role: "팀장, 백엔드 개발, 프론트엔드 개발",
		team: "팀 프로젝트 (BE/FE 2)",
		thumbnail_image: "../ovtrip-thumbnail.png",
		long_description:
			"OvTrip은 편리하게 여행 계획을 짤 수 있는 여행 계획 관리 플랫폼입니다. 늘어난 여행 수요를 반영하여 여행자들이 보다 편리하게  여행 계획을 세울 수 있도록 하는 것을 목표로 하였습니다.유저는 원하는 기간을 선택해 날짜별 여행 계획을 짤 수 있습니다. 장소 선택시 직선 경로가 지도에 표시됩니다. 마이페이지에서 저장한 여행 계획을 볼 수 있습니다.",
		develop_content: (
			<React.Fragment>
				<h3>■ AS IS</h3>
				<li>
					Business
					<ul>
						<li>
							사용자는 카카오, 네이버 소셜 로그인을 이용해
							회원가입, 로그인을 할 수 있습니다.
							<ul>
								<li>소셜 플랫폼은 확장 가능해야 합니다.</li>
							</ul>
						</li>
						<li>
							로그인 한 사용자는 가입된 유저를 검색할 수 있습니다.
						</li>
						<li>
							자신이 생성한 여행 계획 목록을 확인할 수 있습니다.
						</li>
						<li>
							사용자는 로그인 여부와 관계 없이 공지사항을 볼 수
							있습니다.
						</li>
					</ul>
				</li>
				<li>
					Tech
					<ul>
						<li>REST API로 구현합니다.</li>
						<li>로그인은 JWT를 사용하여 진행합니다.</li>
						<li>데이터베이스는 Amazon RDS를 사용합니다.</li>
					</ul>
				</li>
				<h3>■ Challenge</h3>
				<li>Spring Boot를 이용해 REST API를 구현</li>
				<li>
					JWT를 사용하여 OAuth2.0 소셜 로그인/회원가입 구현, 인증
					인터셉터 구현을 진행했습니다.
				</li>
				<li>
					소셜 로그인 구현시 플랫폼에 간편한 API 요청을 위해 Spring
					Cloud OpenFeign을 사용했습니다.
					<ul>
						<li>
							코드를 간결하게 작성하기 위해 소셜 플랫폼에 API를
							요청할 때 Spring Cloud의 Feign Client를
							사용했습니다.
						</li>
						<li>
							다른 소셜 플랫폼에 대한 확장을 열어 두기 위해 소셜
							플랫폼의 종류에 따라 구현된 서비스를 결정하도록
							했습니다.
						</li>
					</ul>
				</li>
				<li>
					Vue.js를 이용해 프론트엔드 구현, Axios를 이용해 API 요청
					<ul>
						<li>
							빠른 개발 진행을 위해 러닝커브가 낮은 프레임워크인
							Vue.js를 사용했습니다.
						</li>
					</ul>
				</li>
				<li>
					Argument Resolver를 구현하여 Access Token에서 회원정보를
					가져올 때 컨트롤러에서 파라미터로 쉽게 받을 수 있게 해
					편의성을 늘렸습니다. (기존코드 3줄 -> 1줄)
				</li>
				<li>
					Preflgiht에 Access token이 담겨있지 않아 API 호출 실패하던
					에러 해결{" "}
					<a href="https://xntifrxgile.tistory.com/70">
						(해결 과정 정리글)
					</a>
					<ul>
						<li>
							Preflight는 HTTP OPTIONS으로 요청을 보내기 때문에,
							HTTP OPTIONS에 대한 요청은 토큰 값 검증을 하지
							않도록 변경했습니다.
						</li>
					</ul>
				</li>
				<h3>■ TO BE</h3>
				<li>
					삼성 청년 SW 아카데미 프로젝트 경진대회 우수상을 받았습니다.
					(10팀 중 2등)
				</li>
				<h2>🏫 배운점</h2>
				<li>
					소셜 회원가입을 구현하며 OAuth2.0에 대해 이해할 수
					있었습니다.
				</li>
				<li>Feign Client에 대해 학습할 수 있었습니다.</li>
				<li>
					인터셉터를 구현하며 API 요청 흐름을 이해할 수 있었습니다.
				</li>
				<li>
					axios, vuex, router, 비동기에 대해 학습할 수 있었습니다.
				</li>
				<li>
					Gitflow를 적용하여 기능마다 branch를 생성해 개발하며 Git에
					대해 학습할 수 있었습니다.
				</li>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>첫 프론트엔드 개발</h3>
				<p>
					프론트엔드 개발을 처음으로 경험하며 많은 것을 느꼈습니다.
					프론트엔드가 어떤식으로 API를 요청하고 받아서 데이터를
					출력하는지 등에 관한 것을 알게되었습니다. 어떤 식으로
					데이터를 전해줘야 편한지와 같이 프론트엔드에 대해서 더욱
					깊게 이해할 수 있었습니다.
				</p>
				<h3>소셜 로그인의 이해</h3>
				<p>
					OAuth2.0를 이해하고 구현할 수 있었습니다. 이번에 구현할 때,
					Refresh Token과 Refresh Token의 만료 시간을 엔티티에
					저장해서 사용했는데 이 경우 Refresh Token이 만료가
					됐는지 만료 시간을 계속해서 검증하는 과정이
					필요했습니다. Redis를 사용하는 경우, TTL을 이용하여 Refresh
					Token이 만료되면 Redis에서 삭제되도록 구현할 수
					있습니다.이러한 방식으로 구현하는 경우엔 Redis에 해당하는
					데이터가 존재하는지 유무만 검사하면 되기
					때문에 훨씬 편리하게 구현할 수 있다고 생각합니다. 다음엔
					Refresh Token을 Redis에 저장하는 방식으로 구현해보고
					싶습니다.
				</p>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		period: "2023.10 ~ 2023.11 (7주)",
		title: "🌱 EARA",
		description: "탄소 중립 활동을 하며 환경 보호를 실천하는 서비스",
		linkcolor: "#e8fd8b",
		hovercolor: "#cbf58c",
		links: [
			{
				info: "영상 URL",
				url: "https://www.youtube.com/watch?v=8FcnqC_jvRc",
			},
			{
				info: "Github URL",
				url: "https://github.com/We-Eokam/Ea-ra",
			},
		],
		stacks: [
			"Java, Spring Boot, Gradle",
			"MariaDB, Spring Data JPA",
			"Spring Cloud, RabbitMQ",
			"Amazon EC2, Amazon S3, Docker, Jenkins, Nginx, SonarQube, Jacoco, Git, Gitlab, Jira",
		],
		develop_role: [
			"데이터베이스 설계 참여",
			"서버 구조 설계 참여",
			"Amazon S3를 이용한 파일 업로드 구현",
			"활동으로 인한 재화 적립 서버 구현",
			"환경 오염 활동 제보 서버 구현",
			"Jenkins와 Docker를 이용해 배포 진행",
			"SonarQube 적용",
		],
		keywords: [
			"Spring Boot",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		role: "백엔드 개발, 인프라",
		team: "팀 프로젝트 (BE 3, FE 3)",
		thumbnail_image: "../eara-thumbnail.png",
		architecture_image: "../eara-ad.png",
		long_description:
			"EARA는 친구와 함께 탄소 중립 활동을 하며 환경 보호를 실천하는 서비스입니다. 탄소 중립 포인트와 연결하여, 사용자가 한 환경 보호 활동에 대해서 얼마나 많은 탄소 중립 포인트를 얻을 수 있는지 수치적으로 분석하고 그래프로 확인할 수 있습니다.",
		develop_content: (
			<React.Fragment>
				<h3>■ AS IS</h3>
				<li>
					<b>Business</b>
					<ul>
						<li>
							제보장을 가진 사용자는 환경 오염을 한 친구를 제보할
							수 있다.
							<ul>
								<li>
									제보할 때는 대상, 제보 내용, 사진을 입력해야
									한다.
								</li>
								<li>
									제보 내용이 '기타'인 경우 제보 세부 내용을
									사용자가 작성해야 한다.
								</li>
								<li>제보 시 제보장의 개수가 1개씩 줄어든다.</li>
							</ul>
						</li>
						<li>회원은 자신이 받은 제보를 볼 수 있다</li>
						<li>
							다른 유저의 페이지에 갔을 때, 자신이 보낸 제보장만
							볼 수 있다.
						</li>
						<li>
							회원은 환경 보호 활동을 하거나 제보를 당함으로써
							재화를 쌓거나 잃을 수 있다.
						</li>
						<li>
							최근 일주일/한 달 간 적립된 일별 재화 양과 활동
							횟수를 조회할 수 있다.
						</li>
					</ul>
				</li>
				<li>
					<b>Tech</b>
					<ul>
						<li>REST API로 구현합니다.</li>
						<li>
							이미지 등록은 클라우드 서비스에 합니다. (Amazon S3)
						</li>
						<li>모든 기능은 로그인한 유저만 가능합니다.</li>
						<li>AWS EC2에 Docker를 이용해 배포합니다.</li>
						<li>
							제보장의 개수는 User Service에 요청해서 줄여야
							합니다.
						</li>
						<li>
							제보를 한 뒤 해당하는 활동에 대한 재화 적립을
							요청해야합니다.
						</li>
					</ul>
				</li>
				<h3>■ Challenge</h3>
				<li>Spring Boot를 이용해 REST API를 구현</li>
				<li>Amazon S3와 멀티파트를 이용해 파일 업로드 기능 구현</li>
				<li>
					MSA 구조로 백엔드 서버를 개발 (제보 서버, 적립 서버 구현)
					<img
						src="../eara-msa.png"
						className="architecture-image"
					></img>
					<p>
						(맡은 서버와 직접적으로 관련된 아키텍쳐만
						나타나있습니다. 일부 로직이 생략되어있습니다. 실제로는
						더 많은 서버가 있습니다.)
					</p>
					<ul>
						<li>
							속도 개선을 위해 통신 후 응답이 필요하지 않은 경우
							비동기로 진행하기로 했습니다.   
						</li>
						<li>
							요청이 누락되지 않게 하기 위해 메시지큐(RabbitMQ)를
							사용했습니다.
						</li>
						<li>
							응답이 필요한 경우 Feign Client를 사용하여 보다
							간편하게 코드를 구현했습니다
						</li>
					</ul>
				</li>
				<li>
					정적 코드 분석 및 테스트 커버리지 측정
					<ul>
						<li>
							테스트 커버리지의 목표를 80%로 하고 테스트 코드를
							작성했습니다.
						</li>
						<li>
							Junit과 Mockito, Rest Assured를 이용해 테스트 코드를
							작성했습니다.
						</li>
					</ul>
				</li>
				<li>
					인수 테스트 주도 개발 진행
					<a
						className="eara-link"
						href="https://github.com/We-Eokam/Ea-ra/blob/master/accusation/src/test/java/com/eokam/accusation/acceptance/AccusationAcceptanceTest.java"
					>
						[인수 테스트 코드 링크]
					</a>
					<ul>
						<li>
							휴먼 에러를 줄이고, 코드의 품질과 요구사항에 대한
							이해를 높이기 위해  인수 테스트 주도 개발을
							진행했습니다. 
						</li>
						<li>
							가독성을 높이기 위해 한글 메서드 네이밍을
							사용했습니다.
						</li>
					</ul>
				</li>
				<li>
					Github의 Webhook을 이용해 브랜치에 push시 자동으로
					배포되도록 Jenkins pipeline 작성
					<ul>
						<li>Dockerfile을 이용해 이미지 빌드 후 배포 진행</li>
					</ul>
				</li>
				<h2>🏫 배운점</h2>
				<li>MSA에 대해 학습하고 이해할 수 있었습니다.</li>
				<li>Spring Cloud에 대해서 학습할 수 있었습니다.</li>
				<li>RabbitMQ와 Feign Client에 대해 학습할 수 있었습니다.</li>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>비효율적인 서비스 분할 (굳이 MSA일 필요가 있었는가?)</h3>
				<p>
					서비스를 분리했음에도 서비스 간의 상호작용이 많았습니다.
					서비스와 다른 서비스 간의 경계가 명확하지 않아 MSA로 굳이 할
					필요가 있었는지 의문점이 들었습니다. 완전히 분리할 수 있는
					도메인이 아니었기 때문에 A 서비스를 사용해도 B,C와
					상호작용하는 식의 기능이 많았습니다. 모든 서비스가
					얽혀있었기 때문에 굳이 MSA 구조로 설계할 필요가 없었다는
					생각이 들었습니다. 물론 서비스를 제대로 분리했다면
					괜찮았겠지만, 모든 서비스가 환경 활동 인증, 제보, 적립과
					얽혀있었기 때문에 개발 비용이나 서버 비용 등 모놀로식으로
					진행하는 것이 더 나았을 것이라고 생각합니다. Monolothic으로
					했다면 매우 간단하게 구현할 수 있는 작업을 MSA로 구현해서
					불필요한 통신이 늘어났습니다. 프론트엔드의 경우 원하는
					정보를 얻기 위해 API를 매우 여러 번 요청해야 했습니다.
					이러한 과정에서 서비스 분할이 제대로 이뤄지지 않았다고
					느꼈으며, 불필요한 아키텍쳐 도입이라고 느끼게 되었습니다.
				</p>
				<h3>그럼에도 MSA 개발을 하며 배운 점</h3>
				<p>
					MSA를 도입해 개발하며 많은 것을 배웠습니다. 모놀리식으로
					구현할 때보다 훨씬 더 신경쓸게 많았고,  통신 과정에서 어떤
					기술을 사용할지도 많은 고민이 되었습니다.  에러가 발생할 때
					어떤 서버에서 문제가 발생하는지 찾기가 어려워, 기회가 된다면
					로깅과 분산처리를 진행하고 싶습니다. 프로젝트를 구현하며
					RabbitMQ와 Feign Client를 사용했는데, 이를 사용하며 동기와
					비동기에 대해서  더욱 이해도를 높일 수 있었습니다.  현재
					RabbitMQ의 경우 잘못된 요청이 올 경우 무한히 재시도를
					진행하는데, DLX를 이용해 재시도 횟수 제한 처리를  진행할
					예정입니다.
				</p>
				<h3>인수 테스트 주도 개발</h3>
				<p>
					인수 테스트 주도 개발을 진행하며 테스트 코드 작성과 문서화를
					강제화 했습니다.  테스트 코드를 먼저 작성하고 API를 구현한
					뒤 테스트 코드가 통과하는 것을 확인하니 매우 뿌듯했습니다. 
					테스트 커버리지 목표를 80%로 설정하고 테스트 코드를
					작성했습니다.  앞으로도 품질이 높은 코드와 휴먼 에러가 적은
					코드를 작성하기 위해 노력해야겠다고 생각했습니다.
				</p>
			</React.Fragment>
		),
	};
}
function article_5() {
	return {
		period: "2023.10 ~ 2023.11 (7주)",
		title: "🌱 EARA",
		description: "탄소 중립 활동을 하며 환경 보호를 실천하는 서비스",
		linkcolor: "#e8fd8b",
		hovercolor: "#cbf58c",
		links: [
			{
				info: "영상 URL",
				url: "https://www.youtube.com/watch?v=8FcnqC_jvRc",
			},
			{
				info: "Github URL",
				url: "https://github.com/We-Eokam/Ea-ra",
			},
		],
		stacks: [
			"Java, Spring Boot, Gradle",
			"MariaDB, Spring Data JPA",
			"Spring Cloud, RabbitMQ",
			"Amazon EC2, Amazon S3, Docker, Jenkins, Nginx, SonarQube, Jacoco, Git, Gitlab, Jira",
		],
		develop_role: [
			"데이터베이스 설계 참여",
			"서버 구조 설계 참여",
			"Amazon S3를 이용한 파일 업로드 구현",
			"활동으로 인한 재화 적립 서버 구현",
			"환경 오염 활동 제보 서버 구현",
			"Jenkins와 Docker를 이용해 배포 진행",
			"SonarQube 적용",
		],
		keywords: [
			"Spring Boot",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		role: "백엔드 개발, 인프라",
		team: "팀 프로젝트 (BE 3, FE 3)",
		thumbnail_image: "../eara-thumbnail.png",
		architecture_image: "../eara-ad.png",
		long_description:
			"EARA는 친구와 함께 탄소 중립 활동을 하며 환경 보호를 실천하는 서비스입니다. 탄소 중립 포인트와 연결하여, 사용자가 한 환경 보호 활동에 대해서 얼마나 많은 탄소 중립 포인트를 얻을 수 있는지 수치적으로 분석하고 그래프로 확인할 수 있습니다.",
		develop_content: (
			<React.Fragment>
				<h3>■ AS IS</h3>
				<li>
					<b>Business</b>
					<ul>
						<li>
							제보장을 가진 사용자는 환경 오염을 한 친구를 제보할
							수 있다.
							<ul>
								<li>
									제보할 때는 대상, 제보 내용, 사진을 입력해야
									한다.
								</li>
								<li>
									제보 내용이 '기타'인 경우 제보 세부 내용을
									사용자가 작성해야 한다.
								</li>
								<li>제보 시 제보장의 개수가 1개씩 줄어든다.</li>
							</ul>
						</li>
						<li>회원은 자신이 받은 제보를 볼 수 있다</li>
						<li>
							다른 유저의 페이지에 갔을 때, 자신이 보낸 제보장만
							볼 수 있다.
						</li>
						<li>
							회원은 환경 보호 활동을 하거나 제보를 당함으로써
							재화를 쌓거나 잃을 수 있다.
						</li>
						<li>
							최근 일주일/한 달 간 적립된 일별 재화 양과 활동
							횟수를 조회할 수 있다.
						</li>
					</ul>
				</li>
				<li>
					<b>Tech</b>
					<ul>
						<li>REST API로 구현합니다.</li>
						<li>
							이미지 등록은 클라우드 서비스에 합니다. (Amazon S3)
						</li>
						<li>모든 기능은 로그인한 유저만 가능합니다.</li>
						<li>AWS EC2에 Docker를 이용해 배포합니다.</li>
						<li>
							제보장의 개수는 User Service에 요청해서 줄여야
							합니다.
						</li>
						<li>
							제보를 한 뒤 해당하는 활동에 대한 재화 적립을
							요청해야합니다.
						</li>
					</ul>
				</li>
				<h3>■ Challenge</h3>
				<li>Spring Boot를 이용해 REST API를 구현</li>
				<li>Amazon S3와 멀티파트를 이용해 파일 업로드 기능 구현</li>
				<li>
					MSA 구조로 백엔드 서버를 개발 (제보 서버, 적립 서버 구현)
					<img
						src="../eara-msa.png"
						className="architecture-image"
					></img>
					<p>
						(맡은 서버와 직접적으로 관련된 아키텍쳐만
						나타나있습니다. 일부 로직이 생략되어있습니다. 실제로는
						더 많은 서버가 있습니다.)
					</p>
					<ul>
						<li>
							속도 개선을 위해 통신 후 응답이 필요하지 않은 경우
							비동기로 진행하기로 했습니다.   
						</li>
						<li>
							요청이 누락되지 않게 하기 위해 메시지큐(RabbitMQ)를
							사용했습니다.
						</li>
						<li>
							응답이 필요한 경우 Feign Client를 사용하여 보다
							간편하게 코드를 구현했습니다
						</li>
					</ul>
				</li>
				<li>
					정적 코드 분석 및 테스트 커버리지 측정
					<ul>
						<li>
							테스트 커버리지의 목표를 80%로 하고 테스트 코드를
							작성했습니다.
						</li>
						<li>
							Junit과 Mockito, Rest Assured를 이용해 테스트 코드를
							작성했습니다.
						</li>
					</ul>
				</li>
				<li>
					인수 테스트 주도 개발 진행
					<a
						className="eara-link"
						href="https://github.com/We-Eokam/Ea-ra/blob/master/accusation/src/test/java/com/eokam/accusation/acceptance/AccusationAcceptanceTest.java"
					>
						[인수 테스트 코드 링크]
					</a>
					<ul>
						<li>
							휴먼 에러를 줄이고, 코드의 품질과 요구사항에 대한
							이해를 높이기 위해  인수 테스트 주도 개발을
							진행했습니다. 
						</li>
						<li>
							가독성을 높이기 위해 한글 메서드 네이밍을
							사용했습니다.
						</li>
					</ul>
				</li>
				<li>
					Github의 Webhook을 이용해 브랜치에 push시 자동으로
					배포되도록 Jenkins pipeline 작성
					<ul>
						<li>Dockerfile을 이용해 이미지 빌드 후 배포 진행</li>
					</ul>
				</li>
				<h2>🏫 배운점</h2>
				<li>MSA에 대해 학습하고 이해할 수 있었습니다.</li>
				<li>Spring Cloud에 대해서 학습할 수 있었습니다.</li>
				<li>RabbitMQ와 Feign Client에 대해 학습할 수 있었습니다.</li>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>비효율적인 서비스 분할 (굳이 MSA일 필요가 있었는가?)</h3>
				<p>
					서비스를 분리했음에도 서비스 간의 상호작용이 많았습니다.
					서비스와 다른 서비스 간의 경계가 명확하지 않아 MSA로 굳이 할
					필요가 있었는지 의문점이 들었습니다. 완전히 분리할 수 있는
					도메인이 아니었기 때문에 A 서비스를 사용해도 B,C와
					상호작용하는 식의 기능이 많았습니다. 모든 서비스가
					얽혀있었기 때문에 굳이 MSA 구조로 설계할 필요가 없었다는
					생각이 들었습니다. 물론 서비스를 제대로 분리했다면
					괜찮았겠지만, 모든 서비스가 환경 활동 인증, 제보, 적립과
					얽혀있었기 때문에 개발 비용이나 서버 비용 등 모놀로식으로
					진행하는 것이 더 나았을 것이라고 생각합니다. Monolothic으로
					했다면 매우 간단하게 구현할 수 있는 작업을 MSA로 구현해서
					불필요한 통신이 늘어났습니다. 프론트엔드의 경우 원하는
					정보를 얻기 위해 API를 매우 여러 번 요청해야 했습니다.
					이러한 과정에서 서비스 분할이 제대로 이뤄지지 않았다고
					느꼈으며, 불필요한 아키텍쳐 도입이라고 느끼게 되었습니다.
				</p>
				<h3>그럼에도 MSA 개발을 하며 배운 점</h3>
				<p>
					MSA를 도입해 개발하며 많은 것을 배웠습니다. 모놀리식으로
					구현할 때보다 훨씬 더 신경쓸게 많았고,  통신 과정에서 어떤
					기술을 사용할지도 많은 고민이 되었습니다.  에러가 발생할 때
					어떤 서버에서 문제가 발생하는지 찾기가 어려워, 기회가 된다면
					로깅과 분산처리를 진행하고 싶습니다. 프로젝트를 구현하며
					RabbitMQ와 Feign Client를 사용했는데, 이를 사용하며 동기와
					비동기에 대해서  더욱 이해도를 높일 수 있었습니다.  현재
					RabbitMQ의 경우 잘못된 요청이 올 경우 무한히 재시도를
					진행하는데, DLX를 이용해 재시도 횟수 제한 처리를  진행할
					예정입니다.
				</p>
				<h3>인수 테스트 주도 개발</h3>
				<p>
					인수 테스트 주도 개발을 진행하며 테스트 코드 작성과 문서화를
					강제화 했습니다.  테스트 코드를 먼저 작성하고 API를 구현한
					뒤 테스트 코드가 통과하는 것을 확인하니 매우 뿌듯했습니다. 
					테스트 커버리지 목표를 80%로 설정하고 테스트 코드를
					작성했습니다.  앞으로도 품질이 높은 코드와 휴먼 에러가 적은
					코드를 작성하기 위해 노력해야겠다고 생각했습니다.
				</p>
			</React.Fragment>
		),
	};
}
function article_6() {
	return {
		period: "2023.10 ~ 2023.11 (7주)",
		title: "🌱 EARA",
		description: "탄소 중립 활동을 하며 환경 보호를 실천하는 서비스",
		linkcolor: "#e8fd8b",
		hovercolor: "#cbf58c",
		links: [
			{
				info: "영상 URL",
				url: "https://www.youtube.com/watch?v=8FcnqC_jvRc",
			},
			{
				info: "Github URL",
				url: "https://github.com/We-Eokam/Ea-ra",
			},
		],
		stacks: [
			"Java, Spring Boot, Gradle",
			"MariaDB, Spring Data JPA",
			"Spring Cloud, RabbitMQ",
			"Amazon EC2, Amazon S3, Docker, Jenkins, Nginx, SonarQube, Jacoco, Git, Gitlab, Jira",
		],
		develop_role: [
			"데이터베이스 설계 참여",
			"서버 구조 설계 참여",
			"Amazon S3를 이용한 파일 업로드 구현",
			"활동으로 인한 재화 적립 서버 구현",
			"환경 오염 활동 제보 서버 구현",
			"Jenkins와 Docker를 이용해 배포 진행",
			"SonarQube 적용",
		],
		keywords: [
			"Spring Boot",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		role: "백엔드 개발, 인프라",
		team: "팀 프로젝트 (BE 3, FE 3)",
		thumbnail_image: "../eara-thumbnail.png",
		architecture_image: "../eara-ad.png",
		long_description:
			"EARA는 친구와 함께 탄소 중립 활동을 하며 환경 보호를 실천하는 서비스입니다. 탄소 중립 포인트와 연결하여, 사용자가 한 환경 보호 활동에 대해서 얼마나 많은 탄소 중립 포인트를 얻을 수 있는지 수치적으로 분석하고 그래프로 확인할 수 있습니다.",
		develop_content: (
			<React.Fragment>
				<h3>■ AS IS</h3>
				<li>
					<b>Business</b>
					<ul>
						<li>
							제보장을 가진 사용자는 환경 오염을 한 친구를 제보할
							수 있다.
							<ul>
								<li>
									제보할 때는 대상, 제보 내용, 사진을 입력해야
									한다.
								</li>
								<li>
									제보 내용이 '기타'인 경우 제보 세부 내용을
									사용자가 작성해야 한다.
								</li>
								<li>제보 시 제보장의 개수가 1개씩 줄어든다.</li>
							</ul>
						</li>
						<li>회원은 자신이 받은 제보를 볼 수 있다</li>
						<li>
							다른 유저의 페이지에 갔을 때, 자신이 보낸 제보장만
							볼 수 있다.
						</li>
						<li>
							회원은 환경 보호 활동을 하거나 제보를 당함으로써
							재화를 쌓거나 잃을 수 있다.
						</li>
						<li>
							최근 일주일/한 달 간 적립된 일별 재화 양과 활동
							횟수를 조회할 수 있다.
						</li>
					</ul>
				</li>
				<li>
					<b>Tech</b>
					<ul>
						<li>REST API로 구현합니다.</li>
						<li>
							이미지 등록은 클라우드 서비스에 합니다. (Amazon S3)
						</li>
						<li>모든 기능은 로그인한 유저만 가능합니다.</li>
						<li>AWS EC2에 Docker를 이용해 배포합니다.</li>
						<li>
							제보장의 개수는 User Service에 요청해서 줄여야
							합니다.
						</li>
						<li>
							제보를 한 뒤 해당하는 활동에 대한 재화 적립을
							요청해야합니다.
						</li>
					</ul>
				</li>
				<h3>■ Challenge</h3>
				<li>Spring Boot를 이용해 REST API를 구현</li>
				<li>Amazon S3와 멀티파트를 이용해 파일 업로드 기능 구현</li>
				<li>
					MSA 구조로 백엔드 서버를 개발 (제보 서버, 적립 서버 구현)
					<img
						src="../eara-msa.png"
						className="architecture-image"
					></img>
					<p>
						(맡은 서버와 직접적으로 관련된 아키텍쳐만
						나타나있습니다. 일부 로직이 생략되어있습니다. 실제로는
						더 많은 서버가 있습니다.)
					</p>
					<ul>
						<li>
							속도 개선을 위해 통신 후 응답이 필요하지 않은 경우
							비동기로 진행하기로 했습니다.   
						</li>
						<li>
							요청이 누락되지 않게 하기 위해 메시지큐(RabbitMQ)를
							사용했습니다.
						</li>
						<li>
							응답이 필요한 경우 Feign Client를 사용하여 보다
							간편하게 코드를 구현했습니다
						</li>
					</ul>
				</li>
				<li>
					정적 코드 분석 및 테스트 커버리지 측정
					<ul>
						<li>
							테스트 커버리지의 목표를 80%로 하고 테스트 코드를
							작성했습니다.
						</li>
						<li>
							Junit과 Mockito, Rest Assured를 이용해 테스트 코드를
							작성했습니다.
						</li>
					</ul>
				</li>
				<li>
					인수 테스트 주도 개발 진행
					<a
						className="eara-link"
						href="https://github.com/We-Eokam/Ea-ra/blob/master/accusation/src/test/java/com/eokam/accusation/acceptance/AccusationAcceptanceTest.java"
					>
						[인수 테스트 코드 링크]
					</a>
					<ul>
						<li>
							휴먼 에러를 줄이고, 코드의 품질과 요구사항에 대한
							이해를 높이기 위해  인수 테스트 주도 개발을
							진행했습니다. 
						</li>
						<li>
							가독성을 높이기 위해 한글 메서드 네이밍을
							사용했습니다.
						</li>
					</ul>
				</li>
				<li>
					Github의 Webhook을 이용해 브랜치에 push시 자동으로
					배포되도록 Jenkins pipeline 작성
					<ul>
						<li>Dockerfile을 이용해 이미지 빌드 후 배포 진행</li>
					</ul>
				</li>
				<h2>🏫 배운점</h2>
				<li>MSA에 대해 학습하고 이해할 수 있었습니다.</li>
				<li>Spring Cloud에 대해서 학습할 수 있었습니다.</li>
				<li>RabbitMQ와 Feign Client에 대해 학습할 수 있었습니다.</li>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>비효율적인 서비스 분할 (굳이 MSA일 필요가 있었는가?)</h3>
				<p>
					서비스를 분리했음에도 서비스 간의 상호작용이 많았습니다.
					서비스와 다른 서비스 간의 경계가 명확하지 않아 MSA로 굳이 할
					필요가 있었는지 의문점이 들었습니다. 완전히 분리할 수 있는
					도메인이 아니었기 때문에 A 서비스를 사용해도 B,C와
					상호작용하는 식의 기능이 많았습니다. 모든 서비스가
					얽혀있었기 때문에 굳이 MSA 구조로 설계할 필요가 없었다는
					생각이 들었습니다. 물론 서비스를 제대로 분리했다면
					괜찮았겠지만, 모든 서비스가 환경 활동 인증, 제보, 적립과
					얽혀있었기 때문에 개발 비용이나 서버 비용 등 모놀로식으로
					진행하는 것이 더 나았을 것이라고 생각합니다. Monolothic으로
					했다면 매우 간단하게 구현할 수 있는 작업을 MSA로 구현해서
					불필요한 통신이 늘어났습니다. 프론트엔드의 경우 원하는
					정보를 얻기 위해 API를 매우 여러 번 요청해야 했습니다.
					이러한 과정에서 서비스 분할이 제대로 이뤄지지 않았다고
					느꼈으며, 불필요한 아키텍쳐 도입이라고 느끼게 되었습니다.
				</p>
				<h3>그럼에도 MSA 개발을 하며 배운 점</h3>
				<p>
					MSA를 도입해 개발하며 많은 것을 배웠습니다. 모놀리식으로
					구현할 때보다 훨씬 더 신경쓸게 많았고,  통신 과정에서 어떤
					기술을 사용할지도 많은 고민이 되었습니다.  에러가 발생할 때
					어떤 서버에서 문제가 발생하는지 찾기가 어려워, 기회가 된다면
					로깅과 분산처리를 진행하고 싶습니다. 프로젝트를 구현하며
					RabbitMQ와 Feign Client를 사용했는데, 이를 사용하며 동기와
					비동기에 대해서  더욱 이해도를 높일 수 있었습니다.  현재
					RabbitMQ의 경우 잘못된 요청이 올 경우 무한히 재시도를
					진행하는데, DLX를 이용해 재시도 횟수 제한 처리를  진행할
					예정입니다.
				</p>
				<h3>인수 테스트 주도 개발</h3>
				<p>
					인수 테스트 주도 개발을 진행하며 테스트 코드 작성과 문서화를
					강제화 했습니다.  테스트 코드를 먼저 작성하고 API를 구현한
					뒤 테스트 코드가 통과하는 것을 확인하니 매우 뿌듯했습니다. 
					테스트 커버리지 목표를 80%로 설정하고 테스트 코드를
					작성했습니다.  앞으로도 품질이 높은 코드와 휴먼 에러가 적은
					코드를 작성하기 위해 노력해야겠다고 생각했습니다.
				</p>
			</React.Fragment>
		),
	};
}

const myProjects = [
	article_1,
	article_2,
	article_3,
	article_4,
	article_5,
	article_6,
];

export default myProjects;
