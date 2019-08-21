import React from 'react';

//Libraries components
import { Card, Row, Col } from 'antd';

//Icons

//Style
import './style.scss';

//Actions

//Components
import LoginForm from './components/form/index';

//Misc imports

class Login extends React.Component {    
    render() {
        return (
            <React.Fragment>
                <div id="container">
                    <Row 
                        type="flex" 
                        justify="space-around" 
                        align="middle" 
                        className={`height-100`}>
                        <Col
                            type="flex" 
                            justify="space-around" 
                            align="middle"  
                            xs={24} 
                            sm={24} 
                            md={12} 
                            lg={12}>
                                <Card title="Login" className={ 'tia-card' }>
                                    <LoginForm />
                                </Card>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;