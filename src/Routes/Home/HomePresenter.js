import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="현재상영중">
          {nowPlaying.map((movie) => (
            <Poster />
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="상영예정작">
          {upComing.map((movie) => (
            <Poster />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="인기상영작">
          {popular.map((movie) => (
            <Poster />
          ))}
        </Section>
      )}
      {error && <Message color="#e74ec3" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
