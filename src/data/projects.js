import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

function article_1() {
	return {
		period: "2023.10.10 ~ 2023.11.24 (7주)",
		video: "https://www.youtube.com/watch?v=7CbTL1GAmvE",
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
		period: "2023.08.28 ~ 2023.10.06 (7주)",
		video: "https://www.youtube.com/watch?v=6WSHhNuqmHE",
		title: "Emotion Bank",
		description: "감정을 금액으로 환산하여 입출금 하는 서비스",
		linkcolor: "#d6f0ff",
		hovercolor: "#6cb5f9",
		github: "https://github.com/EmotionBank/EmotionBank",
		stacks: [
			"Java, Spring Boot, Spring Data JPA, Spring Cloud",
			"MySQL, Redis, MongoDB",
			"AWS EC2, RDS, S3, Jenkins, Nginx, Docker",
			"SonarQube, Grafana, Prometheus, JMeter ",
		],
		develop_role: [
			"유저 관련 API (유저 페이지, 유저 검색, 정보 수정/조회, 팔로우) ",
			"거래 리포트 API",
			"피드 API",
			"이체 API",
			"JMeter를 활용한 부하테스트",
		],
		keywords: ["Spring Boot", "Elasticsearch", "AWS Lambda", "API Gateway"],
		role: "백엔드 개발",
		team: "6명 (FE 2, BE 4)",
		thumbnail_image: "../EmotionBank.png", // 썸네일 이미지 URL 필요
		architecture_image: "../EB_architecture.png", // 아키텍처 다이어그램 이미지 URL 필요
		long_description: (
			<React.Fragment>
				<p>
					💡 EmotionBank는 감정을 금액으로 환산하여 입출금하는 서비스
					입니다.
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
				title: "데이터의 무결성",
				description:
					"이체, 입금과 같은 거래 요청 시 중복 요청이나 악의적인 요청을 하여 데이터의 무결성이 깨지는 문제상황이 발생하였습니다.",
				description2: [
					"이를 해결하기 위해 Redis의 분산락을 적용하여 중복(따닥) 요청을 방지 하였습니다.",
					"이체, 입금과 같은 요청에서 악의적인 금액 수정을 방지하기 위해서 요청시 남은 금액을 함께 전송하도록 하여 검증 과정을 거쳤습니다. ",
				],
			},
			{
				title: "코드 품질 향상",
				description:
					"다양한 방법으로 코드 품질 향상을 위해 노력하였습니다.",
				description2: [
					"SonarQube 를 이용한 코드 분석, 깃 커밋, 코딩 컨벤션 , Issue PR 을 통한 코드 리뷰 등 을 진행하며 팀의 생산성과 코드의 품질을 높일 수 있었습니다.",
					"레이어 간 DTO 를 구분하고, Inner Class와 정적 팩토리 메서드 패턴을 통해 DTO를 정의하여 객체지향 원칙을 준수하며 DTO 를 설계하였습니다.",
				],
			},
			{
				title: "모니터링 및 부하테스트",
				description:
					"Prometheus, Grafana 를 이용한 모니터링, JMeter를 이용한 부하테스트를 진행하며 어플리케이션의 성능 및 상태를 가시적으로 확인하고 성능 향상을 할 수 있었습니다. ",
				description2: [],
			},
			{
				title: "테스트 코드",
				description:
					"테스트 코드 작성을 통한 안정적인 개발을 진행하였습니다.",
				description2: [
					"Junit과 Spring의 테스트 모듈을 이용하여 단위테스트 및 통합테스트를 진행 하였습니다.",
					"Mock과 Stub에 대해 이해하고 상황에 따라 적절히 사용하여 테스트를 진행 하였습니다.",
				],
			},
		],
		blog: [
			{
				title: "작성중...",
				description: "작성중...",
				link: "https://velog.io/@ch0jm",
				linkText: "Read more",
			},
			{
				title: "작성중...",
				description: "작성중...",
				link: "https://velog.io/@ch0jm",
				linkText: "Read more",
			},
			{
				title: "작성중...",
				description: "작성중...",
				link: "https://velog.io/@ch0jm",
				linkText: "Read more",
			},
		],
	};
}

