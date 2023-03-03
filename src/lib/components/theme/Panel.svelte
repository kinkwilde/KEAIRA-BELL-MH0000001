<script>
    // console.log('panel.svelte');
</script>

<div
    id="mobile-menu"
    class="absolute inset-0 z-10 flex h-screen w-full flex-col bg-black dark:bg-black md:hidden"
>
    <div class="flex items-center justify-between border-b border-black p-4 pb-4 dark:border-black">
        <div class="flex items-center space-x-3">
            <div>
                <img
                    class="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2.svg"
                    alt="search"
                />
                <img
                    class="hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg"
                    alt="search"
                />
            </div>
            <input
                type="text"
                placeholder="Search for products"
                class="text-sm text-black placeholder-black focus:outline-none dark:bg-black dark:placeholder-black"
            />
        </div>
        <button
            aria-label="close menu"
            class="rounded focus:outline-none focus:ring-2 focus:ring-black"
        >
            <img
                class="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg6.svg"
                alt="cross"
            />
            <img
                class="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg6dark.svg"
                alt="cross"
            />
        </button>
    </div>
    <div class="mt-6 p-4">
        <ul class="flex flex-col space-y-6">
            <li>
                <a
                    href="/"
                    class="flex items-center justify-between text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black dark:text-black"
                >
                    Home
                    <div>
                        <img
                            class="dark:hidden"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg"
                            alt="arrow"
                        />
                        <img
                            class="hidden dark:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg"
                            alt="arrow"
                        />
                    </div>
                </a>
            </li>
            <li>
                <a
                    href="/"
                    class="flex items-center justify-between text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black dark:text-black"
                >
                    Furniture
                    <div>
                        <img
                            class="dark:hidden"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg"
                            alt="arrow"
                        />
                        <img
                            class="hidden dark:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg"
                            alt="arrow"
                        />
                    </div>
                </a>
            </li>
            <li>
                <a
                    href="/"
                    class="flex items-center justify-between text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black dark:text-black"
                >
                    Lookbook
                    <div>
                        <img
                            class="dark:hidden"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg"
                            alt="arrow"
                        />
                        <img
                            class="hidden dark:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg"
                            alt="arrow"
                        />
                    </div>
                </a>
            </li>
            <li>
                <a
                    href="/"
                    class="flex items-center justify-between text-base text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black dark:text-black"
                >
                    Support
                    <div>
                        <img
                            class="dark:hidden"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg"
                            alt="arrow"
                        />
                        <img
                            class="hidden dark:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg"
                            alt="arrow"
                        />
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <div class="flex h-full items-end">
        <ul class="flex w-full flex-col space-y-8 bg-black p-4 py-10 dark:bg-black">
            <li>
                <a
                    href="/"
                    class="flex items-center space-x-2 text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black dark:text-black"
                >
                    <div>
                        <img
                            class="w-5 dark:hidden"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4.svg"
                            alt="bag"
                        />
                        <img
                            class="hidden w-5 dark:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4dark.svg"
                            alt="bag"
                        />
                    </div>
                    <p class="text-base">Cart</p>
                </a>
            </li>
            <li>
                <a
                    href="/"
                    class="flex items-center space-x-2 text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black dark:text-black"
                >
                    <div>
                        <img
                            class="w-5 dark:hidden"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3.svg"
                            alt="favourites"
                        />
                        <img
                            class="hidden w-5 dark:block"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3dark.svg"
                            alt="favourites"
                        />
                    </div>
                    <p class="text-base">Wishlist</p>
                </a>
            </li>
        </ul>
    </div>
</div>
