<script>
  import { carMode } from '$lib/stores.js';

  export let mode;
  export let disabled;

  let backgroundColor;

  switch (mode) {
    case 'TEST':
      backgroundColor = 'white';
      break;
    case 'QUALIFY':
      backgroundColor = '#24a148';
      break;
    case 'ATTACK':
      backgroundColor = '#fa4d56';
      break;
    case 'DEFEND':
      backgroundColor = '#4589ff';
      break;
  }

  $: boxShadow = ($carMode === mode) ? `0 0 10px 5px ${backgroundColor}` : 'none';

  function select() {
    if (mode === $carMode) $carMode = '';
    else $carMode = mode;
  }
</script>

<div id="mode">
  <button style:box-shadow="{boxShadow}" 
          style:background-color="{backgroundColor}"
          disabled="{disabled}"
          on:click="{select}">
    {mode}
  </button>
</div>

<style>
  #mode {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 5px;
    background-color: #262626;
    box-shadow: 0 0 0 2px black;
  }

  button {
    width: 80px;
    height: 80px;
    font-size: 12pt;
    border: none;
    border-radius: 2px;
  }

  button:hover {
    cursor: pointer;
  }
</style>