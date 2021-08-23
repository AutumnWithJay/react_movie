import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 24px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  error,
  loading,
  searchTerm,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="영화나 TV 프로그램명을 입력해주세요"
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="영화 검색결과">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imgUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="영화 검색결과">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imgUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74ec3" text={error} />}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
          <Message text="결과가 없습니다" color="#95a5a6" />
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
