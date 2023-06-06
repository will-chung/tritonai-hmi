import { writable, readable } from "svelte/store";

export const carNum = writable({ num: 0, selected: false });
export const carMode = writable('');
export const statusFlag = writable('');

export const date = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 60000);

  return function stop() {
    clearInterval(interval);
  }
});

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});