<script>
  import { date, time } from '$lib/stores.js';

  const timeFormatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

  const dateFormatter = new Intl.DateTimeFormat('en-US')
</script>

<div id="datetime">
  <span class="info" id="time">{timeFormatter.format($time)}</span>
  <span class="info" id="date">{dateFormatter.format($date)}</span>
</div>

<style>
  #datetime {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    position: relative;
    right: 15px;
  }
</style>
