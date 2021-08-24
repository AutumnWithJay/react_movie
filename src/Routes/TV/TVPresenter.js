import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ airingToday, popular, topRated, error, loading }) => (
  <>
    <Helmet>
      <title>티비 | Movilix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="평점 높은순">
            {topRated.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imgUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="인기 많은순">
            {popular.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imgUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="오늘 방영작">
            {airingToday.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imgUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74ec3" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
