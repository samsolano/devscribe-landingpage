function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
import { Body, Container, Head, Heading, Html, Img, Link, Preview, Text } from '@react-email/components';
import React from 'react';
export var WelcomeEmail = function WelcomeEmail(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement(Html, null, /*#__PURE__*/React.createElement(Head, null), /*#__PURE__*/React.createElement(Body, {
    style: main
  }, /*#__PURE__*/React.createElement(Preview, null, "Log in with this magic link"), /*#__PURE__*/React.createElement(Container, {
    style: container
  }, /*#__PURE__*/React.createElement(Heading, {
    style: h1
  }, "Login"), /*#__PURE__*/React.createElement(Link, {
    href: "https://notion.so",
    target: "_blank",
    style: _objectSpread(_objectSpread({}, link), {}, {
      display: 'block',
      marginBottom: '16px'
    })
  }, "Click here to log in with this magic link"), /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread(_objectSpread({}, text), {}, {
      marginBottom: '14px'
    })
  }, "Or, copy and paste this temporary login code:"), /*#__PURE__*/React.createElement("code", {
    style: code
  }, name), /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread(_objectSpread({}, text), {}, {
      color: '#ababab',
      marginTop: '14px',
      marginBottom: '16px'
    })
  }, "If you didn't try to login, you can safely ignore this email."), /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread(_objectSpread({}, text), {}, {
      color: '#ababab',
      marginTop: '12px',
      marginBottom: '38px'
    })
  }, "Hint: You can set a permanent password in Settings & members \u2192 My account."), /*#__PURE__*/React.createElement(Text, {
    style: footer
  }, /*#__PURE__*/React.createElement(Link, {
    href: "https://notion.so",
    target: "_blank",
    style: _objectSpread(_objectSpread({}, link), {}, {
      color: '#898989'
    })
  }, "Notion.so"), ", the all-in-one-workspace", /*#__PURE__*/React.createElement("br", null), "for your notes, tasks, wikis, and databases."))));
};
export default WelcomeEmail;
var main = {
  backgroundColor: '#ffffff'
};
var container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto'
};
var h1 = {
  color: '#333',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0'
};
var link = {
  color: '#2754C5',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline'
};
var text = {
  color: '#333',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0'
};
var footer = {
  color: '#898989',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px'
};
var code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333'
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