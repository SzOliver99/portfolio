<script>
    export let activeIndex;
</script>

<div class="slider" style="transform: translateY({activeIndex * 40}px);"></div>

<style>
    .slider {
        position: absolute;
        background-color: #202327;
        border-radius: 5px;
        top: -10px;
        transition: transform 0.3s ease;
        height: 40px;
        width: 100%;
        opacity: 0.3;
        background-color: #fff;
        box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, .1);
        z-index: -1;
    }
</style>