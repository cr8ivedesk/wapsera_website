@php
    $links = [
        [
            "heading" => "Company",
            "link" => [
                "Home",
                "Social Networks",
                "Features",
                "About Us",
                "Pricing",
                "Contact Us",
            ],
        ],
        [
            "heading" => "Product",
            "link" => [
                "Start Free Trial",
                "Pricing",
                "Plan Details",
                "New Features",
                "Android App",
                "iOS App",
            ],
        ],
        [
            "heading" => "Support",
            "link" => [
                "Contact",
                "Help Center",
                "Training Videos",
                "Cancellation",
                "Terms of Service",
                "Privacy Policy",
            ],
        ],
        [
            "heading" => "Features",
            "link" => [
                "Facebook Scheduler",
                "Instagram Scheduler",
                "Google Business Scheduler",
                "LinkedIn Scheduler",
                "Pinterest Scheduler",
                "TikTok Scheduler",
                "Twitter/X Scheduler",
                "Youtube Scheduler",
            ],
        ],
    ];

    $socialImages = [
        "facebook.svg", "insta.svg", "tiktok.svg"
    ]
@endphp

<div class="bg-secondary rounded-t-[3.75rem]">
    <div class="container grid grid-cols-12 gap-8 py-24 border-b-[1px] border-[#1B1B1B]">
        <div class="col-span-4">
            <img src="/assets/images/white-logo.svg" class="w-60" />

            <div class="flex gap-4 mt-4">
                @foreach ($socialImages as $img)
                    <a href="#">
                        <img src="/assets/images/svg-icons/{{ $img }}" class="w-8 h-8" />
                    </a>
                @endforeach
            </div>
        </div>

        @foreach ($links as $link)
            <div class="col-span-2">
                <h5 class="text-white mb-3">{{ $link['heading'] }}</h5>

                <ul>
                    @foreach ($link['link'] as $lnk)
                        <li class="mb-2">
                            <a href="#" class="text-white">{{ $lnk }}</a>
                        </li>
                    @endforeach
                </ul>
            </div>
        @endforeach
    </div>
    <div class="container py-4">
        <p class="text-center text-white">© {{ date('Y') }} Wapsera.com. All Rights Reserved.</p>
    </div>
</div>