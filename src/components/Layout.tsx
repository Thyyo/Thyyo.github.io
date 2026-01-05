import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="header">
        <h1>3D Портфолио</h1>
        <p>Сайт в процессе разработки</p>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} 3D Художник</p>
      </footer>
    </div>
  );
}