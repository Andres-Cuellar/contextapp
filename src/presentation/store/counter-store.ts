import {create} from 'zustand';

export interface CounterState {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
}

export const useCounterStore = create<CounterState>()(set => ({
  count: 0,

  increment: (value: number) => {
    console.log('value que llega', value);
    set({count: value + 1});
  },

  decrement: (value: number) => {
    console.log('value que llega', value);

    if (value === 0) return;

    set({count: value - 1});
  },
}));
