// @flow

import { connect } from 'react-redux';

import { sayHelloAsync } from '../action/hello';
import Button from '../component/button';

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234',
});

const mapDispatchToProps = dispatch => ({
  // eslint-disable-next-line semi
  handleClick: () => { dispatch(sayHelloAsync(1234)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
