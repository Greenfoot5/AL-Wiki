<script>
    import { writable } from "svelte/store";
    import { browser } from "$app/environment";

    const enabled = writable(
        (browser && localStorage.getItem("v2.0-alpha.1.bannerEnabled")) || "true"
    );

    enabled.subscribe((val) => {
        if (browser) return (localStorage.bannerEnabled = val);
    });

    const title = "v2.0-alpha.1 is out!";
    const message = "v2.0-alpha.1 is now fully released!";
</script>

{#if $enabled === "true"}
    <div class="bg-lancer font-futured text-lancer-dark">
        <div class="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between">
                <div class="flex w-0 flex-1 items-center font-medium text-white">
          <span class="flex rounded-lg bg-lancer-dark p-2">
            <!-- Heroicon name: outline/arrow-down-tray -->
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.75"
                    stroke="currentColor"
                    class="h-6 w-6 text-white"
            >
              <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </span>
                    <p class="ml-3 truncate">
                        <span class="md:hidden">{title}</span>
                        <span class="hidden md:inline">{message}</span>
                    </p>
                </div>
                <div class="order-4 mt-2 w-full flex-shrink-0 px-2 sm:order-2 sm:mt-0 sm:w-auto">
                    <a
                            href="https://greenfoot5.itch.io/Bestagon-Defence"
                            class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 font-futured text-sm font-medium shadow-sm hover:bg-lancer-dark hover:text-white"
                    >Download</a
                    >
                </div>
                <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                    <a
                            href="/updates/alpha/v2.0-alpha.1"
                            class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 font-futured text-sm font-medium shadow-sm hover:bg-lancer-dark hover:text-white"
                    >Patch Notes</a
                    >
                </div>
                <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button
                            type="button"
                            on:click={() => ($enabled = "false")}
                            class="-mr-1 flex rounded-md p-2 hover:bg-lancer-dark focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                    >
                        <span class="sr-only">Dismiss</span>
                        <!-- Heroicon name: outline/x-mark -->
                        <svg
                                class="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    a {
        text-decoration-line: none;
    }

    p {
        padding: 0;
    }
</style>
