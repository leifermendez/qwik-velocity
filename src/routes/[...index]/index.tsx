import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import {
  getContent,
  getBuilderSearchParams,
} from "@builder.io/sdk-qwik";

// This page is a catch-all for all routes that don't have a pre-defined route.
// Using a catch-all route allows you to dynamically create new pages in Builder.

// Use the `useBuilderContent` route loader to get your content from Builder.
// `routeLoader$()` takes an async function to fetch content
// from Builder with using `getContent()`.
export const useBuilderContent = routeLoader$(async ({ url, error }) => {
  const isPreviewing = url.searchParams.has("builder.preview");

  // Fetch Builder.io Visual CMS content using the Qwik SDK.
  // The public API key is set in the .env file at the root
  // https://www.builder.io/c/docs/using-your-api-key
  const builderContent = await getContent({
    model: "page",
    apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {
      urlPath: url.pathname,
    },
  });

  // If there's no content, throw a 404.
  // You can use your own 404 component here
  if (!builderContent && !isPreviewing) {
    throw error(404, "Page not found");
  }

  // return content fetched from Builder, which is JSON
  return builderContent;
});

export default component$(() => {

  return (
    <div class="bg-white flex flex-col">
    <div class="self-center flex w-full max-w-[1180px] items-start justify-between gap-5 mt-9 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
      <div class="text-emerald-400 text-5xl font-semibold leading-[60%] mt-5 max-md:text-4xl">
        Biccas
      </div>
      <div class="self-center flex w-[407px] max-w-full items-start justify-between gap-5 my-auto max-md:justify-center">
        <div class="text-black text-lg font-medium">Home</div>
        <div class="text-neutral-400 text-base font-medium">Product</div>
        <div class="text-neutral-400 text-base font-medium">FAQ</div>
        <div class="text-neutral-400 text-base font-medium">Blog</div>
        <div class="text-neutral-400 text-base font-medium">About Us</div>
      </div>
      <div class="flex w-[143px] max-w-full items-start justify-between gap-5 mt-1.5">
        <div class="text-neutral-400 text-base font-medium self-center my-auto">
          Login
        </div>
        <div class="text-gray-50 text-base font-medium self-stretch bg-emerald-400 w-20 max-w-full pl-2.5 pr-3 py-3.5 rounded-xl">
          Sign Up
        </div>
      </div>
    </div>
    <div class="self-center w-full max-w-[1296px] mt-32 px-5 max-md:max-w-full max-md:mt-10">
      <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div class="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
          <div class="flex grow flex-col mt-4 max-md:max-w-full max-md:mt-10">
            <div class="text-stone-900 text-7xl font-bold leading-[112.5%] w-[555px] max-w-full max-md:text-4xl">
              We’re here to Increase your Productivity
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d20993a3-68dd-4334-8bf3-25fa322d626a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d20993a3-68dd-4334-8bf3-25fa322d626a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d20993a3-68dd-4334-8bf3-25fa322d626a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d20993a3-68dd-4334-8bf3-25fa322d626a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d20993a3-68dd-4334-8bf3-25fa322d626a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d20993a3-68dd-4334-8bf3-25fa322d626a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d20993a3-68dd-4334-8bf3-25fa322d626a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d20993a3-68dd-4334-8bf3-25fa322d626a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
              class="aspect-[14.32] object-cover object-center w-[487px] stroke-[8px] stroke-emerald-400 overflow-hidden max-w-full mt-7"
            />
            <div class="text-black text-lg font-medium leading-[166.667%] mt-11 max-md:max-w-full max-md:mt-10">
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest featuresin managing work every
              day.
            </div>
            <div class="flex w-[357px] max-w-full items-start justify-between gap-5 mt-14 max-md:mt-10">
              <div class="justify-center items-center bg-emerald-400 flex flex-col flex-1 p-5 rounded-[40px]">
                <div class="text-white text-lg font-medium self-center">
                  Try free trial
                </div>
              </div>
              <div class="items-start self-center flex gap-3.5 my-auto">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dcec379b-3d3a-4154-8f30-83e7233513f4?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcec379b-3d3a-4154-8f30-83e7233513f4?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcec379b-3d3a-4154-8f30-83e7233513f4?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcec379b-3d3a-4154-8f30-83e7233513f4?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcec379b-3d3a-4154-8f30-83e7233513f4?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcec379b-3d3a-4154-8f30-83e7233513f4?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcec379b-3d3a-4154-8f30-83e7233513f4?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcec379b-3d3a-4154-8f30-83e7233513f4?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                  class="aspect-square object-cover object-center w-10 justify-center items-center overflow-hidden self-stretch max-w-full"
                />
                <div class="text-stone-900 text-lg font-medium self-center my-auto">
                  View Demo
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7bc1d3-6150-4946-a260-a7429bbe2d9c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b7bc1d3-6150-4946-a260-a7429bbe2d9c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b7bc1d3-6150-4946-a260-a7429bbe2d9c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b7bc1d3-6150-4946-a260-a7429bbe2d9c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b7bc1d3-6150-4946-a260-a7429bbe2d9c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b7bc1d3-6150-4946-a260-a7429bbe2d9c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b7bc1d3-6150-4946-a260-a7429bbe2d9c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b7bc1d3-6150-4946-a260-a7429bbe2d9c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
            class="aspect-[1.26] object-cover object-center w-[702px] overflow-hidden max-w-full max-md:mt-9"
          />
        </div>
      </div>
    </div>
    <div class="self-center flex w-full max-w-[1074px] flex-col mt-36 px-5 max-md:max-w-full max-md:mt-10">
      <div class="text-stone-900 text-center text-4xl font-bold self-center ml-14 max-md:max-w-full">
        More than 25,000 teams use Collabs
      </div>
      <div class="self-center flex w-full items-start justify-between gap-5 -ml-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div class="self-stretch flex items-start justify-between gap-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a9731488-ddbe-427f-9d89-de34af60c3cc?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9731488-ddbe-427f-9d89-de34af60c3cc?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9731488-ddbe-427f-9d89-de34af60c3cc?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9731488-ddbe-427f-9d89-de34af60c3cc?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9731488-ddbe-427f-9d89-de34af60c3cc?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9731488-ddbe-427f-9d89-de34af60c3cc?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9731488-ddbe-427f-9d89-de34af60c3cc?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9731488-ddbe-427f-9d89-de34af60c3cc?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
            class="aspect-[1.06] object-cover object-center w-[34px] overflow-hidden max-w-full"
          />
          <div class="text-neutral-400 text-center text-3xl font-semibold mt-2.5">
            Unsplash
          </div>
        </div>
        <div class="flex items-start gap-2.5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/18f978d0-c64d-42dc-aee2-cad2acd2c317?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f978d0-c64d-42dc-aee2-cad2acd2c317?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f978d0-c64d-42dc-aee2-cad2acd2c317?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f978d0-c64d-42dc-aee2-cad2acd2c317?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f978d0-c64d-42dc-aee2-cad2acd2c317?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f978d0-c64d-42dc-aee2-cad2acd2c317?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f978d0-c64d-42dc-aee2-cad2acd2c317?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f978d0-c64d-42dc-aee2-cad2acd2c317?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
            class="aspect-[1.09] object-cover object-center w-[38px] fill-neutral-400 overflow-hidden self-stretch max-w-full"
          />
          <div class="text-neutral-400 text-3xl font-semibold self-center my-auto">
            Notion
          </div>
        </div>
        <div class="self-center flex items-start gap-2.5 my-auto">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0000a83-a62b-4769-bab1-db1f540445b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0000a83-a62b-4769-bab1-db1f540445b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0000a83-a62b-4769-bab1-db1f540445b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0000a83-a62b-4769-bab1-db1f540445b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0000a83-a62b-4769-bab1-db1f540445b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0000a83-a62b-4769-bab1-db1f540445b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0000a83-a62b-4769-bab1-db1f540445b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0000a83-a62b-4769-bab1-db1f540445b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
            class="aspect-square object-cover object-center w-[30px] overflow-hidden self-stretch max-w-full"
          />
          <div class="text-neutral-400 text-3xl font-semibold self-center my-auto">
            INTERCOM
          </div>
        </div>
        <div class="flex items-start gap-2.5 mt-1">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/16d0c767-c234-414c-a285-a085fa2de190?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/16d0c767-c234-414c-a285-a085fa2de190?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16d0c767-c234-414c-a285-a085fa2de190?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/16d0c767-c234-414c-a285-a085fa2de190?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/16d0c767-c234-414c-a285-a085fa2de190?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16d0c767-c234-414c-a285-a085fa2de190?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/16d0c767-c234-414c-a285-a085fa2de190?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/16d0c767-c234-414c-a285-a085fa2de190?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
            class="aspect-[0.77] object-cover object-center w-[23px] fill-neutral-400 overflow-hidden max-w-full"
          />
          <div class="text-neutral-400 text-3xl font-semibold">descript</div>
        </div>
        <div class="flex items-start gap-2.5 mt-1">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5c9da642-0264-4684-a474-61839adefc3c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c9da642-0264-4684-a474-61839adefc3c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c9da642-0264-4684-a474-61839adefc3c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c9da642-0264-4684-a474-61839adefc3c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c9da642-0264-4684-a474-61839adefc3c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c9da642-0264-4684-a474-61839adefc3c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c9da642-0264-4684-a474-61839adefc3c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c9da642-0264-4684-a474-61839adefc3c?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
            class="aspect-square object-cover object-center w-[30px] overflow-hidden max-w-full rounded-[50%]"
          />
          <div class="text-neutral-400 text-3xl font-semibold mt-1">
            grammarly
          </div>
        </div>
      </div>
    </div>
    <div class="self-center flex w-full max-w-[1180px] flex-col mt-36 max-md:max-w-full max-md:mt-10">
      <div class="self-stretch px-5 max-md:max-w-full">
        <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div class="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
            <div class="text-stone-900 text-5xl font-semibold w-[331px] max-w-full max-md:text-4xl max-md:mt-10">
              Our Features you cab get
            </div>
          </div>
          <div class="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
            <div class="text-neutral-400 text-lg font-medium leading-[166.667%] w-[461px] max-w-full my-auto max-md:mt-10">
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct esaly
            </div>
          </div>
          <div class="flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0">
            <div class="bg-emerald-400 flex w-[162px] max-w-full flex-col m-auto px-5 py-7 rounded-[70px] max-md:mt-10">
              <div class="text-white text-lg font-medium leading-[166.667%] self-center">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="self-stretch mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div class="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div class="flex grow flex-col max-md:mt-10">
              <div class="bg-slate-50 flex w-[364px] max-w-full flex-col pl-5 pt-10 rounded-3xl">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dbaab-8b6e-4d3d-a6fd-560a0c838dcd?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dbaab-8b6e-4d3d-a6fd-560a0c838dcd?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dbaab-8b6e-4d3d-a6fd-560a0c838dcd?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dbaab-8b6e-4d3d-a6fd-560a0c838dcd?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dbaab-8b6e-4d3d-a6fd-560a0c838dcd?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dbaab-8b6e-4d3d-a6fd-560a0c838dcd?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dbaab-8b6e-4d3d-a6fd-560a0c838dcd?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dbaab-8b6e-4d3d-a6fd-560a0c838dcd?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                  class="aspect-[0.87] object-cover object-center w-full overflow-hidden self-stretch grow max-md:ml-0.5"
                />
              </div>
              <div class="text-stone-900 text-3xl font-semibold leading-[100%] mt-8">
                Collboration Teams{" "}
              </div>
              <div class="text-neutral-400 text-lg font-medium leading-[166.667%] mt-5">
                Here you can handle projects together with team virtually
              </div>
            </div>
          </div>
          <div class="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div class="flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f166011b-da70-4c7f-b42e-e104e417bb0d?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f166011b-da70-4c7f-b42e-e104e417bb0d?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f166011b-da70-4c7f-b42e-e104e417bb0d?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f166011b-da70-4c7f-b42e-e104e417bb0d?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f166011b-da70-4c7f-b42e-e104e417bb0d?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f166011b-da70-4c7f-b42e-e104e417bb0d?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f166011b-da70-4c7f-b42e-e104e417bb0d?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f166011b-da70-4c7f-b42e-e104e417bb0d?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                class="aspect-[0.85] object-cover object-center w-full overflow-hidden"
              />
              <div class="text-stone-900 text-3xl font-semibold leading-[100%] mt-9">
                Cloud Storage
              </div>
              <div class="text-neutral-400 text-lg font-medium leading-[166.667%] mt-4">
                No nedd to worry about storage because we provide storage up
                to 2 TB
              </div>
            </div>
          </div>
          <div class="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div class="flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6722f224-7853-41a5-9cc2-da8d725bf98f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6722f224-7853-41a5-9cc2-da8d725bf98f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6722f224-7853-41a5-9cc2-da8d725bf98f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6722f224-7853-41a5-9cc2-da8d725bf98f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6722f224-7853-41a5-9cc2-da8d725bf98f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6722f224-7853-41a5-9cc2-da8d725bf98f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6722f224-7853-41a5-9cc2-da8d725bf98f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6722f224-7853-41a5-9cc2-da8d725bf98f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                class="aspect-[0.85] object-cover object-center w-full overflow-hidden"
              />
              <div class="text-stone-900 text-3xl font-semibold leading-[100%] mt-8">
                Daily Analytics
              </div>
              <div class="text-neutral-400 text-lg font-medium leading-[166.667%] mt-3.5">
                We always provide useful informatin to make it easier for you
                every day
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="self-center w-full max-w-[1249px] mt-32 px-5 max-md:max-w-full max-md:mt-10">
      <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div class="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
          <div class="flex flex-col mt-3 max-md:max-w-full max-md:mt-10">
            <div class="text-stone-900 text-5xl font-bold max-md:max-w-full max-md:text-4xl">
              What Benifit Will You Get
            </div>
            <div class="flex w-[427px] max-w-full items-start gap-5 mt-16 max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c673ecc7-59ba-4ca6-8fd2-e88165fd1783?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c673ecc7-59ba-4ca6-8fd2-e88165fd1783?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c673ecc7-59ba-4ca6-8fd2-e88165fd1783?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c673ecc7-59ba-4ca6-8fd2-e88165fd1783?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c673ecc7-59ba-4ca6-8fd2-e88165fd1783?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c673ecc7-59ba-4ca6-8fd2-e88165fd1783?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c673ecc7-59ba-4ca6-8fd2-e88165fd1783?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c673ecc7-59ba-4ca6-8fd2-e88165fd1783?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                class="aspect-square object-cover object-center w-8 fill-emerald-400 overflow-hidden self-stretch max-w-full"
              />
              <div class="text-stone-900 text-lg font-medium leading-[166.667%] self-center max-w-[450px] grow shrink-0 basis-auto my-auto">
                Free Consulting With Experet Saving Money
              </div>
            </div>
            <div class="flex w-[179px] max-w-full items-start gap-5 mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eacd4301-ce57-4f7b-ab86-832ee1e49332?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eacd4301-ce57-4f7b-ab86-832ee1e49332?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eacd4301-ce57-4f7b-ab86-832ee1e49332?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eacd4301-ce57-4f7b-ab86-832ee1e49332?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eacd4301-ce57-4f7b-ab86-832ee1e49332?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eacd4301-ce57-4f7b-ab86-832ee1e49332?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eacd4301-ce57-4f7b-ab86-832ee1e49332?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eacd4301-ce57-4f7b-ab86-832ee1e49332?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                class="aspect-square object-cover object-center w-8 fill-emerald-400 overflow-hidden self-stretch max-w-full"
              />
              <div class="text-stone-900 text-lg font-medium leading-[166.667%] my-auto">
                Online Banking
              </div>
            </div>
            <div class="flex w-[322px] max-w-full items-start gap-5 mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2a835048-ff3c-47df-8bb0-e8f2ceaeef39?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a835048-ff3c-47df-8bb0-e8f2ceaeef39?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a835048-ff3c-47df-8bb0-e8f2ceaeef39?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a835048-ff3c-47df-8bb0-e8f2ceaeef39?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a835048-ff3c-47df-8bb0-e8f2ceaeef39?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a835048-ff3c-47df-8bb0-e8f2ceaeef39?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a835048-ff3c-47df-8bb0-e8f2ceaeef39?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a835048-ff3c-47df-8bb0-e8f2ceaeef39?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                class="aspect-square object-cover object-center w-8 fill-emerald-400 overflow-hidden self-stretch max-w-full"
              />
              <div class="text-stone-900 text-lg font-medium leading-[166.667%] self-center max-w-[327px] grow shrink-0 basis-auto my-auto">
                Investment Report Every Month
              </div>
            </div>
            <div class="flex w-[301px] max-w-full items-start gap-5 mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aaa8a5b0-8782-42f2-9375-3857e323b5b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa8a5b0-8782-42f2-9375-3857e323b5b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa8a5b0-8782-42f2-9375-3857e323b5b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa8a5b0-8782-42f2-9375-3857e323b5b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa8a5b0-8782-42f2-9375-3857e323b5b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa8a5b0-8782-42f2-9375-3857e323b5b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa8a5b0-8782-42f2-9375-3857e323b5b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa8a5b0-8782-42f2-9375-3857e323b5b9?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                class="aspect-square object-cover object-center w-8 fill-emerald-400 overflow-hidden self-stretch max-w-full"
              />
              <div class="text-stone-900 text-lg font-medium leading-[166.667%] self-center max-w-[304px] grow shrink-0 basis-auto my-auto">
                Saving Money For The Future
              </div>
            </div>
            <div class="flex w-[211px] max-w-full items-start gap-5 mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e9a98a5-c4cb-4047-8cb1-26e182e73541?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e9a98a5-c4cb-4047-8cb1-26e182e73541?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e9a98a5-c4cb-4047-8cb1-26e182e73541?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e9a98a5-c4cb-4047-8cb1-26e182e73541?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e9a98a5-c4cb-4047-8cb1-26e182e73541?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e9a98a5-c4cb-4047-8cb1-26e182e73541?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e9a98a5-c4cb-4047-8cb1-26e182e73541?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e9a98a5-c4cb-4047-8cb1-26e182e73541?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                class="aspect-square object-cover object-center w-8 fill-emerald-400 overflow-hidden self-stretch max-w-full"
              />
              <div class="text-stone-900 text-lg font-medium leading-[166.667%] my-auto">
                Online Transection
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/63d199f5-af48-44e9-be63-9f6a298c0fca?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/63d199f5-af48-44e9-be63-9f6a298c0fca?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63d199f5-af48-44e9-be63-9f6a298c0fca?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/63d199f5-af48-44e9-be63-9f6a298c0fca?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/63d199f5-af48-44e9-be63-9f6a298c0fca?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63d199f5-af48-44e9-be63-9f6a298c0fca?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/63d199f5-af48-44e9-be63-9f6a298c0fca?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/63d199f5-af48-44e9-be63-9f6a298c0fca?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
            class="aspect-[1.18] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
    <div class="bg-gray-900 self-stretch flex w-full flex-col mt-32 pt-32 pb-11 px-5 max-md:max-w-full max-md:mt-10">
      <div class="self-center flex w-full max-w-[1180px] flex-col max-md:max-w-full">
        <div class="self-center w-full max-w-[1179px] max-md:max-w-full">
          <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div class="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
              <div class="flex grow flex-col mt-3 max-md:max-w-full max-md:mt-10">
                <div class="text-white text-5xl font-semibold w-[444px] max-w-full max-md:text-4xl">
                  People are Saying About DoWhith
                </div>
                <div class="text-neutral-400 text-lg font-medium leading-[166.667%] mt-7 max-md:max-w-full">
                  Everything you need to accept to payment and grow your money
                  of manage anywhere on planet
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4d628a8-e6d3-4a74-8869-48985902130a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d628a8-e6d3-4a74-8869-48985902130a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d628a8-e6d3-4a74-8869-48985902130a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d628a8-e6d3-4a74-8869-48985902130a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d628a8-e6d3-4a74-8869-48985902130a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d628a8-e6d3-4a74-8869-48985902130a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d628a8-e6d3-4a74-8869-48985902130a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d628a8-e6d3-4a74-8869-48985902130a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                  class="aspect-[1.18] object-cover object-center w-[45px] overflow-hidden max-w-full mt-12 max-md:mt-10"
                />
                <div class="text-neutral-400 text-lg font-medium leading-[166.667%] mt-9 max-md:max-w-full">
                  I am very helped by this E-wallet application , my days are
                  very easy to use this application and its very helpful in my
                  life , even I can pay a short time 😍
                </div>
                <div class="text-neutral-400 text-lg font-medium leading-[166.667%] mt-10">
                  _ Aria Zinanrio
                </div>
                <div class="flex w-[410px] max-w-full items-start gap-5 mt-12 max-md:justify-center max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6bfda8b3-72a8-4cb9-ac3a-7276109aa729?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bfda8b3-72a8-4cb9-ac3a-7276109aa729?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bfda8b3-72a8-4cb9-ac3a-7276109aa729?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bfda8b3-72a8-4cb9-ac3a-7276109aa729?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bfda8b3-72a8-4cb9-ac3a-7276109aa729?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bfda8b3-72a8-4cb9-ac3a-7276109aa729?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bfda8b3-72a8-4cb9-ac3a-7276109aa729?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bfda8b3-72a8-4cb9-ac3a-7276109aa729?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                    class="aspect-square object-cover object-center w-full overflow-hidden flex-1 rounded-[50%]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/157a9d2c-1ec6-4327-a6d1-04a1ae9e50e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/157a9d2c-1ec6-4327-a6d1-04a1ae9e50e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/157a9d2c-1ec6-4327-a6d1-04a1ae9e50e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/157a9d2c-1ec6-4327-a6d1-04a1ae9e50e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/157a9d2c-1ec6-4327-a6d1-04a1ae9e50e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/157a9d2c-1ec6-4327-a6d1-04a1ae9e50e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/157a9d2c-1ec6-4327-a6d1-04a1ae9e50e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/157a9d2c-1ec6-4327-a6d1-04a1ae9e50e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                    class="aspect-square object-cover object-center w-full overflow-hidden flex-1 rounded-[50%]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73f75627-bcf3-4c0c-a862-9e359f4ea08a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f75627-bcf3-4c0c-a862-9e359f4ea08a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f75627-bcf3-4c0c-a862-9e359f4ea08a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f75627-bcf3-4c0c-a862-9e359f4ea08a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f75627-bcf3-4c0c-a862-9e359f4ea08a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f75627-bcf3-4c0c-a862-9e359f4ea08a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f75627-bcf3-4c0c-a862-9e359f4ea08a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73f75627-bcf3-4c0c-a862-9e359f4ea08a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                    class="aspect-square object-cover object-center w-full overflow-hidden flex-1 rounded-[50%]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1bc41873-9801-4be3-ab52-392a83319f86?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bc41873-9801-4be3-ab52-392a83319f86?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bc41873-9801-4be3-ab52-392a83319f86?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bc41873-9801-4be3-ab52-392a83319f86?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bc41873-9801-4be3-ab52-392a83319f86?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bc41873-9801-4be3-ab52-392a83319f86?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bc41873-9801-4be3-ab52-392a83319f86?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bc41873-9801-4be3-ab52-392a83319f86?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                    class="aspect-square object-cover object-center w-full overflow-hidden flex-1 rounded-[50%]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/285950c3-6364-4925-9805-7e7ffa350a40?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/285950c3-6364-4925-9805-7e7ffa350a40?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/285950c3-6364-4925-9805-7e7ffa350a40?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/285950c3-6364-4925-9805-7e7ffa350a40?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/285950c3-6364-4925-9805-7e7ffa350a40?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/285950c3-6364-4925-9805-7e7ffa350a40?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/285950c3-6364-4925-9805-7e7ffa350a40?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/285950c3-6364-4925-9805-7e7ffa350a40?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                    class="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
              <div class="items-center bg-gray-800 flex grow flex-col w-full mx-auto pt-10 pb-16 px-5 rounded-3xl max-md:max-w-full max-md:mt-10">
                <div class="self-center flex w-[440px] max-w-full flex-col">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ecbd0092-c26a-4646-8858-1e297ad088e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecbd0092-c26a-4646-8858-1e297ad088e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecbd0092-c26a-4646-8858-1e297ad088e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecbd0092-c26a-4646-8858-1e297ad088e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecbd0092-c26a-4646-8858-1e297ad088e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecbd0092-c26a-4646-8858-1e297ad088e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecbd0092-c26a-4646-8858-1e297ad088e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecbd0092-c26a-4646-8858-1e297ad088e1?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                    class="aspect-[0.84] object-cover object-center w-[72px] overflow-hidden self-center max-w-full"
                  />
                  <div class="text-white text-3xl font-medium self-center mt-4">
                    Get Started
                  </div>
                  <div class="text-white text-lg font-medium mt-5">Email</div>
                  <div class="text-neutral-400 text-sm font-medium self-stretch bg-white mt-6 px-5 py-5 rounded-xl max-md:max-w-full">
                    Enter your email
                  </div>
                  <div class="text-white text-lg font-medium mt-6">
                    Message
                  </div>
                  <div class="text-neutral-400 text-sm font-medium self-stretch bg-white mt-5 pt-6 pb-11 px-5 rounded-xl max-md:max-w-full">
                    What are you say ?
                  </div>
                  <div class="bg-emerald-400 self-stretch flex flex-col mt-5 px-5 py-6 rounded-xl max-md:max-w-full">
                    <div class="text-white text-base font-semibold self-center">
                      Request Demo
                    </div>
                  </div>
                  <div class="text-white text-sm font-medium mt-3.5 max-md:mr-0.5">
                    <span class="text-neutral-400">or</span>
                    <span class="text-white"> Start Free Trial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="self-center w-full max-w-6xl mt-40 max-md:max-w-full max-md:mt-10">
          <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div class="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
              <div class="flex flex-col max-md:mt-10">
                <div class="text-emerald-400 text-5xl font-semibold leading-[60%] mt-5 max-md:text-4xl">
                  Biccas
                </div>
                <div class="text-neutral-400 text-lg font-medium leading-[166.667%] mt-6">
                  Get started noew try our product
                </div>
                <div class="flex w-[410px] max-w-full items-start justify-between gap-5 mt-9 pl-5 pr-2 py-2 rounded-[70px] border-2 border-solid border-neutral-400">
                  <div class="text-neutral-400 text-lg font-medium leading-[166.667%] my-auto">
                    Enter your email here
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/52b2934e-a706-4267-ba71-5784453c1154?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/52b2934e-a706-4267-ba71-5784453c1154?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52b2934e-a706-4267-ba71-5784453c1154?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/52b2934e-a706-4267-ba71-5784453c1154?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/52b2934e-a706-4267-ba71-5784453c1154?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52b2934e-a706-4267-ba71-5784453c1154?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/52b2934e-a706-4267-ba71-5784453c1154?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/52b2934e-a706-4267-ba71-5784453c1154?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
                    class="aspect-square object-cover object-center w-[46px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
              <div class="grow mt-2.5 max-md:max-w-full max-md:mt-10">
                <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div class="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                    <div class="flex flex-col max-md:mt-10">
                      <div class="text-white text-lg font-medium">
                        Support
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-9">
                        Help centre
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-6">
                        Account information
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-7">
                        About
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-7">
                        Contact us
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div class="flex grow flex-col max-md:mt-10">
                      <div class="text-white text-lg font-medium">
                        Help and Solution
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-9">
                        Talk to support
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-6">
                        Support docs
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-6">
                        System status
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-6">
                        Covid responde
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
                    <div class="flex grow flex-col max-md:mt-10">
                      <div class="text-white text-lg font-medium">
                        Product
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-10">
                        Update
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-6">
                        Security
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-6">
                        Beta test
                      </div>
                      <div class="text-neutral-400 text-lg font-medium mt-7">
                        Pricing product
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="self-center flex w-full items-start justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div class="text-white text-lg font-medium leading-[166.667%] max-w-[457px] self-stretch grow shrink-0 basis-auto max-md:max-w-full">
            © 2022 Biccas Inc. Copyright and rights reserved
          </div>
          <div class="self-stretch flex items-start justify-between gap-2.5 max-md:justify-center">
            <div class="text-white text-lg font-medium leading-[166.667%]">
              Terms and Condtions
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5cf200c0-e4c1-4cea-9815-2a596ed37964?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cf200c0-e4c1-4cea-9815-2a596ed37964?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cf200c0-e4c1-4cea-9815-2a596ed37964?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cf200c0-e4c1-4cea-9815-2a596ed37964?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cf200c0-e4c1-4cea-9815-2a596ed37964?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cf200c0-e4c1-4cea-9815-2a596ed37964?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cf200c0-e4c1-4cea-9815-2a596ed37964?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cf200c0-e4c1-4cea-9815-2a596ed37964?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"
              class="aspect-square object-cover object-center w-1 overflow-hidden self-center max-w-full my-auto rounded-[50%]"
            />
            <div class="text-white text-lg font-medium leading-[166.667%] self-stretch">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const builderContent = resolveValue(useBuilderContent);
  return {
    title: builderContent?.data?.title,
  };
};
