<script>
    const Projects = [
        {
            project_name: "First Project",
            link_url: "https://google.com",
            created_at: "2024.09.11"
        },
        {
            project_name: "First Project",
            link_url: "https://google.com",
            created_at: "2024.09.11"
        },
        {
            project_name: "First Project",
            link_url: "https://google.com",
            created_at: "2024.09.11"
        },
    ]
</script>

<table>
    <tbody>
        {#each Object.entries(Projects) as [_, project]}
            <tr>
                <td>{project.project_name}</td>
                <td><a href="{project.link_url}">project preview</a></td>
                <td>{project.created_at}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        text-align: left;
    }

    td {
        padding-bottom: 5px;
    }

    td:nth-child(2) {
        text-align: right;
        padding-right: 10px;
    }
</style>