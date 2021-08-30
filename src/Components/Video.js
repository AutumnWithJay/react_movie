import React from 'react';
import Message from './Message';

const Video = ({ info }) => {
  const {
    videos: { results },
  } = info;

  return results.length > 0 ? (
    <embed
      title="video"
      width="100%"
      height="300px"
      src={`https://www.youtube.com/embed/${results[0].key}`}
    ></embed>
  ) : (
    <Message text="관련 영상이 없습니다" />
  );
};

export default Video;
