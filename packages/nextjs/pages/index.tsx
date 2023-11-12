import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = ({ markdownData }: any) => {
  const { t } = useTranslation();
  return (
    <>
      <MetaHeader />
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
          <div className="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
            <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                {t("HEADER")}
              </h1>
              <p className="max-w-xl mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">
                {t("WORKSHOP_DESCRIPTION")}
              </p>
            </div>
            <div className="col-span-6 flex lg:justify-end justify-center items-center mb-20">
              <Canvas />
            </div>
          </div>
          {/* <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
        <div className="flex justify-center">
          <svg
            className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
              Customizable Categories
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Host code that you don't want to share with the world in private.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <svg
            className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">Private repos</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Host code that you don't want to share with the world in private.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <svg
            className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-500 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
              Tracking Saving Rate
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Host code that you don't want to share with the world in private.
            </p>
          </div>
        </div>
      </div> TODO: Change with goals of the workshop */}
        </div>
      </section>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div
          className="max-w-screen-xl px-8 py-8 mx-auto prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }}
        />
        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const EXAMPLE_PATTERN = [
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

const getState = (x: number, y: number) => {
  return EXAMPLE_PATTERN[y % EXAMPLE_PATTERN.length][x % EXAMPLE_PATTERN[0].length];
};

const Pixel = ({ x, y }: { x: number; y: number }) => {
  return (
    <div
      className={`${
        getState(x, y) ? "bg-black" : "bg-white"
      } h-1 w-1 lg:box-border lg:border lg:h-1.5 lg:w-1.5 2xl:h-2 2xl:w-2`}
    />
  );
};

const Row = ({ row, rowIndex }: { row: boolean[]; rowIndex: number }) => {
  return row
    .map((cell, columnIndex) => <Pixel key={rowIndex + " " + columnIndex} x={rowIndex} y={columnIndex} />)
    .reverse();
};

const Canvas = () => {
  const rawStatesData = Array.from({ length: 84 }, () => false).map(() => {
    return Array.from({ length: 54 }, () => false);
  });
  return (
    <div className="flex flex-row">
      {rawStatesData.map((row, rowIndex) => (
        <div className="flex flex-col" key={rowIndex}>
          <Row row={row} rowIndex={rowIndex} />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps(context: any) {
  // Add the "await" keyword like this:
  const { locale } = context;
  const markdownData = await getMarkdownData(locale);
  return {
    props: {
      markdownData,
      ...(await serverSideTranslations(locale)),
    },
  };
}

export async function getMarkdownData(locale: string) {
  const fullPath = path.join("../.././", `README${locale == "tr" ? ".tr" : ""}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    contentHtml,
    ...matterResult.data,
  };
}
