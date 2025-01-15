import Layout from "@/components/Layout";
import ContextProvider from "@/context/ContextProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();


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
