import awsLogo from "../assets/logos/aws.png";
import chakraLogo from "../assets/logos/chakra.png";
import cssLogo from "../assets/logos/css3.png";
import electronLogo from "../assets/logos/electron.webp";
import expoLogo from "../assets/logos/expo.png";
import expressLogo from "../assets/logos/express.png";
import firebaseLogo from "../assets/logos/firebase.png";
import gcpLogo from "../assets/logos/gcp.png";
import herokuLogo from "../assets/logos/heroku.png";
import htmlLogo from "../assets/logos/html5.png";
import javaLogo from "../assets/logos/java.png";
import javascriptLogo from "../assets/logos/javascript.png";
import nodeLogo from "../assets/logos/node.png";
import reactLogo from "../assets/logos/react.png";
import typescriptLogo from "../assets/logos/typescript.png";
import nestLogo from "../assets/logos/nest.png";
import nextLogo from "../assets/logos/next.png";
import reactRouterLogo from "../assets/logos/react-router.png";
import reduxLogo from "../assets/logos/redux.png";
import sassLogo from "../assets/logos/sass.png";
import socketioLogo from "../assets/logos/socketio.png";
import styledComponentsLogo from "../assets/logos/styled-components.png";
import webpackLogo from "../assets/logos/webpack.png";
import apacheLogo from "../assets/logos/apache.png";
import nginxLogo from "../assets/logos/nginx.png";
import dynamodbLogo from "../assets/logos/dynamodb.png";
import mariadbLogo from "../assets/logos/mariadb.png";
import mongodbLogo from "../assets/logos/mongodb.png";
import postgresqlLogo from "../assets/logos/postgresql.png";
import eslintLogo from "../assets/logos/eslint.png";
import jiraLogo from "../assets/logos/jira.png";
import prettierLogo from "../assets/logos/prettier.png";

