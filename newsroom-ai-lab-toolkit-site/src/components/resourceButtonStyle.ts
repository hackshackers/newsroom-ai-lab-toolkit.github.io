import type { CSSProperties } from 'react';

export const resourceButtonStyle: CSSProperties = {
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'left',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.75rem 1rem',
  background: 'var(--ifm-color-primary)',
  color: 'var(--ifm-button-color)',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: 1.5,
  fontFamily: 'var(--ifm-font-family-base)',
};
