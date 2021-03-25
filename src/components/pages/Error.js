import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";

import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

const ImageContainer = styled.div`  
    svg {
        width: 100%;
        height: auto;
        max-width: 250px;
        color: ${props => props.theme.colors.primary.main}
    }

`;
const ErrorTitle = styled.h3`
        margin-top: 0;
`;

const ErrorMessage = styled.p`
    font-weight: bolder;
    margin: 24px 0;
    font-size: 18px;
`;

const Error = ({ image, title, description }) => (
    <Section>
        <Grid sm={2}>
            <div>
                <Heading>
                    <ErrorTitle>{title}</ErrorTitle>
                </Heading>
                <ErrorMessage>{description}</ErrorMessage>
                <div>
                    <Button as={Link} to="/"color="primary">Ir Página Inicial</Button>
                </div>
            </div>
            <div>
                <ImageContainer>{image}</ImageContainer>
            </div>
        </Grid>
    </Section>
);

Error.defaultProps = {
    image: undefined,
    titulo: '',
    description: ''
};

Error.propTypes = {
    image: PropTypes.node,
    titulo: PropTypes.string,
    description: PropTypes.string,
};

export default Error
