export interface racer{
    name: string;
    speed: number;
    drift: number;
    power: number;
    points?: number;
}


export const Mario: racer = {
  name: "Mario",
  speed: 4,
  drift: 3,
  power: 3,
  points: 0,
};

export const Peach: racer = {
  name: "Peach",
  speed: 3,
  drift: 4,
  power: 2,
  points: 0,
};

export const Yoshi: racer = {
  name: "Yoshi",
  speed: 2,
  drift: 4,
  power: 3,
  points: 0,
};

export const Bowser: racer = {
  name: "Bowser",
  speed: 5,
  drift: 2,
  power: 5,
  points: 0,
};

export const Luigi: racer = {
  name: "Luigi",
  speed: 3,
  drift: 4,
  power: 4,
  points: 0,
};

export const DonkeyKong: racer = {
  name: "Donkey Kong",
  speed: 2,
  drift: 2,
  power: 5,
  points: 0,
};
