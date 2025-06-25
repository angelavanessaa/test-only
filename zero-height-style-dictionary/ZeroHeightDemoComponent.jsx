import React from 'react';
import lightTokens from './token_light_light.json';
import themeTokens from './token_theme_theme.json';

const ZeroHeightDemoComponent = () => {
  // Combine tokens for easy access
  const tokens = {
    ...lightTokens,
    ...themeTokens
  };

  // Component styles using tokens directly from JSON
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: `${tokens.card.padding.value}px`,
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    heading: {
      color: tokens.fg.default.value,
      marginBottom: '30px',
    },
    card: {
      backgroundColor: tokens.card.background.value === '{bg.default}' 
        ? tokens.bg.default.value // Resolve token reference
        : tokens.card.background.value,
      borderRadius: `${tokens.card.borderRadius.value}px`,
      padding: `${tokens.card.padding.value}px`,
      marginBottom: '20px',
      boxShadow: `0 2px 4px ${tokens.shadows.default.value}20`,
    },
    button: {
      backgroundColor: tokens.button.primary.background.value === '{accent.default}'
        ? tokens.accent.default.value // Resolve token reference
        : tokens.button.primary.background.value,
      color: tokens.button.primary.text.value === '{accent.onAccent}'
        ? tokens.accent.onAccent.value // Resolve token reference
        : tokens.button.primary.text.value,
      border: 'none',
      borderRadius: `${tokens.button.borderRadius.value}px`,
      padding: '10px 20px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    textSection: {
      marginBottom: '30px',
    },
    textDefault: {
      color: tokens.fg.default.value,
    },
    textMuted: {
      color: tokens.fg.muted.value,
    },
    textSubtle: {
      color: tokens.fg.subtle.value,
    },
    bgSection: {
      display: 'flex',
      gap: '10px',
      marginBottom: '30px',
    },
    bgSwatch: {
      width: '100px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: `${tokens.card.borderRadius.value}px`,
    },
    bgDefault: {
      backgroundColor: tokens.bg.default.value,
      border: `1px solid ${tokens.fg.subtle.value}`,
    },
    bgMuted: {
      backgroundColor: tokens.bg.muted.value,
    },
    bgSubtle: {
      backgroundColor: tokens.bg.subtle.value,
    },
    accentSwatch: {
      backgroundColor: tokens.accent.default.value,
      color: tokens.accent.onAccent.value,
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Zero Height Tokens Demo</h1>
      
      <div style={styles.card}>
        <h2>Card Component</h2>
        <p>This card uses the following tokens:</p>
        <ul>
          <li>Background: {tokens.card.background.value} → {tokens.bg.default.value}</li>
          <li>Border Radius: {tokens.card.borderRadius.value}px</li>
          <li>Padding: {tokens.card.padding.value}px</li>
        </ul>
        <button style={styles.button}>Primary Button</button>
      </div>

      <div style={styles.textSection}>
        <h2>Text Colors</h2>
        <p style={styles.textDefault}>Default Text: {tokens.fg.default.value}</p>
        <p style={styles.textMuted}>Muted Text: {tokens.fg.muted.value}</p>
        <p style={styles.textSubtle}>Subtle Text: {tokens.fg.subtle.value}</p>
      </div>

      <div>
        <h2>Background Colors</h2>
        <div style={styles.bgSection}>
          <div style={{...styles.bgSwatch, ...styles.bgDefault}}>
            Default
          </div>
          <div style={{...styles.bgSwatch, ...styles.bgMuted}}>
            Muted
          </div>
          <div style={{...styles.bgSwatch, ...styles.bgSubtle}}>
            Subtle
          </div>
          <div style={{...styles.bgSwatch, ...styles.accentSwatch}}>
            Accent
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroHeightDemoComponent;
