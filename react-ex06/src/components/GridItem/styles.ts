import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground === true ? '#81c1fd' : '#d1d1f8'};
    height: 110px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #CCC;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

type IconProps = {
    opacity?: number;
}

export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ? props.opacity : 1}
`;