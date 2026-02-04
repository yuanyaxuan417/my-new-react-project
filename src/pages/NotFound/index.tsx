import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";
const Error404 = () => {
    const navigate = useNavigate();
    return (
        <Result
            status="404"
            title="🍉 页面走丢啦！"
            subTitle="哎呀，你访问的页面好像去度假了，找不到它了呢～"
            extra={<Button 
                type="primary" 
                onClick={() => navigate('/')}
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
                回到夏日首页 🏖️
            </Button>}
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff3e0',
                margin: '0',
                borderRadius: '16px'
            }}
        />
    )
};
export default Error404;