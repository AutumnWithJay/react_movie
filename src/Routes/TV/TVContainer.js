import React from 'react';
import TVPresenter from './TVPresenter';

export default class extends React.Component {
  state = {
    airingToday: null,
    popular: null,
    topRated: null,
    error: null,
    loading: true,
  };

  render() {
    const { airingToday, popular, topRated, error, loading } = this.state;

    return (
      <TVPresenter
        airingToday={airingToday}
        popular={popular}
        topRated={topRated}
        error={error}
        loading={loading}
      />
    );
  }
}
