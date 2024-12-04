<script>
  import Table from "../../components/Table.svelte";

  const Projects = [
    {
        project_name: "Website for Libary project with svelte",
        link_url: "https://libri-project.vercel.app",
        created_at: "2024.09.28"
    },
    {
        project_name: "Saveable buttons",
        link_url: "https://szoliver99.github.io/sob02/",
        created_at: "2024.09.11"
    },
    {
        project_name: "Sticky Notes",
        link_url: "https://szoliver99.github.io/sticky_notes/",
        created_at: "2024.09.11"
    },
{
        project_name: "Billiard",
        link_url: "https://szoliver99.github.io/billiard/",
        created_at: "2024.12.04"
    },
  ]
</script>

<svelte:head>
	<title>Projects | Oliver Szvetnyik</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
    <h1>Projects</h1>
    <Table list={Projects}></Table>
</main>

<style>
</style>
