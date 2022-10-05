import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Kanvas</title>
      </Head>
      <div className="py-10 w-4/5 mx-auto">{props.children}</div>
    </div>
  );
};

export default Layout;
