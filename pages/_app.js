import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';

const NodeBird = ({ Component }) => {
  return (
    <div>
        <Head>
            <meta charset='utf-8' />
            <title>NodeBird</title>
        </Head>
      <Component />
    </div>
  )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;
