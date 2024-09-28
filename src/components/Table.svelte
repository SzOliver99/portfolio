<script>
    export let list;
</script>

<table class="w-full text-left">
    <tbody>
        {#each Object.entries(list) as [_, project]}
            <tr>
                <td class="pb-1">{project.project_name}</td>
                <td class="pb-1 text-right pr-3"><a href="{project.link_url}">project preview</a></td>
                <td class="pb-1">{project.created_at}</td>
            </tr>
            {#if _ != list.length - 1}
                <td colspan="3" class="w-full bg-[#7a7c85]"></td>
            {/if}
        {/each}
    </tbody>
</table>

<style>
</style>