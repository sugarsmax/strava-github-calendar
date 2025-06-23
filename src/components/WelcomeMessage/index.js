import React from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import Typography from 'antd/es/typography';
import Button from 'antd/es/button';

import styles from './styles.module.css';

const { Title, Text } = Typography;

export default function WelcomeMessage() {
  const history = useHistory();
  return (
    <div className={cx(styles.welcomeMessage)}>
      <Title level={3} className="theme-color text-center">

        Generate your Strava activities graph for last year:
      </Title>
      <img
        alt="Sample graph"
        className={cx(styles.sampleGraph)}
        src={`${process.env.PUBLIC_URL}/sample-graph_maxfield.jpg`}
      />
      <Text strong className={cx('height-200', styles.connectText)}>
        Connect your Strava account below to see yours
      </Text>
      <Button
        type="primary"
        icon="lock"
        className="top-space-medium"
        onClick={() => history.push('init-auth')}
      >
        Connect Strava to see yours!
      </Button>
    </div>
  );
}
