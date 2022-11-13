// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { html, body, container } from "./root.css";

export default function Root() {
  return <Html lang="en" class={html}>
    <Head>
      <Title>SolidStart</Title>

      <Meta charset="utf-8" />

      <Meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Body class={body}>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <FileRoutes />
          </Routes>
        </Suspense>

        <footer class={container}></footer>
      </ErrorBoundary>

      <Scripts />
    </Body>
  </Html>;
}
