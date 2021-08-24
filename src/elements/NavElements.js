import styled from "styled-components"

export const NavWrapper = styled.div`
    grid-column: 2 / span 12;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;

    & img {
        height: 55px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

`