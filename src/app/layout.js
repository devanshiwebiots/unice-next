import "../index.scss";
import NoSsr from "../utils/NoSsr";
const BaseCSS = ({ css = "*{box-sizing:border-box}body{margin:0}" }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: css,
    }}
  />
);


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="mdx-docs" />
        <title>Unice</title>
        <link rel="icon" href="/assets/images/logo/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/assets/images/logo/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Capriola&amp;subset=latin-ext" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Alex+Brush&amp;subset=latin-ext" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800" rel="stylesheet" />
        <BaseCSS />
      </head>
      <body className="try">
        <NoSsr>{children}</NoSsr>
      </body>
    </html>
  );
}
