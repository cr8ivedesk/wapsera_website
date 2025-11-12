@php
    $plans = [
        [
            "title" => "Starter Plan",
            "heading" => "For Small Brands",
            "price" => "49",
            "features" => [
                "Up to 3 Campaigns / Month",
                "Creator Database Access",
                "Basic Analytics Dashboard",
                "Email Support",
            ]
        ],
        [
            "title" => "Professional Plan",
            "heading" => "For Large Brands",
            "price" => "149",
            "features" => [
                "Up to 3 Campaigns / Month",
                "Creator Database Access",
                "Basic Analytics Dashboard",
                "Email Support",
            ]
        ],
        [
            "title" => "Enterprise Plan",
            "heading" => "For Enterprise Brands",
            "price" => "Custom",
            "features" => [
                "Up to 3 Campaigns / Month",
                "Creator Database Access",
                "Basic Analytics Dashboard",
                "Email Support",
            ]
        ],
    ];
@endphp

<section class="container my-28">
    <div class="flex items-center justify-between mb-8">
        <div>
            <h6 class="text-secondary">Pricing Plan</h6>
            <h2 class="w-[26rem] text-secondary">Flexible Plans for Every Brand and Creator.</h2>
        </div>

        <div>
            <button class="button-primary relative !pr-12 justify-start">
                <span>Get Started</span>
                <img src="/assets/images/svg-icons/arrow-up-right.svg" alt=""
                    class="absolute right-2" />
            </button>
        </div>
    </div>

    <div class="grid grid-cols-3 gap-12">
        @foreach($plans as $plan)
            <div class="px-6 pb-8 pt-12 shadow-[0_4px_14.3px_4px_rgba(0,0,0,0.06)] bg-white rounded-3xl">
                <h6 class="font-bold">{{ $plan['title'] }}</h6>

                <h4 class="text-secondary font-extrabold">{{ $plan['heading'] }}</h4>

                <h1 class="text-[3.75rem] text-primary font-extrabold my-2">
                    <span class="h4">{{ $plan['price'] != "Custom" ? "$" : "" }}</span>{{ $plan['price'] }}
                </h1>

                <button class="button-secondary relative w-full justify-center">
                    <span>Choose Plan</span>
                    <span class="absolute bg-primary rounded-full right-2 h-4 w-4"></span>
                </button>

                <h6 class="mt-5 mb-2 font-bold">Include:</h6>

                @foreach($plan['features'] as $feature)
                    <div class="flex items-center gap-4 mb-2">
                        <img src="/assets/images/home-page/green-rounded-tick.svg"
                            class="h-4" />
                        <p class="text-sm font-normal">{{ $feature }}</p>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>
</section>