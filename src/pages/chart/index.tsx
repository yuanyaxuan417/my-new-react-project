import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';
import {
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  AreaChartOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
} from '@ant-design/icons';

const Chart = () => {
  const [state, setState] = useState(null); // 添加 useState 使用
  
  useEffect(() => {
    // 添加实际逻辑
    console.log('Component mounted');
  }, []);
  
  return (
    <div style={{ padding: '20px 0' }}>
      <h1 style={{ 
        color: '#ff6b35', 
        fontSize: '32px', 
        fontWeight: '700', 
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        📊 夏日图表分析
      </h1>
      
      <Row gutter={[24, 24]} style={{ marginBottom: '30px' }}>
        <Col span={12}>
          <Card 
            title="饼图分析"
            hoverable 
            style={{
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)',
              border: '1px solid #ffcc80'
            }}
            headStyle={{
              backgroundColor: '#fff3e0',
              borderRadius: '16px 16px 0 0',
              color: '#ff6b35',
              fontWeight: '600'
            }}
          >
            <div style={{ 
              height: '300px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#ff6b35'
            }}>
              <PieChartOutlined style={{ fontSize: '48px' }} />
              <p style={{ marginLeft: '16px', fontSize: '18px' }}>饼图数据展示</p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card 
            title="柱状图分析"
            hoverable 
            style={{
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)',
              border: '1px solid #ffcc80'
            }}
            headStyle={{
              backgroundColor: '#fff3e0',
              borderRadius: '16px 16px 0 0',
              color: '#ff6b35',
              fontWeight: '600'
            }}
          >
            <div style={{ 
              height: '300px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#ff6b35'
            }}>
              <BarChartOutlined style={{ fontSize: '48px' }} />
              <p style={{ marginLeft: '16px', fontSize: '18px' }}>柱状图数据展示</p>
            </div>
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[24, 24]} style={{ marginBottom: '30px' }}>
        <Col span={12}>
          <Card 
            title="折线图分析"
            hoverable 
            style={{
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)',
              border: '1px solid #ffcc80'
            }}
            headStyle={{
              backgroundColor: '#fff3e0',
              borderRadius: '16px 16px 0 0',
              color: '#ff6b35',
              fontWeight: '600'
            }}
          >
            <div style={{ 
              height: '300px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#ff6b35'
            }}>
              <LineChartOutlined style={{ fontSize: '48px' }} />
              <p style={{ marginLeft: '16px', fontSize: '18px' }}>折线图数据展示</p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card 
            title="面积图分析"
            hoverable 
            style={{
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)',
              border: '1px solid #ffcc80'
            }}
            headStyle={{
              backgroundColor: '#fff3e0',
              borderRadius: '16px 16px 0 0',
              color: '#ff6b35',
              fontWeight: '600'
            }}
          >
            <div style={{ 
              height: '300px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#ff6b35'
            }}>
              <AreaChartOutlined style={{ fontSize: '48px' }} />
              <p style={{ marginLeft: '16px', fontSize: '18px' }}>面积图数据展示</p>
            </div>
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Card 
            title="雷达图分析"
            hoverable 
            style={{
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)',
              border: '1px solid #ffcc80'
            }}
            headStyle={{
              backgroundColor: '#fff3e0',
              borderRadius: '16px 16px 0 0',
              color: '#ff6b35',
              fontWeight: '600'
            }}
          >
            <div style={{ 
              height: '300px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#ff6b35'
            }}>
              <RadarChartOutlined style={{ fontSize: '48px' }} />
              <p style={{ marginLeft: '16px', fontSize: '18px' }}>雷达图数据展示</p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card 
            title="热力图分析"
            hoverable 
            style={{
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)',
              border: '1px solid #ffcc80'
            }}
            headStyle={{
              backgroundColor: '#fff3e0',
              borderRadius: '16px 16px 0 0',
              color: '#ff6b35',
              fontWeight: '600'
            }}
          >
            <div style={{ 
              height: '300px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#ff6b35'
            }}>
              <HeatMapOutlined style={{ fontSize: '48px' }} />
              <p style={{ marginLeft: '16px', fontSize: '18px' }}>热力图数据展示</p>
            </div>
          </Card>
        </Col>
      </Row>
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <Button 
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a65 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
            marginRight: '12px'
          }}
        >
          导出数据 📥
        </Button>
        <Button 
          style={{
            background: '#fff3e0',
            border: '1px solid #ffcc80',
            borderRadius: '12px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ff6b35',
            boxShadow: '0 4px 12px rgba(255, 107, 53, 0.1)'
          }}
        >
          刷新图表 🔄
        </Button>
      </div>
    </div>
  );
};

export default Chart;