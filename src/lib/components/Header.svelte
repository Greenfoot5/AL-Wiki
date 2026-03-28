<script>
import { discord, github } from "$lib/config.js";
import { siteTitle } from "$lib/config.js";
import { Gamepad2, Menu } from "@lucide/svelte";
import { SiDiscord, SiGithub } from "@icons-pack/svelte-simple-icons";
</script>

<!-- Navigation: Using DaisyUI Drawer for Mobile/Desktop handling -->
<div class="navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-50 border-b border-base-300">

    <!-- Mobile Menu Button (Drawer Toggle) -->
    <div class="flex-1 md:hidden">
        <label for="mobile-drawer" class="btn btn-ghost">
            <Menu class="w-6 h-6" />
        </label>
    </div>

    <!-- Logo -->
    <div class="flex-none">
        <a href="/" class="flex items-center gap-2 group">
            <div class="p-2 rounded-lg bg-linear-to-br from-primary to-secondary group-hover:scale-105 transition-transform">
                <Gamepad2 class="w-6 h-6 text-white" />
            </div>
            <span class="text-xl font-bold tracking-tight">{siteTitle}</span>
        </a>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex flex-1 justify-end items-center gap-6">
        <a href="/bis" class="link link-hover font-medium">Stats</a>
        <a href="/codes" class="link link-hover font-medium">Codes</a>
        <a href="/faq" class="link link-hover font-medium">FAQ</a>
        <a href="/season-timer" class="link link-hover font-medium">Season Timer</a>
        <a href="/news" class="link link-hover font-medium">News</a>

        <div class="flex gap-2">
            <a href={github} target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" aria-label="GitHub">
                <SiGithub class="w-5 h-5" size={24}/>
            </a>
            <a href={discord} target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-ghost" aria-label="Discord">
                <SiDiscord class="w-5 h-5" size={24} />
            </a>
        </div>
    </div>
</div>

<!-- Mobile Drawer (Off-canvas menu) -->
<input id="mobile-drawer" type="checkbox" class="drawer-toggle" />
<div class="drawer-side z-50">
    <label for="mobile-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content border-r border-base-300 gap-2">
        <li><a href="/bis" onclick="{() => document.getElementById('mobile-drawer').checked=false}">Best in Slot</a></li>
        <li><a href="/codes" onclick="{() => document.getElementById('mobile-drawer').checked=false}">Codes</a></li>
        <li><a href="/faq" onclick="{() => document.getElementById('mobile-drawer').checked=false}">FAQ</a></li>
        <li><a href="/season-timer" onclick="{() => document.getElementById('mobile-drawer').checked=false}">Season Timer</a></li>
        <li><a href="/news" onclick="{() => document.getElementById('mobile-drawer').checked=false}">News</a></li>
        <li></li>
        <li>
            <a href={github} target="_blank" class="flex items-center gap-2">
                <SiGithub class="w-4 h-4" /> GitHub
            </a>
        </li>
        <li>
            <a href={discord} target="_blank" class="flex items-center gap-2">
                <SiDiscord class="w-4 h-4" /> Discord
            </a>
        </li>
    </ul>
</div>
