@extends('layouts.front')

@section('content')
    {{-- Hero Section --}}
    @include('front.home._partials.hero-section')

    {{-- Key Points --}}
    @include('front.home._partials.key-points')
@endsection