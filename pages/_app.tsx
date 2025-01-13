import Layout from "@/components/Layout";
import ContextProvider from "@/context/ContextProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
// import { headers } from "next/headers";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [cookies, setCookies] = useState<string | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   async function fetchHeaders() {
  //     const hdrs = await headers();
  //     setCookies(hdrs.get('cookie'));
  //   }
  //   fetchHeaders();
  // }, []);

  const content = <Component {...pageProps} />;

  const wrappedContent =
    router.pathname === "/api-doc" ? (
      content
    ) : (
      <div
        id="main-parent"
        className={`w-[100dvw] h-[100dvh] flex flex-1 flex-col bg-[#0F0F0F] overflow-hidden nobar unselectable`}
      >
        <Layout>{content}</Layout>
      </div>
    );

  return (
    <ContextProvider cookies={null}>
      <GlobalProvider>
        {wrappedContent}
      </GlobalProvider>
    </ContextProvider>
  );
}
