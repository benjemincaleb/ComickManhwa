const traits = {
    personality: ["Brave", "Kind-hearted", "Clever", "Sarcastic", "Optimistic", "Introverted", "Adventurous", "Loyal"],
    background: ["Noble birth", "Street urchin", "Merchant's child", "Orphan", "Ex-soldier", "Scholar", "Criminal", "Peasant"],
    skills: ["Sword fighting", "Magic casting", "Lockpicking", "Healing", "Stealth", "Cooking", "Horseback riding", "Negotiation"],
    quirks: ["Fear of spiders", "Always tells jokes", "Collects strange items", "Never sleeps indoors", "Afraid of heights", "Talks to animals", "Obsessed with cleanliness"]
  };
  
  const generateTraits = () => {
    const traitCategories = Object.keys(traits);
    let generatedTraits = '';
    traitCategories.forEach(category => {
      const randomTrait = traits[category][Math.floor(Math.random() * traits[category].length)];
      generatedTraits += `<p><strong>${category}:</strong> ${randomTrait}</p>`;
    });
    document.getElementById('traits-container').innerHTML = generatedTraits;
  };
  
  document.getElementById('generate-btn').addEventListener('click', generateTraits);

  
  
















  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomShapes() {
    const numShapes = 50; // Number of shapes you want
    const body = document.querySelector('body');

    for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('random-shape');

        // Random size between 20px and 200px
        const size = getRandomNumber(20, 200);
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';

        // Random position in the viewport
        const posX = getRandomNumber(0, window.innerWidth);
        const posY = getRandomNumber(0, window.innerHeight);
        shape.style.left = posX + 'px';
        shape.style.top = posY + 'px';

        // Random shape type class
        const shapeTypes = ['circle', 'square', 'triangle']; // Available shape types
        const randomShapeType = shapeTypes[getRandomNumber(0, shapeTypes.length)];
        shape.classList.add(randomShapeType); // Add the random shape type class

        body.appendChild(shape);
    }
}

// Generate random shapes when the page loads
window.addEventListener('load', generateRandomShapes);
