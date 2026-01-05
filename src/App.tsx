import React from 'react';
import Layout from './components/Layout';
import Scene3D from './components/Scene3D';
import './App.css';

function App() {
  return (
    <Layout>
      <div className="container">
        <div className="info-section">
          <h2>Добро пожаловать!</h2>
          <p>Это моё портфолио 3D художника. Сайт находится в разработке.</p>
          <p>Здесь будут мои работы, созданные с использованием Three.js, React и TypeScript.</p>
        </div>
        
        <div className="scene-section">
          <h3>Тестовая 3D сцена</h3>
          <Scene3D />
          <p className="scene-description">
            Простая геометрическая фигура для демонстрации работы Three.js
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default React.memo(App);