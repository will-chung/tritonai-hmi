<script>
  import Flag from "./Flag.svelte";

  const flags1 = [
    { color: '#eb6200', label: 'ORANGE' },
    { color: '#198038', label: 'WAVING GREEN' },
    { color: '#878d96', label: 'BLACK' },
    { color: '#fa4d56', label: 'RED' }
  ];

  const flags2 = [
    { color: '#24a148', label: 'GREEN' },
    { color: '#f1c21b', label: 'YELLOW' },
    { color: '#000000', label: 'CHECKER' },
    { color: '#a56eff', label: 'PURPLE' }
  ];
</script>

<div id="flags">
  <div id="column1">
    {#each flags1 as flag}
      <Flag color="{flag.color}" label="{flag.label}" left="{true}"/>
    {/each}
  </div>
  <div id="column2">
    {#each flags2 as flag}
      <Flag color="{flag.color}" label="{flag.label}" left="{false}"/>
    {/each}
  </div>
</div>

<style>
  #flags {
    display: flex;
    flex-grow: 1;
    padding: 10px;
    width: 20%;
    height: 100%;
    gap: 8px;
  }

  #column1, #column2 {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
</style>