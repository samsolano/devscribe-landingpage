import { Body, Container, Head, Heading, Html, Img, Link, Preview, Text } from '@react-email/components';
import React from 'react';

export const WelcomeEmail = ({ name }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Log in with this magic link</Preview>
      <Container style={container}>
        <Heading style={h1}>Login</Heading>
        <Link
          href="https://notion.so"
          target="_blank"
          style={{
            ...link,
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Click here to log in with this magic link
        </Link>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Or, copy and paste this temporary login code:
        </Text>
        <code style={code}>{name}</code>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}
        >
          If you didn&apos;t try to login, you can safely ignore this email.
        </Text>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '12px',
            marginBottom: '38px',
          }}
        >
          Hint: You can set a permanent password in Settings & members → My account.
        </Text>
        {/* <Img
          src={`${baseUrl}/static/notion-logo.png`}
          width="32"
          height="32"
          alt="Notion's Logo"
        /> */}
        <Text style={footer}>
          <Link
            href="https://notion.so"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            Notion.so
          </Link>
          , the all-in-one-workspace
          <br />
          for your notes, tasks, wikis, and databases.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};







































// import {
//     Body,
//     Container,
//     Head,
//     Heading,
//     Html,
//     Img,
//     Link,
//     Preview,
//     Text,
//   } from '@react-email/components';
//   import * as React from 'react';
  
//   // interface NotionMagicLinkEmailProps {
//   //   loginCode?: string;
//   // }
  
//   interface emailProps {
//     name: string;
//   }

//   const baseUrl = process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : '';
  
//   // export const WelcomeEmail = ({
//   //   loginCode,
//   // }: NotionMagicLinkEmailProps) => (
//   export const WelcomeEmail = ({
//     name
//   }: emailProps) => (
//     <Html>
//       <Head />
//       <Body style={main}>
//         <Preview>Log in with this magic link</Preview>
//         <Container style={container}>
//           <Heading style={h1}>Login</Heading>
//           <Link
//             href="https://notion.so"
//             target="_blank"
//             style={{
//               ...link,
//               display: 'block',
//               marginBottom: '16px',
//             }}
//           >
//             Click here to log in with this magic link
//           </Link>
//           <Text style={{ ...text, marginBottom: '14px' }}>
//             Or, copy and paste this temporary login code:
//           </Text>
//           <code style={code}>{name}</code>
//           <Text
//             style={{
//               ...text,
//               color: '#ababab',
//               marginTop: '14px',
//               marginBottom: '16px',
//             }}
//           >
//             If you didn&apos;t try to login, you can safely ignore this email.
//           </Text>
//           <Text
//             style={{
//               ...text,
//               color: '#ababab',
//               marginTop: '12px',
//               marginBottom: '38px',
//             }}
//           >
//             Hint: You can set a permanent password in Settings & members → My
//             account.
//           </Text>
//           <Img
//             src={`${baseUrl}/static/notion-logo.png`}
//             width="32"
//             height="32"
//             alt="Notion's Logo"
//           />
//           <Text style={footer}>
//             <Link
//               href="https://notion.so"
//               target="_blank"
//               style={{ ...link, color: '#898989' }}
//             >
//               Notion.so
//             </Link>
//             , the all-in-one-workspace
//             <br />
//             for your notes, tasks, wikis, and databases.
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
  
//   // NotionMagicLinkEmail.PreviewProps = {
//   //   loginCode: 'sparo-ndigo-amurt-secan',
//   // } as NotionMagicLinkEmailProps;
  
//   export default WelcomeEmail;
  
//   const main = {
//     backgroundColor: '#ffffff',
//   };
  
//   const container = {
//     paddingLeft: '12px',
//     paddingRight: '12px',
//     margin: '0 auto',
//   };
  
//   const h1 = {
//     color: '#333',
//     fontFamily:
//       "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//     fontSize: '24px',
//     fontWeight: 'bold',
//     margin: '40px 0',
//     padding: '0',
//   };
  
//   const link = {
//     color: '#2754C5',
//     fontFamily:
//       "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//     fontSize: '14px',
//     textDecoration: 'underline',
//   };
  
//   const text = {
//     color: '#333',
//     fontFamily:
//       "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//     fontSize: '14px',
//     margin: '24px 0',
//   };
  
//   const footer = {
//     color: '#898989',
//     fontFamily:
//       "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//     fontSize: '12px',
//     lineHeight: '22px',
//     marginTop: '12px',
//     marginBottom: '24px',
//   };
  
//   const code = {
//     display: 'inline-block',
//     padding: '16px 4.5%',
//     width: '90.5%',
//     backgroundColor: '#f4f4f4',
//     borderRadius: '5px',
//     border: '1px solid #eee',
//     color: '#333',
//   };
  