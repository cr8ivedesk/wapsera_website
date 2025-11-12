@php
    $points = [
        "Easy Booking",
        "On-Time Delivery Rate Improvement",
        "Advanced Technology",
        "Fleet Expansion and Modernization"
    ];
@endphp
<section class="my-28 container grid grid-cols-2 gap-12 items-center">
    <img src="/assets/images/home-page/why-choose-us.png"
        class="w-[32rem] m-[0_auto]" />

    <div>
        <h6 class="text-secondary">Why Choose Us</h6>
        <h2 class="mb-3">Unleash the Full Potential of Your Startup Business.</h2>
        <p class="text-sm mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>

        <div class="grid grid-cols-2 gap-y-4 my-8">
            @foreach ($points as $point)
                <div class="flex gap-2 items-center">
                    <img src="/assets/images/home-page/green-rounded-tick.svg"
                        class="h-4 mt-2" />

                    <h6 class="font-bold">{{ $point }}</h6>
                </div>
            @endforeach
        </div>

        <button class="button-primary relative !pr-12 justify-start">
            <span>Discover More</span>
            <img src="/assets/images/svg-icons/arrow-up-right.svg" alt=""
                class="absolute right-2" />
        </button>
    </div>
</section>