function article_3() {
	return {
		period: "2023.08.19 ~ 2023.09.17 (4주)",
		title: "Share Bank",
		description: "여행의 시작부터 끝까지 책임지는 금융 서비스",
		linkcolor: "#d6f0ff",
		hovercolor: "#6cb5f9",
		github: "https://github.com/lastname-dev/share-account-bank",
		stacks: [
			"Java, Spring Boot, Spring Data JPA, Spring Security, Spring Cloud",
			"MySQL, Redis",
			"FCM",
			"AWS EC2, RDS, S3, Nginx, Docker, Github Actions",
		],
		develop_role: [
			"Spring Security를 이용한 JWT 방식 인증",
			"다양한 확인 절차 도입 (SMTP 서버를 통한 이메일 인증, 계좌 비밀번호, 소유주 확인)",
			"그룹 관련 API (그룹 생성, 초대, 가입)",
			"계좌 관련 API (계좌 생성, 조회, 이체, 대표계좌, 그룹계좌, 회비 납부, 정산)",
			"Github Actions와 Docker를 이용한 CI/CD 파이프라인 구축",
			"FCM을 통한 푸시 알림",
		],
		keywords: ["Spring Boot", "Elasticsearch", "AWS Lambda", "API Gateway"],
		role: "백엔드 개발",
		team: "4명 (기획 1, FE 1, BE 2)",
		thumbnail_image: "../ShareBank.png", // 썸네일 이미지 URL 필요
		architecture_image: "../SB_architecture.png", // 아키텍처 다이어그램 이미지 URL 필요
		long_description: (
			<React.Fragment>
				<p>
					💡 EmotionBank는 감정을 금액으로 환산하여 입출금하는 서비스
					입니다.
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
				title: "토큰 방식 인증의 한계",
				description:
					"JWT는 무상태성을 가지고 토큰이 한번 발급되면 수정이 불가능하다는 보안적인 약점을 가지고 있습니다. 이에 따라 로그아웃 혹은 토큰이 탈취 되었을 때 문제 상황이 발생하였습니다.",
				description2: [
					"Access Token의 만료시간을 짧게 설정하고, Refresh Token을 이용하여 재발급 하도록 하였습니다. Redis의 TTL 을 적용하여 Refresh Token의 수명을 제어하였습니다.",
					"Redis를 활용해 Blacklist 를 구현하여 특정 토큰을 무력화 시켰습니다.",
				],
			},
			{
				title: "다양한 인증 방식",
				description:
					"금융 도메인의 특성상 보안이 더욱 중요시 되기 때문에 보안을 고려하여 다양한 인증 방식을 사용하였습니다.",
				description2: [
					"SMTP 프로토콜을 활용한 이메일 인증, 계좌 1원 인증, 계좌비밀번호와 같은 인증 절차를 구현 하였습니다.",
					"그룹 초대 시 3분의 유효기간을 가진 1회용 초대링크를 생성하여 보안에 유의하였습니다. ",
				],
			},
			{
				title: "금융 프로세스의 이해",
				description:
					"시중의 금융 업무 프로세스를 분석하고 이해하며 비슷하게 동작하도록 구현 하였습니다. ",
				description2: [
					"다양한 금융 현직자 분들과의 만남을 통해 시중의 은행서버의 아키텍처에 대해 파악하였습니다.",
					"크게 계정계(은행업무), 정보계(로그수집), 채널계(모바일뱅킹)으로 이루어져있음을 파악하고 각 역할에 맞도록 채널계, 계정계, 정보계로 서버를 분리하여 구축하였습니다.",
					"모든 요청은 채널계로 가도록 하였고, 계정계와 채널계는 Feign Client를 이용하여 통신하도록 구현하였습니다.",
				],
			},
			{
				title: "프록시 서버",
				description:
					"신한은행의 API 서버와 발생한 CORS 에러를 프록시 서버를 통하여 해결하였습니다.",
				description2: [
					"Client에서 API 서버에 요청시 CORS 에러가 발생하여 프록시 서버를 두어 중계하였습니다.",
				],
			},
			{
				title: "인프라 환경",
				description:
					"백엔드와 인프라를 전담하며 전체 아키텍처를 설계하고 인프라를 구축하였습니다.",
				description2: [
					"Github Actions와 Docker를 이용하여 CI / CD 파이프라인을 구축하였습니다.",
					"각 역할에 맞게 서버를 분리하고 Nginx 를 이용하여 로드밸런싱 및 HTTPS를 적용하였습니다.",
				],
			},
		],
		blog: [
			{
				title: "Redis 블랙리스트",
				description: "Redis를 이용한 JWT 블랙리스트 도입",
				link: "https://velog.io/@ch0jm/lnwfrngd",
				linkText: "Read more",
			},
			{
				title: "Spring Security JWT 인증",
				description: "Spring Security를 이용한 JWT 방식 인증 인가 구현",
				link: "https://velog.io/@ch0jm/1suek2er",
				linkText: "Read more",
			},
			{
				title: "작성중...",
				description: "작성중...",
				link: "https://velog.io/@ch0jm",
				linkText: "Read more",
			},
		],
	};
}

