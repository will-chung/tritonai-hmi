<script>
  import SetButton from "./SetButton.svelte";
  import CarSelector from "./CarSelector.svelte";
  import ModeSelector from "./ModeSelector.svelte";
</script>

<div id="controls">
  <CarSelector/>
  <ModeSelector/>
</div>

<style>
  #controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-grow: 1;
    width: 20%;
    height: 100%;
    padding: 15px
  }
</style>
