/* styles/globalStyles.js */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .section-wrapper {
    position: relative;
    padding: 4rem 2rem;
    z-index: 1;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
  html {
    scroll-behavior: smooth;
  }

  /* Optional: Add padding to sections to account for fixed navbar */
  section {
    scroll-margin-top: 100px; /* Adjust based on your navbar height */
  }
`;

export default GlobalStyles;