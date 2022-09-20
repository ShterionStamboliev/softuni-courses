function hero() {
      const spellCast = hero => ({
        cast: spell => {
            console.log(`${hero.name} cast ${spell}`);
            hero.mana--;
        }
      });

      const fights = hero => ({
        fight: () => {
            console.log(`${hero.name} slashes at the foe!`);
            hero.stamina--;
        }
      });

      const mage = name => {
        let hero = {
            name,
            health: 100,
            mana: 100,
        }
        return Object.assign(hero, spellCast(hero));
      };

      const fighter = name => {
        let hero = {
            name,
            health: 100,
            stamina: 100
        }
        return Object.assign(hero, fights(hero));
      };
      return {
        mage: mage, 
        fighter: fighter
    }
}

/*
function hero() {
  return {
    fighter (name) {
      const fightState = {
        name,
        health: 100,
        stamina: 100
      };
      fightState.fight = () => {
        fightState.stamina--;
        console.log(`${fightState.name} slashes at the foe!`);
      };
      return fightState;
    },

      mage(name) {
        const mageState = {
          name,
          health: 100,
          mana: 100
        };
        mageState.cast = (spellName) => {
          mageState.mana--;
          console.log(`${mageState.name} cast ${spellName}`);
        };
        return mageState;
      }
  }
}
*/
let create = hero();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
