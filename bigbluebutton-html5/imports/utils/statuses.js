const EMOJI_STATUSES = {
  away: 'away',
  raiseHand: 'raiseHand',
  neutral: 'neutral',
  confused: 'confused',
  sad: 'sad',
  happy: 'happy',
  applause: 'applause',
  thumbsUp: 'thumbsUp',
  thumbsDown: 'thumbsDown',
  none: 'none',
};

const EMOJI_NORMALIZE = {
  sad: 'sad',
  happy: 'happy',
  applause: 'applause',
  confused: 'confused',
  thumbsUp: 'thumbs_up',
  thumbsDown: 'thumbs_down',
  raiseHand: 'hand',
  away: 'time',
  neutral: 'undecided',
};

export { EMOJI_STATUSES, EMOJI_NORMALIZE };
