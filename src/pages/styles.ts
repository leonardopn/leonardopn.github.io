import styled from "styled-components";
import BrickWall from "../assets/brick-wallpaper.png";

export const Container = styled.div`
	background-image: url(${BrickWall}),
		linear-gradient(90deg, rgba(2, 2, 6, 1) 0%, rgba(14, 30, 69, 1) 50%, rgba(2, 3, 8, 1) 100%);
	background-position: center;
	width: 100%;
	height: 100vh;
`;
