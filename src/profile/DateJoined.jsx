import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate } from '@edx/frontend-platform/i18n';

const DateJoined = ({ date }) => {
  if (date == null) {
    return null;
  }

  return (
    ' '
  );
};

DateJoined.propTypes = {
  date: PropTypes.string,
};
DateJoined.defaultProps = {
  date: null,
};

export default DateJoined;
