<script>
  import { carMode } from "$lib/stores.js";
  import Mode from "$lib/components/Mode.svelte";
  import SetButton from "$lib/components/SetButton.svelte";

  let selector;
  let set = false;
  let modeDisabled = false;
  let setDisabled = false;

  let modes1 = ['TEST', 'ATTACK'];
  let modes2 = ['QUALIFY', 'DEFEND'];

  // code to communicate selected mode to connected car can be placed here
  // currently selected mode can be accessed with `$carMode`
  $: if (set) modeDisabled = true;
  else if (selector) modeDisabled = false; 

  $: if ($carMode === '') setDisabled = true;
  else setDisabled = false;
</script>

<div id="selector" bind:this={selector}>
  <div id="column1">
    {#each modes1 as mode}
      <Mode mode="{mode}" bind:disabled={modeDisabled}/>
    {/each}
  </div>
  <div id="column2">
    {#each modes2 as mode}
      <Mode mode="{mode}" bind:disabled={modeDisabled}/>
    {/each}
  </div>

  <SetButton text="SELECT MODE" bind:set={set} bind:disabled={setDisabled}/>
</div>

<style>
  #selector {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    gap: 10px;
  }

  #column1, #column2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
</style>