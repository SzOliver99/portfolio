<script>
    import src from '$lib/images/rust-logo.png';
</script>

<picture>
    <source srcset={src} type="image/png" />
    <img {src} alt="Logo" />
</picture>

<style>
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    picture {
        animation: fadeIn 2.5s;
    }
</style>