function article_4() {
	return {
		period: "2023.07.14 ~ 2023.08.18 (7주)",
		title: "VoteSkill",
		description: "음성과 화상으로 즐길 수 있는 웹 마피아 게임",
		video: "https://www.youtube.com/watch?v=j4NiSKCaPRE&feature=youtu.be",
		linkcolor: "#d6f0ff",
		hovercolor: "#6cb5f9",
		github: "https://github.com/lastname-dev/VoteSKill",
		stacks: [
			"Java, Spring Boot, Spring Data JPA, Spring Security",
			"MySQL, Redis",
			"WebRTC (OpenVidu)",
		],
		develop_role: [
			"Spring Security를 이용한 Oauth2.0, JWT 방식 로그인 구현",
			"스케줄러를 이용한 게임 진행 자동화",
			"WebRTC 라이브러리 OpenVidu 커스텀을 통한 음성,화상 채팅 기능 구현",
			"게임 스킬, 투표 처리 로직 구현",
			"SSE를 이용한 통신",
			"Redis를 이용한 게임 방 관리",
		],
		keywords: ["Spring Boot", "Elasticsearch", "AWS Lambda", "API Gateway"],
		role: "백엔드 개발",
		team: "6명 (FE 3, BE 2, Infra 1)",
		thumbnail_image: "../Voteskill.png", // 썸네일 이미지 URL 필요
		architecture_image: "../VS_architecture.png", // 아키텍처 다이어그램 이미지 URL 필요
		long_description: (
			<React.Fragment>
				<p>
					💡 VoteSKill 은 음성과 화상으로 즐길 수 있는 웹 마피아 게임
					입니다.
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
				title: "OAuth 와 JWT 방식 인증 / 인가",
				description:
					"다양한 인증 방식을 이해하고 Spring Security를 활용하여 인증 / 인가 를 구현 하였습니다.",
				description2: [
					"Oauth2.0의 Authorization Grant Type에 대해 이해하고 있으며 Code Grant Type을 적용하여 Spring Security를 활용하여 Oauth2.0 인증방식의 로그인을 구현 하였습니다.",
					"Spring Security의 Filter Chain에 대해 이해하며 필터를 커스텀하여 JWT 인증 절차를 구현하였습니다. ",
					"Redis의 TTL을 통하여 Refresh Token을 관리하였습니다.",
				],
			},
			{
				title: "MSA 환경에서의 Redis",
				description:
					"MSA 환경에서 동기화를 위해 Redis를 활용하고 직렬화 과정에서 발생한 문제를 해결하였습니다.",
				description2: [
					"다양한 Serializer를 비교하며 특징을 분석하고 MSA 환경에서 적합한 StringSerializer를 적용하여 게임 방을 관리하였습니다.",
				],
			},
			{
				title: "WebRTC의 이해와 적용",
				description:
					"WebRTC의 구조와 동작과정에 대해 이해하고 OpenVidu 라이브러리를 분석하고 커스텀하여 적용하였습니다.",
				description2: [
					"WebRTC의 Media Server, Signaling Server, Stun Server의 역할을 이해하며 Signaling Server를 구현하였습니다.",
				],
			},
			{
				title: "SSE 방식 도입",
				description:
					"기존의 WebSocket 방식에서 SSE 로 전환하여 부하를 줄였습니다.",
				description2: [
					"게임 진행시 서버에서 발생한 이벤트를 Client에 보내주는 상황에서 단방향으로만 통신이 이루어지기 때문에 SSE 방식으로 통신을 구현 하였습니다.",
				],
			},
			{
				title: "게임 진행 자동화 및 비동기 처리",
				description: "시간에 따라 게임 진행을 처리하였습니다.",
				description2: [
					"마피아 게임의 특성상 시간에 따라 하나의 흐름으로 게임이 진행되기 때문에 이를 Spring Scheduler를 활용하여 자동화 및 비동기 처리 하였습니다.",
				],
			},
		],
		blog: [
			{
				title: "Spring Security OAuth2.0",
				description: "Spring Security를 사용하여 카카오 로그인 구현",
				link: "https://velog.io/@ch0jm/test-16c3zc2fF",
				linkText: "Read more",
			},
			{
				title: "MSA 환경에서의 Redis",
				description: "MSA 환경에서 동기화를 위해 Redis를 사용한 이유",
				link: "https://velog.io/@ch0jm/5ar87jd1",
				linkText: "Read more",
			},
			{
				title: "Spring WebRTC 구현",
				description: "OpenVidu 라이브러리를 통해 WebRTC 구현",
				link: "https://velog.io/@ch0jm/yvt1mkyl",
				linkText: "Read more",
			},
		],
	};
}
function article_5() {
	return {
		period: "2023.05.12 ~ 2023.05.25 (2주)",
		title: "HappyTrail",
		description: "여행 계획을 공유 할 수 있는 웹 서비스",
		video: "https://youtu.be/w7pCXWuZtfo",
		linkcolor: "#d6f0ff",
		hovercolor: "#6cb5f9",
		github: "https://github.com/lastname-dev/happytrail",
		stacks: [
			"Java, Spring Boot, Servlet",
			"MySQL, JDBC, MyBatis",
			"HTML, CSS, JS, Vue.js",
		],
		develop_role: [
			"회원가입, 로그인, 로그아웃, 마이페이지",
			"정보 공유 게시판",
			"현재 진행중인 페스티벌 조회",
			"여행 후기 게시판",
			"여행 계획 작성, 경로 제공, 공유",
			"여행지 검색",
			"게시글 좋아요, 유저 팔로우",
		],
		keywords: ["Spring Boot", "Elasticsearch", "AWS Lambda", "API Gateway"],
		role: "풀스택 개발",
		team: "2명 (Full Stack 2)",
		thumbnail_image: "../Happytrail.png",
		erd_image:
			"https://github.com/lastname-dev/happytrail/assets/81070080/a6090488-1c4e-4330-9aa9-64084a0d92c7",
		long_description: (
			<React.Fragment>
				<p>
					💡 HappyTrail은 여행 계획을 공유 할 수 있는 웹 서비스 입니다
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
				title: "탄탄한 기본기",
				description:
					"JDBC, Servlet, JSP와 같은 JAVA EE의 핵심 기술만을 활용하여 웹 애플리케이션을 개발하며 기본기의 탄탄함을 갖출 수 있었습니다.",
				description2: [
					"Java + Servlet →JDBC + HTML →SpringMVC + JDBC + JSP →SpringBoot + MyBatis + Vue  순서대로 발전 시켜나가며 웹 애플리케이션의 발전과정을 직접 경험하였습니다.",
				],
			},
			{
				title: "데이터의 활용",
				description:
					"공공데이터 API를 활용하여 데이터 크롤링을 하고, JSON/XML 파싱을 통한 데이터를 가공하여 처리하였습니다.",
				description2: [
					"SAX, DOM Parser에 대한 이해를 하고 적용하였습니다.",
					"관광지 정보를 외부 API를 활용하여 크롤링하고, 필요한 데이터로 가공하여 저장하였습니다.",
					"MyBatis와 MySQL을 사용하여 약 30만건의 데이터를 관리하였습니다.",
				],
			},
			{
				title: "웹 전반에 대한 이해",
				description: "",
				description2: [
					"Vuex를 통한 전역 상태관리, 컴포넌트 재사용, Axios를 통한 비동기 통신 등을 진행하며 Vue를 이해하였습니다.",
					"풀스택 개발을 통하여 웹 어플리케이션 각 구성 요소 간의 상호작용에 대해 이해하였습니다.",
				],
			},
			{
				title: "설계 및 협업",
				description: "",
				description2: [
					"Usecase Diagram, Class Diagram, ERD, API 명세서 등의 탄탄한 설계 를 기반으로 하여 개발을 진행하였습니다.",
					"Git Branch Convention 및 Commit Convention 을 준수하며 Git 을 통해 협업 하였습니다. ",
					"기획 ,설계, 개발, 발표를 진행하며 프로젝트 프로세스에 대해 배울 수 있었습니다.",
				],
			},
		],
	};
}
function article_6() {
	return {
		period: "2022.03 ~ 2022.09 ",
		title: "Virtual Fitting",
		description: "가상 피팅을 할 수 있는 쇼핑몰",
		video: "https://www.youtube.com/watch?v=cga9QnJL2Ik&t=214s",
		linkcolor: "#d6f0ff",
		hovercolor: "#6cb5f9",
		github: "https://github.com/lastname-dev/virtualfitting",
		stacks: [
			"JavaScript, Node.js",
			"MongoDB",
			"HTML, CSS, React",
			"AWS Lambda, S3",
		],
		develop_role: [
			"풀스택 개발을 맡아 쇼핑몰 웹 전반에 대한 구현을 담당하였습니다.",
		],
		keywords: ["Spring Boot", "Elasticsearch", "AWS Lambda", "API Gateway"],
		role: "풀스택 개발",
		team: "2명 (Web 1, AI 1)",
		thumbnail_image: "../Virtualfitting.png",
		long_description: (
			<React.Fragment>
				<p>
					💡 Virtual Fitting 은 가상 피팅을 할 수 있는 쇼핑몰 입니다.
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
				title: "AWS Lambda를 이용한 이미지 리사이징",
				description:
					"가상 피팅 진행시 유저가 결과를 받아보기까지 오랜시간 소요되는 문제 상황이 있었습니다.",
				description2: [
					"AI 모델은 256*256 크기의 이미지를 사용하기 때문에 AWS Lambda를 이용하여 리사이징을 한 후 AI 서버는 피팅 하는 서비스에만 전담하도록 구성 하였습니다.",
					"Presigned URL을 이용하여 서버를 거치지 않고 바로 이미지를 업로드 할 수 있도록 하였습니다.",
				],
			},

			{
				title: "풀스택 개발을 통한 웹 전반에 대한 이해",
				description: "",
				description2: [
					"풀스택 개발을 통해 웹 애플리케이션의 흐름을 잘 파악할 수 있었습니다.",
					"클라이언트 측과 서버 측이 담당할 영역을 잘 구분해내고 후에 백엔드 개발을 진행할 때에 프론트엔드와 원활하게 협업할 수 있는 밑바탕이 되었습니다.",
				],
			},
		],
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
