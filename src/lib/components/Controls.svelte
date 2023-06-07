<script>
  import SetButton from "$lib/components/SetButton.svelte";
  import CarSelector from "$lib/components/CarSelector.svelte";
  import ModeSelector from "$lib/components/ModeSelector.svelte";
</script>

<div id="controls">
  <CarSelector/>
  <ModeSelector/>
</div>

<style>
  #controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    flex-grow: 1;
    width: 20%;
    height: 100%;
    padding: 15px
  }
</style>
