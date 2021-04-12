import React from 'react';
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loader = () => {
    return (
        <SyncLoader
            color="#3f51b5"
            loading="true"
            css={override}
            size={20}
            margin="10px"
        />
    );
};

export default Loader;