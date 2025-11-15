@php
    $highLights = [
        [
            "subtitle" => "Social media management",
            "title" => "Save time, stay consistent, and boost results with automated social media management.",
            "description" => "Save time and reduce the stress of managing multiple platforms. Stay consistent with your posts and maintain a strong online presence. Automate your social media workflow with WapSera and focus on growing your brand.",
            "image" => "/assets/images/home-page/e8dc4041fad8e2dbf7454ed124b4e841c5237700.png",
            "bgColor" => "#FFFCF4",
        ],
        [
            "subtitle" => "Content planning",
            "title" => "Manage all your platforms efficiently and optimize your content for maximum impact.",
            "description" => "Take full control of your social media presence across all platforms. Plan, schedule, and optimize your content to reach the right audience. With WapSera, your posts work smarter, engage more, and deliver maximum impact.",
            "image" => "/assets/images/home-page/3f712db61e85dc310e305f556b4b8f888f3a768e.png",
            "bgColor" => "#F5FFF2",
        ],
    ]
@endphp
<section class="container">
    <div class="grid lg:grid-cols-2 grid-cols-1 flex-row-reverse xs:gap-12 gap-8 xl:px-20 md:px-12 px-6 
        xl:py-24 md:py-16 xs:py-12 py-6 bg-[#F9F6FF] rounded-[2rem] md:mt-28 mt-16 mb-6 relative"
    >
        <img src="/assets/images/home-page/3-rectangle.svg" alt=""
            class="absolute xl:top-[3.75rem] lg:top-8 md:top-80 sm:top-[22rem] top-[24rem] 
                xl:left-14 md:left-8 left-4 xl:h-[5.5rem] sm:h-20 h-16 xs:block hidden" />

        <img src="/assets/images/home-page/double-lined-dots.svg" alt=""
            class="absolute xl:top-[3.75rem] top-10 xl:right-24 right-10 h-4 xs:block hidden" />

        <img src="/assets/images/home-page/curled-lines.svg" 
            class="absolute xl:bottom-20 lg:bottom-8 lg:top-auto md:top-[17rem] sm:top-80 
                top-[22rem] xl:right-8 right-6 xl:h-14 h-10 xs:block hidden" />

        <img src="/assets/images/home-page/intersect-cirecle.svg" 
            class="absolute xl:bottom-[1.75rem] bottom-2 xl:left-48 left-36 xl:h-14 md:h-12 h-8 xs:block hidden" />

        <div class="lg:order-1 order-2 relative bg-[#ee7c57] md:px-8 xs:px-6 px-4 md:py-6 py-4 rounded-3xl">
            <img
                src="/assets/images/home-page/social-media-management.png" alt=""
                class="w-full lg:h-72 rounded-3xl" />
        </div>

        <div class="lg:order-2 order-1 flex flex-col justify-center lg:text-start text-center">
            <div class="mb-4">
                <span class="title-tag">Social media management</span>
            </div>

            <h4 class="text-secondary mb-4">
                A powerful and flexible social media tool built to adapt to your goals, your platforms, and your way of working.
            </h4>

            <p class="mb-4">
                Plan your posts, automate your workflow, and keep every channel active. Stay consistent across platforms without the stress of manual posting. WapSera keeps you organized while your content works for you.
            </p>

            <div>
                <button class="button-primary lg:m-0 m-[0_auto]">
                    <span>Learn More</span>
                    <img src="/assets/images/svg-icons/arrow-up-right.svg" alt="" />
                </button>
            </div>
        </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
        @foreach ($highLights as $highLight)
            <div
                class="lg:px-8 px-6 lg:pb-10 pb-8 lg:pt-20 pt-16 rounded-[2rem] relative lg:text-start text-center" 
                style="background: {{ $highLight['bgColor'] }};"
            >
                <img src="/assets/images/home-page/semi-circle.svg"
                    class="absolute bottom-80 left-8 h-10 xl:block hidden" />

                <img src="/assets/images/home-page/3-semicircle.svg"
                    class="absolute bottom-32 left-8 h-8 xl:block hidden" />

                <span class="title-tag">{{ $highLight['subtitle'] }}</span>

                <h4 class="text-secondary my-4">{{ $highLight['title'] }}</h4>

                <p class="mb-4 text-sm">{{ $highLight['description'] }}</p>

                <div>
                    <button class="button-primary lg:m-0 m-[0_auto]">
                        <span>Learn More</span>
                        <img src="/assets/images/svg-icons/arrow-up-right.svg" alt="" />
                    </button>
                </div>

                <div class="w-100 flex justify-center xl:mt-14 mt-10">
                    <img src="{{ $highLight['image'] }}" class="lg:h-72 sm:h-64 sm:rounded-[2rem] rounded-3xl" />
                </div>
            </div>
        @endforeach
    </div>
</section>