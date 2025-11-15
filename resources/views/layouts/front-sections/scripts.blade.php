<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
<script>
    $(document).ready(function () {
        const menu = $("#social-networks");
        const modal = $("#social-modal");

        // OPEN MENU (with animation)
        $(document).on("click", "[data-target]", function (e) {
            e.preventDefault();

            if (window.innerWidth < 960) return;

            $("body").css({ background: "#F2F2F2" });

            // First show the menu wrapper
            menu.removeClass("hidden");

            // Trigger animation after a tiny delay (lets CSS apply)
            setTimeout(() => {
                modal.removeClass("translate-y-10 opacity-0");
            }, 10);
        });

        // CLOSE WHEN CLICKING BACKDROP
        $(document).on("click", "#social-backdrop", function () {

            $("body").css({ background: "" });

            // Animate modal down + fade out
            modal.addClass("translate-y-10 opacity-0");

            // Wait for animation to finish
            setTimeout(() => {
                menu.addClass("hidden");
            }, 300);
        });

        // CLOSE WHEN SCREEN < 960px
        $(window).on("resize", function () {
            if (window.innerWidth < 960) {
                $("body").css({ background: "" });

                modal.addClass("translate-y-10 opacity-0");

                setTimeout(() => {
                    menu.addClass("hidden");
                }, 300);
            }
        });

        const $nav = $("#main-nav");

        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 10) {
                // Navbar shrink styles
                $nav.css({
                    "justify-content": "center",
                    "gap": "2rem",
                    "width": "fit-content",
                    "margin": "2rem auto"
                });
            } else {
                // Navbar original styles
                $nav.css({
                    "justify-content": "space-between",
                    "gap": "0",
                    "width": "auto",
                    "margin": "2rem"
                });
            }
        });
    });
</script>