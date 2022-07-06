import styled from "styled-components";
import BrickWall from "../assets/brick-wallpaper.png";

export const Container = styled.div`
	background-image: url(${BrickWall}),
		linear-gradient(90deg, rgba(2, 2, 6, 1) 0%, rgba(14, 30, 69, 1) 50%, rgba(2, 3, 8, 1) 100%);
	background-position: center;
	width: 100%;
	height: 100vh;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	border-radius: 10px;
	border: 10px solid ${({ theme }) => theme.colors.Pink};
	width: 60%;
	height: 70%;

	-webkit-box-shadow: 0px 0px 105px 0px rgba(255, 121, 197, 0.9);
	-moz-box-shadow: 0px 0px 105px 0px rgba(255, 121, 197, 0.9);
	box-shadow: 0px 0px 105px 0px rgba(255, 121, 197, 0.9);
`;
