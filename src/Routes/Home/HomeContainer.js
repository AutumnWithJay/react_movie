import { moviesApi } from 'api';
import React from 'react';
import HomePresenter from './HomePresenter';

export default class extends React.Component {
  state = {
    nowPlaying: null,
    popular: null,
    upComing: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await moviesApi.upComing();
      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upComing,
        popular,
        loading: false,
      });
    } catch (error) {
      this.setState({ error: "Can't find Movies" });
      console.log(error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, popular, upComing, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        popular={popular}
        upComing={upComing}
        error={error}
        loading={loading}
      />
    );
  }
}
