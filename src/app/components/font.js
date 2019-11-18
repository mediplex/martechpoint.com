export const Font = () => (
         <style jsx global>{`
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 300;
             font-display: swap;
             src: local('Roboto Light'), local('Roboto-Light'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');
             unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 300;
             font-display: swap;
             src: local('Roboto Light'), local('Roboto-Light'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');
             unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 300;
             font-display: swap;
             src: local('Roboto Light'), local('Roboto-Light'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');
             unicode-range: U+1F00-1FFF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 300;
             font-display: swap;
             src: local('Roboto Light'), local('Roboto-Light'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');
             unicode-range: U+0370-03FF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 300;
             font-display: swap;
             src: local('Roboto Light'), local('Roboto-Light'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');
             unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 300;
             font-display: swap;
             src: local('Roboto Light'), local('Roboto-Light'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');
             unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
               U+A720-A7FF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 300;
             font-display: swap;
             src: local('Roboto Light'), local('Roboto-Light'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');
             unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
               U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 400;
             font-display: swap;
             src: local('Roboto'), local('Roboto-Regular'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
             unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 400;
             font-display: swap;
             src: local('Roboto'), local('Roboto-Regular'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
             unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 400;
             font-display: swap;
             src: local('Roboto'), local('Roboto-Regular'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
             unicode-range: U+1F00-1FFF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 400;
             font-display: swap;
             src: local('Roboto'), local('Roboto-Regular'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
             unicode-range: U+0370-03FF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 400;
             font-display: swap;
             src: local('Roboto'), local('Roboto-Regular'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
             unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 400;
             font-display: swap;
             src: local('Roboto'), local('Roboto-Regular'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
             unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
               U+A720-A7FF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 400;
             font-display: swap;
             src: local('Roboto'), local('Roboto-Regular'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
             unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
               U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 500;
             font-display: swap;
             src: local('Roboto Medium'), local('Roboto-Medium'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');
             unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 500;
             font-display: swap;
             src: local('Roboto Medium'), local('Roboto-Medium'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');
             unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 500;
             font-display: swap;
             src: local('Roboto Medium'), local('Roboto-Medium'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');
             unicode-range: U+1F00-1FFF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 500;
             font-display: swap;
             src: local('Roboto Medium'), local('Roboto-Medium'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');
             unicode-range: U+0370-03FF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 500;
             font-display: swap;
             src: local('Roboto Medium'), local('Roboto-Medium'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');
             unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 500;
             font-display: swap;
             src: local('Roboto Medium'), local('Roboto-Medium'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');
             unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
               U+A720-A7FF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 500;
             font-display: swap;
             src: local('Roboto Medium'), local('Roboto-Medium'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');
             unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
               U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 700;
             font-display: swap;
             src: local('Roboto Bold'), local('Roboto-Bold'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');
             unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 700;
             font-display: swap;
             src: local('Roboto Bold'), local('Roboto-Bold'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');
             unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 700;
             font-display: swap;
             src: local('Roboto Bold'), local('Roboto-Bold'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');
             unicode-range: U+1F00-1FFF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 700;
             font-display: swap;
             src: local('Roboto Bold'), local('Roboto-Bold'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');
             unicode-range: U+0370-03FF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 700;
             font-display: swap;
             src: local('Roboto Bold'), local('Roboto-Bold'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');
             unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 700;
             font-display: swap;
             src: local('Roboto Bold'), local('Roboto-Bold'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');
             unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
               U+A720-A7FF;
           }
           @font-face {
             font-family: 'Roboto';
             font-style: normal;
             font-weight: 700;
             font-display: swap;
             src: local('Roboto Bold'), local('Roboto-Bold'),
               url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
             unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
               U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
           }
         `}</style>
       );