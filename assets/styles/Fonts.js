import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
      styles={`
        /* latin */
        @font-face {
          font-family: 'Tobias';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('https://cdn.shopify.com/s/files/1/1704/8471/t/489/assets/Tobias-Regular.woff2?v=121633167725317272621660674663');
        }
        /* latin */
        @font-face {
          font-family: 'Cadiz';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('https://cdn.shopify.com/s/files/1/1704/8471/t/486/assets/Cadiz-Regular.woff2?v=118879432380538914361659978193');
        }
        /* */
        @font-face {
          font-family: 'Cadiz SemiBold';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url('https://cdn.shopify.com/s/files/1/1704/8471/t/491/assets/Cadiz-SemiBold.woff2?v=136676191587467238541661245696');
        }
        `}
    />
  )
  
  export default Fonts