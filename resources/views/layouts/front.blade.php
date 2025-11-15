<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    @vite(['resources/css/front.css', 'resources/js/front/app.js'])
</head>

<body class="overflow-x-hidden">
    @include('layouts.front-sections.mouse-circle-animation')

    @include('layouts.front-sections.navbar')

    @yield('content')

    @include('layouts.front-sections.footer')

    @include('layouts.front-sections.scripts')

    @yield('scripts')
</body>

</html>
