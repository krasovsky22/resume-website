import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap'

import WebGL from './WebGL'


class Experiments extends PureComponent {
    render() {
        return (
            <Row>
                <WebGL/>
            </Row>
        );
    }
}

Experiments.propTypes = {

};

export default Experiments;