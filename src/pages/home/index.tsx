import { Button, Card, Row, Col, Statistic } from 'antd';
import React, { useState, useEffect } from 'react';
import { getHomeList } from "@/api/homeApi";
import {
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
} from '@ant-design/icons';

const Home = () => {
  const [state, setState] = useState(null); // 添加 useState 使用

  const getHomeData = async() => { 
    await getHomeList({}).then((res:any) => {
      console.log("=--==-====",res);
    });
  }
  useEffect(() => {
    // 添加实际逻辑
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
        🍉 夏日后台管理首页
      </h1>
      
      <Row gutter={[24, 24]} style={{ marginBottom: '30px' }}>
        <Col span={8}>
          <Card 
            hoverable 
            style={{
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)',
              border: '1px solid #ffcc80'
            }}
          >
            <Statistic
              title="总用户数"
              value={12345}
              prefix={<UserOutlined style={{ color: '#ff6b35' }} />}
              suffix="人"
              valueStyle={{ color: '#ff6b35' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card 
            hoverable 
            style={{
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)',
              border: '1px solid #ffcc80'
            }}
          >
            <Statistic
              title="今日订单"
              value={678}
              prefix={<ShoppingCartOutlined style={{ color: '#ff6b35' }} />}
              suffix="单"
              valueStyle={{ color: '#ff6b35' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card 
            hoverable 
            style={{
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)',
              border: '1px solid #ffcc80'
            }}
          >
            <Statistic
              title="今日销售额"
              value={123456}
              prefix={<DollarOutlined style={{ color: '#ff6b35' }} />}
              suffix="元"
              valueStyle={{ color: '#ff6b35' }}
            />
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Card 
            title="销售数据"
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
              <p style={{ marginLeft: '16px', fontSize: '18px' }}>销售趋势图表</p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card 
            title="用户分析"
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
              <p style={{ marginLeft: '16px', fontSize: '18px' }}>用户分布图表</p>
            </div>
          </Card>
        </Col>
      </Row>
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <Button 
          onClick={() => getHomeData()}
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a65 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
          }}
        >
          刷新数据 🍉
        </Button>
      </div>
    </div>
  );
};

export default Home;