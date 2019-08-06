import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { FormattedMessage } from 'react-intl';

//Icons

//Style
import './style.scss';

//Actions
import { initState } from './actions/initState';

//Components

//Misc imports


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.initHome = this.props.initHome.bind(this);
    }

    componentDidMount() {
        console.log(`---- I'm on!`);
        this.initHome();
    }

    render() {
        return (
            <React.Fragment>
                <FormattedMessage id='welcome.message'>
                    { txt => <span>{ txt }</span> }
                </FormattedMessage>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        initialState: state.initialState
    };
};

const mapDispatchToProps = dispatch => {
    const initHome = () => {
        dispatch(initState());
    }
    return {
        initHome
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);