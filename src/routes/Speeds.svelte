<script>
  import SetButton from "./SetButton.svelte";
  import SpeedSelector from "./SpeedSelector.svelte";
</script>

<div id="speeds">
  <SpeedSelector text="GREEN SPEED"/>
  <SpeedSelector text="YELLOW SPEED"/>
  <SpeedSelector text="PIT ROAD SPEED"/>
  <SpeedSelector text="PIT LANE SPEED"/>
</div>

<style>
  #speeds {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    height: 22%;
    width: 100%;
  }
</style>