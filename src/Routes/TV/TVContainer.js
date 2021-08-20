import { tvApi } from 'api';
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

  async componentDidMount() {
    try {
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      this.setState({
        airingToday,
        popular,
        topRated,
        loading: false,
      });
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }

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
