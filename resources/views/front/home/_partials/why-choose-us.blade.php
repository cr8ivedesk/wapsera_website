@php
    $points = [
        "Easy Booking",
        "On-Time Delivery Rate Improvement",
        "Advanced Technology",
        "Fleet Expansion and Modernization"
    ];
@endphp

<section class="md:my-28 my-16 container grid lg:grid-cols-2 xl:gap-12 gap-8 items-center">
    <img src="/assets/images/home-page/why-choose-us.png"
        class="w-[32rem] m-[0_auto] lg:order-1 order-2" />

    <div class="lg:order-2 order-1 lg:text-start text-center">
        <h6 class="text-secondary">Why Choose Us</h6>
        <h2 class="mb-3">Unleash the Full Potential of Your Startup Business.</h2>
        <p class="text-sm mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>

        <div class="grid md:grid-cols-2 grid-cols-1 md:gap-y-4 gap-y-2 my-8 !text-start">
            @foreach ($points as $point)
                <div class="flex gap-2 items-center">
                    <img src="/assets/images/home-page/green-rounded-tick.svg"
                        class="h-4 mt-2" />

                    <h6 class="font-bold">{{ $point }}</h6>
                </div>
            @endforeach
        </div>

        <button class="button-primary relative !pr-12 justify-start lg:m-0 m-[0_auto]">
            <span>Discover More</span>
            <img src="/assets/images/svg-icons/arrow-up-right.svg" alt=""
                class="absolute right-2" />
        </button>
    </div>
</section>