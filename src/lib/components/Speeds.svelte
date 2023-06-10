<script>
  import SpeedSelector from "$lib/components/SpeedSelector.svelte";
</script>

<div id="speeds">
  <SpeedSelector text="GREEN SPEED" right="{true}"/>
  <SpeedSelector text="YELLOW SPEED" right="{true}"/>
  <SpeedSelector text="PIT ROAD SPEED" right="{true}"/>
  <SpeedSelector text="PIT LANE SPEED" right="{false}"/>
</div>

<style>
  #speeds {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    height: 20%;
    width: 100%;
  }
</style>