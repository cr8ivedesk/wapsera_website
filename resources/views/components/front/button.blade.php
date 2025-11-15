<button class="btn-primary group relative overflow-hidden rounded-full bg-primary text-secondary 
    xl:text-base text-sm font-semibold xl:py-3 py-2 xl:px-6 px-4 flex items-center gap-2 {{ $class ?? '' }}"
>
    {!! $text !!}

    <img src="{{ $icon }}" 
        class="relative z-10 xl:w-6 w-5 xl:h-6 h-5 bg-secondary rounded-full xl:p-[6px] p-[4px] 
            transition-transform duration-300 group-hover:translate-x-1 {{ $iconClass ?? '' }}"
    />
</button>
