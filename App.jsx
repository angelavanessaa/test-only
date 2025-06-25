import React, { useState } from 'react';
import DemoComponent from './tokens-studio/DemoComponent';
import ZeroHeightDemoComponent from './zero-height-style-dictionary/ZeroHeightDemoComponent';

function App() {
  const [activeTab, setActiveTab] = useState('css-vars');
  
  const tabStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    marginRight: '10px',
    borderRadius: '4px 4px 0 0',
  };
  
  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: 'var(--colors-gray-100)',
    borderBottom: '3px solid var(--colors-gray-700)',
    fontWeight: 'bold',
  };
  
  const inactiveTabStyle = {
    ...tabStyle,
    backgroundColor: 'var(--colors-gray-200)',
    borderBottom: '3px solid transparent',
  };
  
  return (
    <div className="App" style={{ fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ 
        padding: '20px', 
        borderBottom: '1px solid var(--colors-gray-300)',
        backgroundColor: 'var(--colors-gray-100)'
      }}>
        <h1 style={{ color: 'var(--colors-gray-800)' }}>Style Dictionary Demo App</h1>
      </header>
      
      <div style={{ 
        display: 'flex', 
        padding: '0 20px',
        backgroundColor: 'var(--colors-gray-300)'
      }}>
        <div 
          style={activeTab === 'css-vars' ? activeTabStyle : inactiveTabStyle}
          onClick={() => setActiveTab('css-vars')}
        >
          CSS Variables Approach
        </div>
        <div 
          style={activeTab === 'json-direct' ? activeTabStyle : inactiveTabStyle}
          onClick={() => setActiveTab('json-direct')}
        >
          Direct JSON Approach
        </div>
      </div>
      
      <main style={{ padding: '20px' }}>
        {activeTab === 'css-vars' ? <DemoComponent /> : <ZeroHeightDemoComponent />}
      </main>
      
      <footer style={{ 
        padding: '20px', 
        marginTop: '30px',
        borderTop: '1px solid var(--colors-gray-300)', 
        textAlign: 'center',
        backgroundColor: 'var(--colors-gray-100)'
      }}>
        <p style={{ color: 'var(--colors-gray-600)' }}>
          {activeTab === 'css-vars' 
            ? 'Using design tokens as CSS variables with Style Dictionary' 
            : 'Using design tokens directly from JSON'}
        </p>
      </footer>
    </div>
  );
}

export default App;
