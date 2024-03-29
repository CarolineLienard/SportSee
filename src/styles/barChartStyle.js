import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-bottom: 2em;
	height: 320px;
	width: 835px;
	border-radius: 5px;
	background: #FBFBFB;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	padding: 25px;

	@media (max-width: 1025px) {
		padding-left:0;
	}
`
export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    margin-right: 1.5rem;
`

export const Title= styled.h2`
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`

export const Text = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #74798c;
	margin-left: 10px;
`

export const Icon = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	align-self: center;
	margin-left: 30px;
`

export const Legend = styled.div`
	display: flex;
`

export const Info = styled.div`
    display: flex;
    align-items:center;
`
