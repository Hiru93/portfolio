import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { FormattedMessage } from 'react-intl';
import { Layout, Menu, Breadcrumb, DatePicker, Popover, Timeline, Steps, Tree } from 'antd';

//Icons

//Style
import './style.scss';

//Actions
import { initState } from './actions/initState';

//Components
import MockedForm from './components/form/index';

//Misc imports


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.initHome = this.props.initHome.bind(this);
    }

    componentDidMount() {
        this.initHome();
    }

    render() {

        const content = (
            <div>
                <p>C'ha proprio ragione</p>
                <p>è un componente per davvero :^)</p>
                <p><FormattedMessage id='popover.body'>{ txt => <span>{ txt }</span> }</FormattedMessage></p>
            </div>
        );

        return (
            <React.Fragment>
                <Layout className="layout">
                    <Layout.Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Layout.Header>
                    <Layout.Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <FormattedMessage id='welcome.message'>
                                { txt => <span>{ txt }</span> }
                            </FormattedMessage>
                            <br />
                            <br />
                            <DatePicker onChange={ (date, dateString) => { console.log(`+++ ${ date }, ${ dateString }`) } } />
                            <br />
                            <br />
                            <Popover content={ content } title='Title'>
                                <DatePicker.RangePicker onChange={ (date, dateString) => { console.log(`*** ${ date }, ${ dateString }`) } } />
                            </Popover>
                            <br />
                            <br />
                            <Timeline>
                                <Timeline.Item color='green'>
                                    <FormattedMessage id='timeline.first'>
                                        { txt => <span>{ txt }</span> }
                                    </FormattedMessage>
                                </Timeline.Item>
                                <Timeline.Item color='green'>
                                    <FormattedMessage id='timeline.second'>
                                        { txt => <span>{ txt }</span> }
                                    </FormattedMessage>
                                </Timeline.Item>
                                <Timeline.Item color='red'>
                                    <FormattedMessage id='timeline.third'>
                                        { txt => <span>{ txt }</span> }
                                    </FormattedMessage>
                                </Timeline.Item>
                                <Timeline.Item color='grey'>
                                    <FormattedMessage id='timeline.fourth'>
                                        { txt => <span>{ txt }</span> }
                                    </FormattedMessage>
                                </Timeline.Item>
                            </Timeline>
                            <br />
                            <Steps current={1}>
                                <Steps.Step title='First' description={<FormattedMessage id='timeline.first'>{ txt => <span>{ txt }</span> }</FormattedMessage>} />
                                <Steps.Step title='Second' description={<FormattedMessage id='timeline.second'>{ txt => <span>{ txt }</span> }</FormattedMessage>} />
                                <Steps.Step title='Third' description={<FormattedMessage id='timeline.third'>{ txt => <span>{ txt }</span> }</FormattedMessage>} />
                                <Steps.Step title='Fourth' description={<FormattedMessage id='timeline.fourth'>{ txt => <span>{ txt }</span> }</FormattedMessage>} />
                            </Steps>
                            <br />
                            <br />
                            <Tree
                                checkable
                                defaultExpandedKeys={['0-0-0', '0-0-1']}
                                defaultSelectedKeys={['0-0-0', '0-0-1']}
                                defaultCheckedKeys={['0-0-0', '0-0-1']}
                                onSelect={ (selectedKeys, info) => { console.log('selected', selectedKeys, info); }}
                                onCheck={ (checkedKeys, info) => { console.log('onCheck', checkedKeys, info) } }
                            >
                                <Tree.TreeNode title="parent 1" key="0-0">
                                <Tree.TreeNode title="parent 1-0" key="0-0-0" disabled>
                                    <Tree.TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                                    <Tree.TreeNode title="leaf" key="0-0-0-1" />
                                </Tree.TreeNode>
                                <Tree.TreeNode title="parent 1-1" key="0-0-1">
                                    <Tree.TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                                </Tree.TreeNode>
                                </Tree.TreeNode>
                            </Tree>
                            <MockedForm />
                        </div>
                    </Layout.Content>
                    <Layout.Footer style={{ textAlign: 'center' }}>
                        <FormattedMessage id='layout.footer'>
                            { txt => <span>{ txt }</span> }
                        </FormattedMessage>
                    </Layout.Footer>
                </Layout>
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