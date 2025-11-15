@php
    $submenus = [
        [
            "title"         => "Facebook",
            "icon_url"      => "/assets/images/svg-icons/facebook-navbar.svg",
            "description"   => "Plan and publish posts, Reels, and stories to your pages effortlessly.",
        ],
        [
            "title"         => "Instagram",
            "icon_url"      => "/assets/images/svg-icons/insta-navbar.svg",
            "description"   => "Schedule posts, Reels, and carousels to keep your feed active and engaging.",
        ],
        [
            "title"         => "Google Business",
            "icon_url"      => "/assets/images/svg-icons/google-business.svg",
            "description"   => "Keep your business visible with scheduled updates and posts.",
        ],
        [
            "title"         => "Linkedin",
            "icon_url"      => "/assets/images/svg-icons/linkdin-svg.svg",
            "description"   => "Share updates and articles across your profiles and company pages.",
        ],
        [
            "title"         => "Pinterest",
            "icon_url"      => "/assets/images/svg-icons/facebook-navbar.svg",
            "description"   => "Plan and schedule Pins to all your boards with ease.",
        ],
        [
            "title"         => "Tiktok",
            "icon_url"      => "/assets/images/svg-icons/tiktok-navbar.svg",
            "description"   => "Schedule videos and Shorts to grow your TikTok presence automatically.",
        ],
        [
            "title"         => "Twitter / X",
            "icon_url"      => "/assets/images/svg-icons/x-nvabr.svg",
            "description"   => "Plan tweets, retweets, and quote posts to stay active every day.",
        ],
        [
            "title"         => "Youtube",
            "icon_url"      => "/assets/images/svg-icons/yuoutube-navbar.svg",
            "description"   => "Schedule videos and Shorts to all your channels in advance.",
        ],
    ];
@endphp

<header class="fixed w-full left-0 right-0 z-50">
    <nav id="main-nav" class="headerbar xl:py-5 py-6 px-8">
        <div class="absolute top-0 left-0 w-full h-full -z-1 border-t-[1px] border-primary rounded-full"></div>

        <a href="{{ route('home-page') }}">
            <img src="/assets/images/logo.svg" alt="{{ env('APP_NAME') }}" class="h-8 w-full" />
        </a>

        <ul class="lg:flex hidden 2xl:gap-10 xl:gap-8 gap-6 justify-end items-center text-secondary">
            <li>
                <a href="#" class="active">Home</a>
            </li>
            <li>
                <a href="#" data-target="#social-networks">SocialNetworks</a>
            </li>
            <li>
                <a href="#">Features</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Pricing</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
        </ul>

        <div class="lg:block hidden">
            @include('components.front.button', [
                "text" => "<span>Try it for Free</span>",
                "icon" => "/assets/images/svg-icons/arrow-up-right.svg",
            ])
        </div>

        <a href="#" class="lg:hidden block">
            <img src="/assets/images/menu-hamburger.svg" alt="" class="w-6 h-6" />
        </a>
    </nav>
</header>

<div id="social-networks" class="hidden fixed inset-0 z-50">
    <div class="absolute inset-0" id="social-backdrop"></div>

    <div class="container mt-[8.5rem] relative z-10">
        <div id="social-modal"
            class="shadow-[0_4px_9.8px_0_#0000001A] p-8 
            grid xl:grid-cols-4 grid-cols-3 gap-8 bg-white rounded-[20px]
            translate-y-10 opacity-0 transition-all duration-300 ease-out"
        >

            @foreach ($submenus as $submenu)
                <div class="space-y-2">
                    <img src="{{ $submenu['icon_url'] }}" class="h-8" />
                    <h6 class="font-semibold">{{ $submenu['title'] }}</h6>
                    <p class="text-sm">{{ $submenu['description'] }}</p>
                </div>
            @endforeach
        </div>
    </div>
</div>
