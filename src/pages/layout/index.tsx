import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import MenuList from '@/pages/menu/index';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const LayoutMain: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh', overflow: 'hidden', background: '#fff3e0' }}>
      <Sider 
        width={240} 
        collapsible 
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a65 100%)',
          boxShadow: '2px 0 8px rgba(255, 107, 53, 0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <div style={{ 
          color: 'white', 
          textAlign: 'center', 
          padding: '20px 16px',
          fontSize: '20px',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
        }}>
          🍉 夏日后台管理
        </div>
        <MenuList />
      </Sider>
      <Layout>
        <Header style={{ 
          padding: '0 24px', 
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 193, 7, 0.3)',
          boxShadow: '0 2px 8px rgba(255, 107, 53, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '18px', fontWeight: '600', color: '#ff6b35' }}>
            夏日管理系统
          </div>
          <Button 
            type="primary" 
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a65 100%)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
              padding: '8px 20px'
            }}
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
          >
            退出登录
          </Button>
        </Header>
        <Content style={{ 
          margin: '24px', 
          padding: 24, 
          minHeight: 280,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 193, 7, 0.3)',
          boxShadow: '0 4px 16px rgba(255, 107, 53, 0.2)'
        }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;