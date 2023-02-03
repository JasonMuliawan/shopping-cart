import starry from './assets/starry-night.jpeg'
import painting from './assets/painting.jpeg'
import rosy from './assets/rosy.jpeg'
import irises from './assets/irises.jpeg'
import almond from './assets/almond.jpeg'
const FakeItem = () => (
    [
        { id: 0,
          title: "Starry Night",
          img: starry,
          description: "High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.",
          price: 79.95,
        },
        { id:1, 
          title: "Magazine subscription",
          img: painting,
          description : "Subscribe to our painter's magazine. You can opt-in for a weekly or monthly subscription.",
          price: 20.00,
        },
        { id:2,
          title : "Rosy-Fingered Dawn at Louse Point",
          img: rosy,
          description: "The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island.",
          price: 49.95,
        },
        {
          id:3,
          title: "Irises",
          img: irises,
          description: "Irises is yet again, another painting by the Dutch artist Vincent van Gogh.",
          price: 65.95,
        },
        {
          id:4,
          title: "Branches with Almond Blossom",
          img: almond,
          description : "Branches with Almond Blossom is another van Gogh painted in 1890.",
          price: 99.95,
        }
      ]
)
export default FakeItem;