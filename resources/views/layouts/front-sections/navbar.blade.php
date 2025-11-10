<nav class="container my-8 py-5 px-8">
    <div class="flex justify-between items-center">
        <a href="{{ route('home-page') }}">
            <img src="/assets/images/logo.svg" alt="{{ env('APP_NAME') }}" class="h-8 w-full" />
        </a>

        <ul>
            <li>
                <a href="#" class="active">Home</a>
            </li>
            <li>
                <a href="#">SocialNetworks</a>
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

        <button class="button-primary">
            <span>Try it for Free</span>
            <img src="/assets/images/svg-icons/arrow-up-right.svg" alt="" />
        </button>
    </div>
</nav>