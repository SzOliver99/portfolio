<script>
  import Table from "../../components/Table.svelte";

  const Projects = [
    {
        project_name: "Website for Libary project with svelte",
        link_url: "https://szoliver99.github.io/libri_project/",
        created_at: "2024.09.28"
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