// Character Object
const character = {
  name: "Swamp Beast Diplomat",
  class: "Warrior",
  level: 5,
  health: 100,
  image: "https://byui-wdd.github.io/wdd131/ponder/images/swampbeast.png",

  attacked() {
    if (this.health > 0) {
      this.health -= 20;
      if (this.health <= 0) {
        this.health = 0;
        alert(`${this.name} has died!`);
      }
      updateDisplay();
    }
  },

  levelUp() {
    this.level += 1;
    updateDisplay();
  }
};

// Update UI
function updateDisplay() {
  document.getElementById("level").textContent = character.level;
  document.getElementById("health").textContent = character.health;
}

// Button Event Listeners
document.getElementById("attackBtn").addEventListener("click", () => {
  character.attacked();
});

document.getElementById("levelUpBtn").addEventListener("click", () => {
  character.levelUp();
});
