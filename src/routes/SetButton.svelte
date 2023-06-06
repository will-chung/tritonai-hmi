<script>
  export let text;
  export let set;
  export let disabled;
  
  let selected = false;
  $: boxShadow = selected ? '0 0 10px 5px #42be65' : 'none';
  $: color = selected ? '#42be65' : 'black'

  function select() {
    selected = !selected;
    set = !set;
  }
</script>

<div id="set">
  <div id="btnOutline">
    <button style:box-shadow="{boxShadow}" 
            style:color="{color}"
            disabled="{disabled}"
            on:click={select}>
      {text}
    </button>
  </div>
</div>

<style>
  #set {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    gap: 10px;
  }

  #btnOutline {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    min-height: 90px;
    border-radius: 100%;
    background-color: #262626;
    box-shadow: 0 0 0 2px black; 
  }

  button {
    width: 80px;
    height: 80px;
    padding: 0;
    font-size: 12pt;
    background-color: #f4f4f4;
    border: none;
    border-radius: 100%;
  }

  button:hover {
    cursor: pointer;
  }
</style>