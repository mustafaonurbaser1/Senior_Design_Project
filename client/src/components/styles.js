import styled from "styled-components";

import {v} from "../styles/variables"


export const SLayout = styled.div`
display: flex;
margin-left: 0;
`

export const SMain = styled.main`
padding: calc(${v.smlSpacing} * 2);
h1 {
    font-size:  14px;
}
`