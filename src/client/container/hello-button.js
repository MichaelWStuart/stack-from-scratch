// @flow

import { connect } from 'react-redux';

import { sayHello } from '../action/hello';
import Button from '../component/button';

const mapStateToProps = () => ({
  label: 'Say hello',
});

const mapDispatchToProps = dispatch => ({
  // eslint-disable-next-line semi
  handleClick: () => { dispatch(sayHello('Hello!')) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
