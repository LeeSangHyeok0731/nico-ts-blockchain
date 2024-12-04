type Age = number;
type Name = string;

type Player = {
  name: Name;
  age?: Age;
};

function PlayerMaker(name: string): Player {
  return {
    name,
  };
}

const nico = PlayerMaker("nico");

nico.age = 12;
