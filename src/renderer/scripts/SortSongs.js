export default (songs, mode) => {
  if (mode == 1) {
    songs.sort(function(a, b) {
      return b.playback_count - a.playback_count;
    });
  } else if (mode == 0) {
    songs.sort(function(a, b) {
      return (
        new Date(b.display_date).getTime() - new Date(a.display_date).getTime()
      );
    });
  } else {
    songs.sort(function(a, b) {
      return a.realIndex - b.realIndex;
    });
  }

  return songs;
};
