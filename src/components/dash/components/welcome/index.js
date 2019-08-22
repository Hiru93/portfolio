import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Row, Col, Avatar, Typography } from 'antd';
import { FormattedMessage } from 'react-intl';

//Icons

//Style
import './style.scss';

//Actions

//Components

//Misc imports
import chartImg from '../../../../assets/images/pie-chart-stock.png';

class WelcomeComp extends React.Component {
    render() {
        const { Title } = Typography;

        return (
            <React.Fragment>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle"
                >
                    <Col
                        span={24}    
                        type="flex"
                        justify="space-around"
                        align="middle"
                    >
                        <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </Col>
                </Row>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle"
                >
                    <Col
                        span={24}    
                        type="flex"
                        justify="space-around"
                        align="middle"
                    >
                        <Title>
                            <FormattedMessage id="dash.title">{ txt => <span>{ txt }</span> }</FormattedMessage>
                        </Title>
                    </Col>
                </Row>
                <Row
                    type="flex"
                    align="middle"
                    style={{ minHeight: '60vh' }}
                >
                    <Col 
                        lg={8} 
                        md={8} 
                        sm={24} 
                        xs={24}
                        className="tia-padding-right"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nulla a dolor facilisis blandit et vel libero. Aliquam sodales purus sollicitudin tellus mattis, ut euismod sapien egestas. Curabitur a fermentum eros. Duis ac lacinia turpis, quis faucibus nibh. Pellentesque pulvinar luctus elit, ut sagittis odio pharetra sit amet. Quisque vel felis pretium, mattis ante blandit, scelerisque lectus. In non tincidunt purus. Integer nunc orci, facilisis sed ex non, cursus commodo est. Nullam vel urna ut magna efficitur elementum at et ipsum. Pellentesque luctus sodales augue, non tempor mi egestas a.

                        Cras et maximus neque. Vivamus interdum pretium vestibulum. Vestibulum at felis in sem posuere tristique. Etiam turpis felis, congue vitae elit ac, scelerisque pellentesque dui. Quisque dapibus metus non molestie ultricies. Quisque mi nisl, pretium id mollis eget, tincidunt a dolor. Aliquam efficitur libero justo, sit amet vulputate est interdum et. Pellentesque sed commodo nisi, pellentesque vehicula tortor. Quisque ultricies dui mauris, nec lacinia quam vestibulum sit amet. Vestibulum fermentum velit nec scelerisque malesuada. Mauris tempus tortor et leo condimentum, in ullamcorper sem eleifend. Morbi ut orci et est gravida sodales. Mauris massa nisi, malesuada quis congue nec, rhoncus mattis magna. In eu suscipit massa, ut scelerisque nisi.
                    </Col>
                    <Col
                        id="imgContainer" 
                        lg={8} 
                        md={8} 
                        sm={24} 
                        xs={24}
                        type="flex"
                        justify="space-around"
                        align="middle"
                        style={{ border: '1px solid #ccc' }}
                    >
                        <img id="stockImg" src={ chartImg } alt="mocked pie chart" />
                    </Col>
                    <Col 
                        lg={8} 
                        md={8} 
                        sm={24} 
                        xs={24}
                        className="tia-padding-left"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nulla a dolor facilisis blandit et vel libero. Aliquam sodales purus sollicitudin tellus mattis, ut euismod sapien egestas. Curabitur a fermentum eros. Duis ac lacinia turpis, quis faucibus nibh. Pellentesque pulvinar luctus elit, ut sagittis odio pharetra sit amet. Quisque vel felis pretium, mattis ante blandit, scelerisque lectus. In non tincidunt purus. Integer nunc orci, facilisis sed ex non, cursus commodo est. Nullam vel urna ut magna efficitur elementum at et ipsum. Pellentesque luctus sodales augue, non tempor mi egestas a.

                        Cras et maximus neque. Vivamus interdum pretium vestibulum. Vestibulum at felis in sem posuere tristique. Etiam turpis felis, congue vitae elit ac, scelerisque pellentesque dui. Quisque dapibus metus non molestie ultricies. Quisque mi nisl, pretium id mollis eget, tincidunt a dolor. Aliquam efficitur libero justo, sit amet vulputate est interdum et. Pellentesque sed commodo nisi, pellentesque vehicula tortor. Quisque ultricies dui mauris, nec lacinia quam vestibulum sit amet. Vestibulum fermentum velit nec scelerisque malesuada. Mauris tempus tortor et leo condimentum, in ullamcorper sem eleifend. Morbi ut orci et est gravida sodales. Mauris massa nisi, malesuada quis congue nec, rhoncus mattis magna. In eu suscipit massa, ut scelerisque nisi.
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect()(WelcomeComp);