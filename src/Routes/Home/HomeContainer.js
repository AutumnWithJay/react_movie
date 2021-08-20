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
