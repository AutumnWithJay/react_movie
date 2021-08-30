import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TabTitle = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: lightgray;
`;

const Company = styled.div`
  display: grid;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 100%;
`;

const Country = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Production = ({ info }) => {
  const [current, setCurrent] = useState('country');
  const { production_companies, production_countries } = info;

  const handleClick = (e) => {
    const {
      dataset: { value },
    } = e.target;

    setCurrent(value);
  };

  return (
    <Container>
      <Tab>
        <TabTitle
          data-value="country"
          onClick={(e) => handleClick(e)}
          style={
            current === 'country'
              ? {
                  borderBottom: '3px solid #d2082d',
                  transition: 'border-bottom 0.5s linear',
                }
              : {
                  borderBottom: 'transparent',
                  transition: 'border-bottom 0.5s linear',
                }
          }
        >
          제작국가
        </TabTitle>
        <TabTitle
          data-value="production"
          onClick={(e) => handleClick(e)}
          style={
            current === 'production'
              ? {
                  borderBottom: '3px solid #d2082d',
                  transition: 'border-bottom 0.5s linear',
                }
              : {
                  borderBottom: 'transparent',
                  transition: 'border-bottom 0.5s linear',
                }
          }
        >
          제작사
        </TabTitle>
      </Tab>
      {current === 'country' ? (
        <Country>
          {production_countries.map((data) => {
            return (
              <Overview key={data.id}>
                <Logo src={`https://www.countryflags.io/${data.iso_3166_1}/shiny/64.png`} />
                <Title>{data.name}</Title>
              </Overview>
            );
          })}
        </Country>
      ) : (
        <Company>
          {production_companies.map((data) => {
            return (
              <Overview key={data.id}>
                <Logo
                  src={
                    data.logo_path
                      ? `https://image.tmdb.org/t/p/w500/${data.logo_path}`
                      : require('../assets/default_image.png').default
                  }
                />
                <Title>{data.name}</Title>
              </Overview>
            );
          })}
        </Company>
      )}
    </Container>
  );
};

export default Production;
