import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { FormattedMessage } from 'react-intl';

//Icons

//Style
import './style.scss'

//Actions
import { setSiderStatus } from './actions/setSiderStatus';

//Components
import WelcomeComp from './components/welcome/index';

//Misc imports

class Dash extends React.Component {
    constructor(props) {
        super(props);

        this.changeSiderStatus = this.props.changeSiderStatus.bind(this);
    }

    onComponentDidMount() {
        console.log("--- mount and ready");
    }

    onCollapse(status) {
        this.changeSiderStatus(!status);
    }

    render() {
        const { Header, Content, Footer, Sider } = Layout;
        const { SubMenu } = Menu;
        const { siderStatus, selectedKey } = this.props;

        return (
            <Layout style={{ minHeight: '100vh' }} hasSider={ true }>
                <Layout
                    style={{
                        paddingLeft: '96px'
                    }}
                >
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: '100%' }} >
                            {( () => {
                                switch(selectedKey) {
                                    case '1':
                                        // return <Charts />;
                                        return <div></div>
                                    case '2':
                                        // return <Settings />;
                                        return <div></div>
                                    case '3':
                                        // return <UserInfo />;
                                        return <div></div>
                                    case '4':
                                        // return <Company companyId={ '1' } />;
                                        return <div></div>
                                    case '5':
                                        // return <Company companyId={ '2' } />;
                                        return <div></div>
                                    case '6':
                                        // return <Company companyId={ '3' } />;
                                        return <div></div>
                                    case '7':
                                        // return <Documents />;
                                        return <div></div>
                                    default:
                                        return <WelcomeComp />;
                                }
                            }) ()}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ma tu pensa, qui c'è proprio un footer :^)</Footer>
                </Layout>
                <Sider
                    collapsible 
                    collapsed={ siderStatus } 
                    onCollapse={ () => this.onCollapse(siderStatus) }
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                      }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span><FormattedMessage id='dash.menu.chart'>{ txt => <span>{ txt }</span> }</FormattedMessage></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span><FormattedMessage id="dash.menu.settings">{ txt => <span>{ txt }</span> }</FormattedMessage></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="user" />
                            <span><FormattedMessage id="dash.menu.user">{ txt => <span>{ txt }</span> }</FormattedMessage></span>
                        </Menu.Item>
                        <SubMenu key="sub-1" title={
                            <span>                                
                                <Icon type="team" />
                                <span><FormattedMessage id="dash.menu.companies">{ txt => <span>{ txt }</span> }</FormattedMessage></span>
                            </span>
                        }>
                            <Menu.Item key="4">
                                <FormattedMessage id="dash.menu.companies.company-1">{ txt => <span>{ txt }</span> }</FormattedMessage>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <FormattedMessage id="dash.menu.companies.company-2">{ txt => <span>{ txt }</span> }</FormattedMessage>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <FormattedMessage id="dash.menu.companies.company-3">{ txt => <span>{ txt }</span> }</FormattedMessage>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="7">
                            <Icon type="file" />
                            <FormattedMessage id="dash.menu.documents">{ txt => <span>{ txt }</span> }</FormattedMessage>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        );
    };
}

const mapStateToProps = state => {
    return {
        siderStatus: state.app.userDash.siderStatus,
        selectedKey: state.app.userDash.selectedKey
    }
};

const mapDispatchToProps = dispatch => {
    const changeSiderStatus = status => {
        dispatch(setSiderStatus(status));
    }

    return {
        changeSiderStatus
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dash);