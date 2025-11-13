@php
    $lists = [
        [
            "title" => "Proven Expertise",
            "subtitle" => "There are many variations of passages of Lorem Ipsum available."
        ],
        [
            "title" => "Innovation and Adaptability",
            "subtitle" => "There are many variations of passages of Lorem Ipsum available."
        ],
        [
            "title" => "Comprehensive Services",
            "subtitle" => "There are many variations of passages of Lorem Ipsum available."
        ],
    ];
@endphp

<section class="md:my-28 my-16 bg-secondary py-24 rounded-[3.75rem] relative">
    <div class="bg-[rgba(176,252,66,0.6)] blur-[250px] absolute h-[23rem] w-[23rem] rounded-full -left-[12rem]"></div>

    <div class="container grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-8 items-center">
        <div class="lg:text-start text-center">
            <h6 class="text-primary">Pricing Plan</h6>
            <h2 class="text-white md:w-[30rem] lg:m-0 m-[0_auto]">Let’s Make Something Awesome Together</h2>
            <p class="text-white mt-3 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>

            @foreach ($lists as $list)
                <div class="flex items-start gap-2 mb-5 !text-start">
                    <img src="/assets/images/home-page/green-rounded-tick.svg"
                        class="h-4 mt-2" />

                    <div>
                        <h5 class="text-white">{{ $list['title'] }}</h5>
                        <p class="text-sm text-white font-normal">{{ $list['subtitle'] }}</p>
                    </div>
                </div>
            @endforeach

            <button class="button-primary relative !pr-12 justify-start lg:m-0 m-[0_auto]">
                <span>Discover More</span>
                <img src="/assets/images/svg-icons/arrow-up-right.svg" alt=""
                    class="absolute right-2" />
            </button>
        </div>

        <img src="/assets/images/home-page/1e038c92e20cbf91fbda2d4c462957309ae4b289.png"
            class="w-[32rem] lg:m-0 m-[0_auto]" />
    </div>
</section>