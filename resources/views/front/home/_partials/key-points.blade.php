@php
    $points = [
        [
            'title' => 'Simplify',
            'subtitle' => 'your workflow',
            'icon_url' => '/assets/images/svg-icons/dart.svg',
        ],
        [
            'title' => 'Customize',
            'subtitle' => 'your social media posts',
            'icon_url' => '/assets/images/svg-icons/edit-pen.svg',
        ],
        [
            'title' => 'Automate',
            'subtitle' => 'your social media posts',
            'icon_url' => '/assets/images/svg-icons/calendar.svg',
        ],
    ];
@endphp

<section class="container">
    <div class="md:mt-28 mt-16">
        <h3 class="lg:w-[40%] m-[0_auto] text-secondary text-center mb-2">More time for essentials via social media automation</h3>
        <p class="lg:w-[60%] m-[0_auto] text-center">Stop letting social media management drain your time. With WapSera, manage all your platforms from one place, automate your posts, and focus on what really matters growing your brand.</p>

        <div class="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 md:gap-12 sm:gap-8 gap-6 mt-8 xl:w-[75%] m-[0_auto]">
            @foreach ($points as $point)
                <div class="flex xs:flex-row flex-col items-center gap-4">
                    <div>
                        <img src="{{ $point['icon_url'] }}" alt="" class="h-16 p-4 bg-primary rounded-[1rem]" />
                    </div>

                    <div class="xs:text-start text-center">
                        <h5>{{ $point['title'] }}</h5>
                        <p>{{ $point['subtitle'] }}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>