import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 12px;
    display: ${ (props)=> props.flex ? 'flex' : 'block' };
    justify-content: space-between;
`;