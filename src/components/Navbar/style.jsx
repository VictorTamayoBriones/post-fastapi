import styled from 'styled-components';

export const Navigation = styled.nav`
    width: 100%;
    background: #333333;
    color: #fff;
    padding: 12px;
    ul{
        display: flex;
        justify-content: space-between;
        list-style: none;
        &:hover{
            cursor: pointer;
        }
        a{
            color: #fff;
            text-decoration: none;
        }
    }
`;