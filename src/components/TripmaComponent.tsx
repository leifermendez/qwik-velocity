import { component$ } from "@builder.io/qwik";

export const TripmaComponent = component$(() => {
  return (
    <main class="items-start bg-white flex flex-col px-5">
      <section class="self-center flex w-full max-w-[1387px] flex-col mt-20 mb-8 max-md:max-w-full max-md:mt-10">
        <div class="justify-between items-start self-center flex w-full flex-col pr-5 pb-6 max-md:max-w-full">
          <div class="self-center w-full max-w-[1331px] max-md:max-w-full">
            <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div class="flex flex-col items-stretch w-[12%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/308f2ff6-8010-4c43-be7f-a6c6bdba348f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/308f2ff6-8010-4c43-be7f-a6c6bdba348f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/308f2ff6-8010-4c43-be7f-a6c6bdba348f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/308f2ff6-8010-4c43-be7f-a6c6bdba348f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/308f2ff6-8010-4c43-be7f-a6c6bdba348f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/308f2ff6-8010-4c43-be7f-a6c6bdba348f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/308f2ff6-8010-4c43-be7f-a6c6bdba348f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/308f2ff6-8010-4c43-be7f-a6c6bdba348f?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"class="aspect-[2.42] object-cover object-center w-[145px] overflow-hidden max-w-full max-md:mt-10"
                />
              </div>
              <div class="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full max-md:ml-0">
                <div class="grow max-md:max-w-full max-md:mt-10">
                  <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div class="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                      <div class="items-start flex flex-col my-auto max-md:mt-10">
                        <h2 class="text-slate-500 text-lg font-bold">About</h2>
                        <p class="text-slate-400 text-base mt-4">About Tripma</p>
                        <p class="text-slate-400 text-base mt-5">How it works</p>
                        <p class="text-slate-400 text-base mt-5">Careers</p>
                        <p class="text-slate-400 text-base mt-5">Press</p>
                        <p class="text-slate-400 text-base mt-4">Blog</p>
                        <p class="text-slate-400 text-base mt-5">Forum</p>
                      </div>
                    </div>
                    <div class="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                      <div class="items-start flex grow flex-col mt-6 max-md:mt-10">
                        <h2 class="text-slate-500 text-lg font-bold">Partner with us</h2>
                        <p class="text-slate-400 text-base mt-4">Partnership programs</p>
                        <p class="text-slate-400 text-base mt-5">Affiliate program</p>
                        <p class="text-slate-400 text-base mt-5">Connectivity partners</p>
                        <p class="text-slate-400 text-base mt-5">Promotions and events</p>
                        <p class="text-slate-400 text-base mt-4">Integrations</p>
                        <p class="text-slate-400 text-base mt-5">Community</p>
                        <p class="text-slate-400 text-base mt-5">Loyalty program</p>
                      </div>
                    </div>
                    <div class="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
                      <div class="items-start flex flex-col my-auto max-md:mt-10">
                        <h2 class="text-slate-500 text-lg font-bold">Support</h2>
                        <p class="text-slate-400 text-base mt-4">Help Center</p>
                        <p class="text-slate-400 text-base mt-5">Contact us</p>
                        <p class="text-slate-400 text-base mt-5">Privacy policy</p>
                        <p class="text-slate-400 text-base mt-5">Terms of service</p>
                        <p class="text-slate-400 text-base mt-4">Trust and safety</p>
                        <p class="text-slate-400 text-base mt-5">Accessibility</p>
                      </div>
                    </div>
                    <div class="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                      <div class="items-start flex flex-col pt-6 max-md:mt-10">
                        <div class="items-start flex w-[217px] max-w-full flex-col">
                          <h2 class="text-slate-500 text-lg font-bold">Get the app</h2>
                          <p class="text-slate-400 text-base mt-4">Tripma for Android</p>
                          <p class="text-slate-400 text-base mt-5">Tripma for iOS</p>
                          <p class="text-slate-400 text-base mt-5">Mobile site</p>
                        </div>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb71a4ef-552f-4204-b9c2-f0f48ffc0d07?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb71a4ef-552f-4204-b9c2-f0f48ffc0d07?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb71a4ef-552f-4204-b9c2-f0f48ffc0d07?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb71a4ef-552f-4204-b9c2-f0f48ffc0d07?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb71a4ef-552f-4204-b9c2-f0f48ffc0d07?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb71a4ef-552f-4204-b9c2-f0f48ffc0d07?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb71a4ef-552f-4204-b9c2-f0f48ffc0d07?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb71a4ef-552f-4204-b9c2-f0f48ffc0d07?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"class="aspect-[3.33] object-cover object-center w-[150px] overflow-hidden max-w-full mt-9"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cfd9fe58-af59-4e43-9f23-d1d2d6f7847a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfd9fe58-af59-4e43-9f23-d1d2d6f7847a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfd9fe58-af59-4e43-9f23-d1d2d6f7847a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfd9fe58-af59-4e43-9f23-d1d2d6f7847a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfd9fe58-af59-4e43-9f23-d1d2d6f7847a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfd9fe58-af59-4e43-9f23-d1d2d6f7847a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfd9fe58-af59-4e43-9f23-d1d2d6f7847a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfd9fe58-af59-4e43-9f23-d1d2d6f7847a?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"class="aspect-[3.33] object-cover object-center w-[150px] justify-center items-center overflow-hidden max-w-full grow mt-3.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="justify-between items-start self-center flex w-full max-w-[1331px] gap-5 mt-20 pl-2.5 py-2.5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div class="items-start self-stretch flex w-[124px] max-w-full justify-between gap-5 max-md:justify-center">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23862e9a-ad93-4bdf-bc4d-e9d228402cb8?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/23862e9a-ad93-4bdf-bc4d-e9d228402cb8?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23862e9a-ad93-4bdf-bc4d-e9d228402cb8?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/23862e9a-ad93-4bdf-bc4d-e9d228402cb8?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/23862e9a-ad93-4bdf-bc4d-e9d228402cb8?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23862e9a-ad93-4bdf-bc4d-e9d228402cb8?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/23862e9a-ad93-4bdf-bc4d-e9d228402cb8?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/23862e9a-ad93-4bdf-bc4d-e9d228402cb8?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"class="aspect-square object-cover object-center w-full overflow-hidden flex-1"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/77d175b7-88a7-4277-9bc6-90b50f691a43?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/77d175b7-88a7-4277-9bc6-90b50f691a43?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77d175b7-88a7-4277-9bc6-90b50f691a43?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/77d175b7-88a7-4277-9bc6-90b50f691a43?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/77d175b7-88a7-4277-9bc6-90b50f691a43?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77d175b7-88a7-4277-9bc6-90b50f691a43?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/77d175b7-88a7-4277-9bc6-90b50f691a43?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/77d175b7-88a7-4277-9bc6-90b50f691a43?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"class="aspect-[1.04] object-cover object-center w-full overflow-hidden flex-1"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c51351f0-b49c-4408-840d-fa7cdddac5a7?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c51351f0-b49c-4408-840d-fa7cdddac5a7?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c51351f0-b49c-4408-840d-fa7cdddac5a7?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c51351f0-b49c-4408-840d-fa7cdddac5a7?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c51351f0-b49c-4408-840d-fa7cdddac5a7?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c51351f0-b49c-4408-840d-fa7cdddac5a7?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c51351f0-b49c-4408-840d-fa7cdddac5a7?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c51351f0-b49c-4408-840d-fa7cdddac5a7?apiKey=24fb4f1867164a24979ae2aa5e9f2c62&"class="aspect-[1.04] object-cover object-center w-full overflow-hidden flex-1"
          />
        </div>
        <div class="text-slate-400 text-right text-xl self-stretch">
          © 2020 Tripma incorporated
        </div>
      </section>
    </main>
  );
});