export const information = {
	name: "Leonardo Petta do Nascimento",
	role: "Desenvolvedor FullStack",
	miniAbout: "Olá, eu sou Leonardo, estudante e desenvolvedor. Seja bem vindo ao meu site!",
	about: "Sou formado em ciência da computação na Universidade Paulista (UNIP) e desenvolvedor da TradePro Tecnologia. Ademais, estou cursando pós-graduação em Desenvolvimento multiplataforma mobile na Faculdade Descomplica. Atualmente trabalho com projetos fullstack, utilizando as linguagens de programação, Node (TypeScript), React e Firebase. Fiquei muito tempo focado no desenvolvimento web com React e Node, mas hoje, tento me aperfeiçoar na área mobile com React Native.",
	social: {
		linkedin: "https://www.linkedin.com/in/leonardo-petta-do-nascimento-75674015b/",
		github: "https://github.com/leonardopn",
		facebook: "https://www.facebook.com/leonardo.petta.nascimento",
	},
	timeline: [
		{
			type: "EDUCATION",
			company: "Universidade Paulista (UNIP)",
			role: "Ciência da Computação",
			period: "2018 - 2021",
			location: "Campinas - SP",
			description: "Graduação em Ciência da Computação",
			tags: ["Bacharelado", "Faculdade"],
		},
		{
			type: "JOB",
			company: "Integrance",
			role: "Estágio em desenvolvimento",
			period: "Jun 2020 - Nov 2020",
			location: "Campinas - SP",
			description: "Responsável pelo desenvolvimento de pequenas automações e suporte.",
			tags: ["Javascript", "Node", "Google Script", "AWS"],
		},
		{
			type: "JOB",
			company: "Integrance",
			role: "Desenvolvedor Pleno",
			period: "Nov 2020 - Abr 2022",
			location: "Campinas - SP",
			description: "Responsável pelo desenvolvimento e manutenção de sistemas internos.",
			tags: ["Typescript", "Node", "React", "Google Script", "AWS"],
		},
		{
			type: "JOB",
			company: "TradePro",
			role: "Desenvolvedor Pleno",
			period: "Abr 2022 - Presente",
			location: "Pinhais - PR",
			description:
				"Responsável pelo desenvolvimento e manutenção de sistemas internos utilizando React, React native e Firebase",
			tags: ["Typescript", "Node", "React/Native", "Firebase"],
		},
		{
			type: "EDUCATION",
			company: "Faculdade Descomplica",
			role: "Desenvolvimento multi-plataforma mobile",
			period: "2022 - 2023",
			location: "Online",
			description: "Pós-graduação em desenvolvimento multi-plataforma mobile",
			tags: ["Pós-graduação", "Faculdade"],
		},
		{
			type: "EDUCATION",
			company: "Faculdade Descomplica",
			role: "Projetos de Cloud Computing",
			period: "2022 - 2023",
			location: "Online",
			description: "Pós-graduação em Projetos de Cloud Computing",
			tags: ["Pós-graduação", "Faculdade"],
		},
	],
	skills: [
		{
			name: "React JS",
			image: reactLogo,
			mainColor: "#63dbf9",
			secondaryColor: "#212121",
		},
		{
			name: "React Native",
			image: reactLogo,
			mainColor: "#63dbf9",
			secondaryColor: "#212121",
		},
		{
			name: "Node JS",
			image: nodeLogo,
			mainColor: "#78b763",
			secondaryColor: "#303030",
		},
		{
			name: "CSS3",
			image: cssLogo,
			mainColor: "#0474bb",
			secondaryColor: "#363737",
		},
		{
			name: "HTML5",
			image: htmlLogo,
			mainColor: "#fe502b",
			secondaryColor: "#363737",
		},
		{
			name: "Java",
			image: javaLogo,
			mainColor: "#e93034",
			secondaryColor: "#ffffff",
		},
		{
			name: "Javascript",
			image: javascriptLogo,
			mainColor: "#f0db5f",
			secondaryColor: "#323330",
		},
		{
			name: "Typescript",
			image: typescriptLogo,
			mainColor: "#ffffff",
			secondaryColor: "#2e79c3",
		},
		{
			name: "Firebase",
			image: firebaseLogo,
			mainColor: "#f7c544",
			secondaryColor: "#0b96da",
		},
		{
			name: "AWS",
			image: awsLogo,
			mainColor: "#fe9b2b",
			secondaryColor: "#222e3b",
			showName: false,
		},
		{
			name: "Google Cloud Platform",
			image: gcpLogo,
			mainColor: "#4285ef",
			secondaryColor: "#ffffff",
		},
		{
			name: "Heroku",
			image: herokuLogo,
			mainColor: "#ffffff",
			secondaryColor: "#410291",
			showName: false,
		},
		{
			name: "Chakra UI",
			image: chakraLogo,
			mainColor: "#37c7ba",
			secondaryColor: "#333e4e",
		},
		{
			name: "Electron",
			image: electronLogo,
			mainColor: "#a1ebf8",
			secondaryColor: "#2b2e39",
		},
		{
			name: "Expo",
			image: expoLogo,
			mainColor: "#ffffff",
			secondaryColor: "#00001f",
		},
		{
			name: "Express JS",
			image: expressLogo,
			mainColor: "#ffffff",
			secondaryColor: "#323232",
			showName: false,
		},
		{
			name: "Nest JS",
			image: nestLogo,
			mainColor: "#FFFFFF",
			secondaryColor: "#df274f",
		},
		{
			name: "Next JS",
			image: nextLogo,
			mainColor: "#000000",
			secondaryColor: "#ffffff",
			showName: false,
		},
		{
			name: "React Router",
			image: reactRouterLogo,
			mainColor: "#f84b4d",
			secondaryColor: "#252525",
			showName: false,
		},
		{
			name: "Redux",
			image: reduxLogo,
			mainColor: "#ffffff",
			secondaryColor: "#764ab9",
		},
		{
			name: "Sass",
			image: sassLogo,
			mainColor: "#ffffff",
			secondaryColor: "#cd6899",
			showName: false,
		},
		{
			name: "Socket.io",
			image: socketioLogo,
			mainColor: "#ffffff",
			secondaryColor: "#000000",
		},
		{
			name: "Styled Components",
			image: styledComponentsLogo,
			mainColor: "#ffffff",
			secondaryColor:
				"linear-gradient(20deg, rgba(228,101,142,1) 0%, rgba(243,174,88,1) 100%)",
			showName: false,
		},
		{
			name: "Webpack",
			image: webpackLogo,
			mainColor: "#8ed5fa",
			secondaryColor: "#1e77bc",
		},
		{
			name: "Apache",
			image: apacheLogo,
			mainColor: "#c3203e",
			secondaryColor: "#151811",
		},
		{
			name: "Nginx",
			image: nginxLogo,
			mainColor: "#ffffff",
			secondaryColor: "#0d9921",
		},
		{
			name: "DynamoDB",
			image: dynamodbLogo,
			mainColor: "#2d72b8",
			secondaryColor: "#ffffff",
		},
		{
			name: "MariaDB",
			image: mariadbLogo,
			mainColor: "#ffffff",
			secondaryColor: "#013544",
			showName: false,
		},
		{
			name: "MongoDB",
			image: mongodbLogo,
			mainColor: "#1e853a",
			secondaryColor: "#001d29",
		},
		{
			name: "PostgreSQL",
			image: postgresqlLogo,
			mainColor: "#ffffff",
			secondaryColor: "#306790",
		},
		{
			name: "Eslint",
			image: eslintLogo,
			mainColor: "#ffffff",
			secondaryColor: "#492fbf",
		},
		{
			name: "Prettier",
			image: prettierLogo,
			mainColor: "#57b4b4",
			secondaryColor: "#192a31",
		},
		{
			name: "Jira",
			image: jiraLogo,
			mainColor: "#ffffff",
			secondaryColor: "#0558ce",
		},
	],
};
