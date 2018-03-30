//all dictionaries stored here

//stored data for nature modifiers
var natures = {
    "Adamant": {
        "atkNat": 1.1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 0.9,
        "speedNat": 1
    },
    "Bashful": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1

    },
    "Bold": {
        "atkNat": 0.9,
        "defNat": 1.1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Brave": {
        "atkNat": 1.1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 0.9
    },
    "Calm": {
        "atkNat": 0.9,
        "defNat": 1,
        "spDefNat": 1.1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Careful": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1.1,
        "spAtkNat": 0.9,
        "speedNat": 1
    },
    "Docile": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Gentle": {
        "atkNat": 1,
        "defNat": 0.9,
        "spDefNat": 1.1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Hardy": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Hasty": {
        "atkNat": 1,
        "defNat": 0.9,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1.1
    },
    "Impish": {
        "atkNat": 1,
        "defNat": 1.1,
        "spDefNat": 1,
        "spAtkNat": 0.9,
        "speedNat": 1
    },
    "Lax": {
        "atkNat": 1,
        "defNat": 1.1,
        "spDefNat": 0.9,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Lonely": {
        "atkNat": 1.1,
        "defNat": 0.9,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Mild": {
        "atkNat": 1,
        "defNat": 0.9,
        "spDefNat": 1,
        "spAtkNat": 1.1,
        "speedNat": 1
    },
    "Modest": {
        "atkNat": 0.9,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1.1,
        "speedNat": 1
    },
    "Naive": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 0.9,
        "spAtkNat": 1,
        "speedNat": 1.1
    },
    "Naughty": {
        "atkNat": 1.1,
        "defNat": 1,
        "spDefNat": 0.9,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Quiet": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1.1,
        "speedNat": 0.9
    },
    "Quirky": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Rash": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 0.9,
        "spAtkNat": 1.1,
        "speedNat": 1
    },
    "Relaxed": {
        "atkNat": 1,
        "defNat": 1.1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 0.9
    },
    "Sassy": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1.1,
        "spAtkNat": 1,
        "speedNat": 0.9
    },
    "Serious": {
        "atkNat": 1,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1
    },
    "Timid": {
        "atkNat": 0.9,
        "defNat": 1,
        "spDefNat": 1,
        "spAtkNat": 1,
        "speedNat": 1.1
    }
}

//stored data for type effectiveness
var atkTypes = {
    "Normal": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 0.5,
        "Bug": 1,
        "Ghost": 0,
        "Steel": 0.5,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Fighting": {
        "Normal": 2,
        "Fighting": 1,
        "Flying": 0.5,
        "Poison": 0.5,
        "Ground": 1,
        "Rock": 2,
        "Bug": 0.5,
        "Ghost": 0,
        "Steel": 2,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 0.5,
        "Ice": 2,
        "Dragon": 1,
        "Dark": 2,
        "Fairy": 0.5,
        "null": 1
    },
    "Flying": {
        "Normal": 1,
        "Fighting": 2,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 0.5,
        "Bug": 2,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 1,
        "Water": 1,
        "Grass": 2,
        "Electric": 0.5,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Poison": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 0.5,
        "Ground": 0.5,
        "Rock": 0.5,
        "Bug": 1,
        "Ghost": 0.5,
        "Steel": 0,
        "Fire": 1,
        "Water": 1,
        "Grass": 2,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 2,
        "null": 1
    },
    "Ground": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 0,
        "Poison": 2,
        "Ground": 1,
        "Rock": 2,
        "Bug": 0.5,
        "Ghost": 1,
        "Steel": 2,
        "Fire": 2,
        "Water": 1,
        "Grass": 0.5,
        "Electric": 2,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Rock": {
        "Normal": 1,
        "Fighting": 0.5,
        "Flying": 2,
        "Poison": 1,
        "Ground": 0.5,
        "Rock": 1,
        "Bug": 2,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 2,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 2,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1

    },
    "Bug": {
        "Normal": 1,
        "Fighting": 0.5,
        "Flying": 0.5,
        "Poison": 0.5,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 0.5,
        "Steel": 0.5,
        "Fire": 0.5,
        "Water": 1,
        "Grass": 2,
        "Electric": 1,
        "Psychic": 2,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 2,
        "Fairy": 0.5,
        "null": 1
    },
    "Ghost": {
        "Normal": 0,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 2,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 2,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 0.5,
        "Fairy": 1,
        "null": 1
    },
    "Steel": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 2,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 0.5,
        "Water": 0.5,
        "Grass": 1,
        "Electric": 0.5,
        "Psychic": 1,
        "Ice": 2,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 2,
        "null": 1
    },
    "Fire": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Water": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 1,
        "Ground": 2,
        "Rock": 2,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 2,
        "Water": 0.5,
        "Grass": 0.5,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 0.5,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Grass": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 0.5,
        "Poison": 0.5,
        "Ground": 2,
        "Rock": 2,
        "Bug": 0.5,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 0.5,
        "Water": 2,
        "Grass": 0.5,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 0.5,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Electric": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 2,
        "Poison": 1,
        "Ground": 0,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 1,
        "Water": 2,
        "Grass": 0.5,
        "Electric": 0.5,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 0.5,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Psychic": {
        "Normal": 1,
        "Fighting": 2,
        "Flying": 1,
        "Poison": 2,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 0.5,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 0,
        "Fairy": 1,
        "null": 1
    },
    "Ice": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 2,
        "Poison": 1,
        "Ground": 2,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 0.5,
        "Water": 0.5,
        "Grass": 2,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 0.5,
        "Dragon": 2,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Dragon": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 2,
        "Dark": 1,
        "Fairy": 0,
        "null": 1
    },
    "Dark": {
        "Normal": 1,
        "Fighting": 0.5,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 2,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 2,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 0.5,
        "Fairy": 0.5,
        "null": 1
    },
    "Fairy": {
        "Normal": 1,
        "Fighting": 2,
        "Flying": 1,
        "Poison": 0.5,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 0.5,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 2,
        "Dark": 2,
        "Fairy": 1,
        "null": 1
    }
}

//data for defensive type effectiveness
var defTypes = {
    "Normal": {
        "Normal": 1,
        "Fighting": 2,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 0,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Fighting": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 2,
        "Poison": 1,
        "Ground": 1,
        "Rock": 0.5,
        "Bug": 0.5,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 2,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 0.5,
        "Fairy": 2,
        "null": 1
    },
    "Flying": {
        "Normal": 1,
        "Fighting": 0.5,
        "Flying": 1,
        "Poison": 1,
        "Ground": 0,
        "Rock": 2,
        "Bug": 0.5,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 0.5,
        "Electric": 2,
        "Psychic": 1,
        "Ice": 2,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Poison": {
        "Normal": 1,
        "Fighting": 0.5,
        "Flying": 1,
        "Poison": 0.5,
        "Ground": 2,
        "Rock": 1,
        "Bug": 0.5,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 0.5,
        "Electric": 1,
        "Psychic": 2,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 0.5,
        "null": 1
    },
    "Ground": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 0.5,
        "Ground": 1,
        "Rock": 0.5,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 1,
        "Water": 2,
        "Grass": 2,
        "Electric": 0,
        "Psychic": 1,
        "Ice": 2,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Rock": {
        "Normal": 0.5,
        "Fighting": 2,
        "Flying": 0.5,
        "Poison": 0.5,
        "Ground": 2,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 2,
        "Fire": 0.5,
        "Water": 2,
        "Grass": 2,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Bug": {
        "Normal": 1,
        "Fighting": 0.5,
        "Flying": 2,
        "Poison": 1,
        "Ground": 0.5,
        "Rock": 2,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 2,
        "Water": 1,
        "Grass": 0.5,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Ghost": {
        "Normal": 0,
        "Fighting": 0,
        "Flying": 1,
        "Poison": 0.5,
        "Ground": 1,
        "Rock": 1,
        "Bug": 0.5,
        "Ghost": 2,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 2,
        "Fairy": 1,
        "null": 1
    },
    "Steel": {
        "Normal": 0.5,
        "Fighting": 2,
        "Flying": 0.5,
        "Poison": 0,
        "Ground": 2,
        "Rock": 0.5,
        "Bug": 0.5,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 2,
        "Water": 1,
        "Grass": 0.5,
        "Electric": 1,
        "Psychic": 0.5,
        "Ice": 0.5,
        "Dragon": 0.5,
        "Dark": 1,
        "Fairy": 0.5,
        "null": 1
    },
    "Fire": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 1,
        "Ground": 2,
        "Rock": 2,
        "Bug": 0.5,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 0.5,
        "Water": 2,
        "Grass": 0.5,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 0.5,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 0.5,
        "null": 1
    },
    "Water": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 0.5,
        "Water": 0.5,
        "Grass": 2,
        "Electric": 2,
        "Psychic": 1,
        "Ice": 0.5,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Grass": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 2,
        "Poison": 2,
        "Ground": 0.5,
        "Rock": 1,
        "Bug": 2,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 2,
        "Water": 0.5,
        "Grass": 0.5,
        "Electric": 0.5,
        "Psychic": 1,
        "Ice": 2,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Electric": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 0.5,
        "Poison": 1,
        "Ground": 2,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 0.5,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 0.5,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Psychic": {
        "Normal": 1,
        "Fighting": 0.5,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 1,
        "Bug": 2,
        "Ghost": 2,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 0.5,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 2,
        "Fairy": 1,
        "null": 1
    },
    "Ice": {
        "Normal": 1,
        "Fighting": 2,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 2,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 2,
        "Fire": 2,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 0.5,
        "Dragon": 1,
        "Dark": 1,
        "Fairy": 1,
        "null": 1
    },
    "Dragon": {
        "Normal": 1,
        "Fighting": 1,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 1,
        "Bug": 1,
        "Ghost": 1,
        "Steel": 1,
        "Fire": 0.5,
        "Water": 0.5,
        "Grass": 0.5,
        "Electric": 0.5,
        "Psychic": 1,
        "Ice": 2,
        "Dragon": 2,
        "Dark": 1,
        "Fairy": 2,
        "null": 1
    },
    "Dark": {
        "Normal": 1,
        "Fighting": 2,
        "Flying": 1,
        "Poison": 1,
        "Ground": 1,
        "Rock": 1,
        "Bug": 2,
        "Ghost": 0.5,
        "Steel": 1,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 0,
        "Ice": 1,
        "Dragon": 1,
        "Dark": 0.5,
        "Fairy": 2,
        "null": 1
    },
    "Fairy": {
        "Normal": 1,
        "Fighting": 0.5,
        "Flying": 1,
        "Poison": 2,
        "Ground": 1,
        "Rock": 1,
        "Bug": 0.5,
        "Ghost": 1,
        "Steel": 2,
        "Fire": 1,
        "Water": 1,
        "Grass": 1,
        "Electric": 1,
        "Psychic": 1,
        "Ice": 1,
        "Dragon": 0,
        "Dark": 0.5,
        "Fairy": 1,
        "null": 1
    }
}

//stored data for berries
var berries = [{
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "fire",
        "name": "cheri",
        "effect": "A berry to be consumed by a Mon. If a Mon holds one, it can recover from paralysis on its own in battle.",
        "max_harvest": 5,
        "soil_dryness": 15,
        "smoothness": 25,
        "firmness": "soft",
        "growth_time": 3,
        "id": 1,
        "size": 20
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 10,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "water",
        "name": "chesto",
        "effect": "A berry to be consumed by a Mon. If a Mon holds one, it can recover from sleep on its own in battle",
        "max_harvest": 5,
        "soil_dryness": 15,
        "smoothness": 25,
        "firmness": "super-hard",
        "growth_time": 3,
        "id": 2,
        "size": 80
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 10,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "electric",
        "name": "pecha",
        "effect": "A berry to be consumed by a Mon. If a Mon holds one, it can recover from poison on its own in battle",
        "max_harvest": 5,
        "soil_dryness": 15,
        "smoothness": 25,
        "firmness": "very-soft",
        "growth_time": 3,
        "id": 3,
        "size": 40
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 0,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "grass",
        "name": "rawst",
        "effect": "A berry to be consumed by a Mon. If a Mon holds one, it can recover from a burn on its own",
        "max_harvest": 5,
        "soil_dryness": 15,
        "smoothness": 25,
        "firmness": "hard",
        "growth_time": 3,
        "id": 4,
        "size": 32
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 0,
            "bitter": 0,
            "sour": 10,
        },
        "natural_gift_type": "ice",
        "name": "aspear",
        "effect": "A berry to be consumed by a Mon. If a Mon holds one, it can recover from being frozen on its own in battle",
        "max_harvest": 5,
        "soil_dryness": 15,
        "smoothness": 25,
        "firmness": "super-hard",
        "growth_time": 3,
        "id": 5,
        "size": 50
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 10,
            "bitter": 10,
            "sour": 10,
        },
        "natural_gift_type": "fighting",
        "name": "leppa",
        "effect": "A berry to be consumed by a Mon. If a Mon holds one, it can restore 10 PP to a depleted move during battle",
        "max_harvest": 5,
        "soil_dryness": 15,
        "smoothness": 20,
        "firmness": "very-hard",
        "growth_time": 4,
        "id": 6,
        "size": 28
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 10,
            "dry": 10,
            "sweet": 0,
            "bitter": 10,
            "sour": 10,
        },
        "natural_gift_type": "poison",
        "name": "oran",
        "effect": "A berry to be consumed by a Mon. If a Mon holds one, it can restore its own HP by 10 points during battle",
        "max_harvest": 5,
        "soil_dryness": 15,
        "smoothness": 20,
        "firmness": "super-hard",
        "growth_time": 4,
        "id": 7,
        "size": 35
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 10,
            "dry": 10,
            "sweet": 10,
            "bitter": 0,
            "sour": 10,
        },
        "natural_gift_type": "ground",
        "name": "persim",
        "effect": "A berry to be held by a Mon. If a Mon holds one, it can recover from confusion on its own in battle",
        "max_harvest": 5,
        "soil_dryness": 15,
        "smoothness": 20,
        "firmness": "hard",
        "growth_time": 4,
        "id": 8,
        "size": 47
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 10,
            "dry": 10,
            "sweet": 10,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "flying",
        "name": "lum",
        "effect": "A berry to be consumed by Mon. If a Mon holds one, it can recover from any condition during battle",
        "max_harvest": 5,
        "soil_dryness": 8,
        "smoothness": 20,
        "firmness": "super-hard",
        "growth_time": 12,
        "id": 9,
        "size": 34
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 10,
            "sweet": 10,
            "bitter": 10,
            "sour": 10,
        },
        "natural_gift_type": "psychic",
        "name": "sitrus",
        "effect": "A berry to be consumed by Mon. If a Mon holds one, it can restore its own HP by a small amount during battle",
        "max_harvest": 5,
        "soil_dryness": 7,
        "smoothness": 20,
        "firmness": "very-hard",
        "growth_time": 8,
        "id": 10,
        "size": 95
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 15,
            "dry": 0,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "bug",
        "name": "figy",
        "effect": "If held by a Mon, it restpres the user's HP in a pinch, but it will cause confusion if the user hates the taste",
        "max_harvest": 5,
        "soil_dryness": 10,
        "smoothness": 25,
        "firmness": "soft",
        "growth_time": 5,
        "id": 11,
        "size": 100
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 15,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "rock",
        "name": "wiki",
        "effect": "If held by a Mon, it restpres the user's HP in a pinch, but it will cause confusion if the user hates the taste",
        "max_harvest": 5,
        "soil_dryness": 10,
        "smoothness": 25,
        "firmness": "hard",
        "growth_time": 5,
        "id": 12,
        "size": 115
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 15,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "ghost",
        "name": "mago",
        "effect": "If held by a Mon, it restores the user's HP in a pinch, but it will cause confusion if the user hates the taste",
        "max_harvest": 5,
        "soil_dryness": 10,
        "smoothness": 25,
        "firmness": "hard",
        "growth_time": 5,
        "id": 13,
        "size": 126
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 0,
            "bitter": 15,
            "sour": 0,
        },
        "natural_gift_type": "dragon",
        "name": "aguav",
        "effect": "If held by a Mon, it restores the user's HP in a pinch, but it will cause confusion if the user hates the taste",
        "max_harvest": 5,
        "soil_dryness": 10,
        "smoothness": 25,
        "firmness": "super-hard",
        "growth_time": 5,
        "id": 14,
        "size": 64
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 0,
            "bitter": 0,
            "sour": 15,
        },
        "natural_gift_type": "dark",
        "name": "iapapa",
        "effect": "If held by a Mon, it restores the user's HP in a pinch, it will cause confusion if the user hates the taste",
        "max_harvest": 5,
        "soil_dryness": 10,
        "smoothness": 25,
        "firmness": "soft",
        "growth_time": 5,
        "id": 15,
        "size": 223
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 10,
            "dry": 10,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "steel",
        "name": "razz",
        "effect": "A berry to be used in cooking. This berry is very rare and hard to obtain in certain regions",
        "max_harvest": 10,
        "soil_dryness": 35,
        "smoothness": 20,
        "firmness": "very-hard",
        "growth_time": 2,
        "id": 16,
        "size": 120
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 0,
            "dry": 10,
            "sweet": 10,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "fire",
        "name": "bluk",
        "effect": "A berry to be used in cooking. This berry is very rare and hard to obtain in certain regions",
        "max_harvest": 10,
        "soil_dryness": 35,
        "smoothness": 20,
        "firmness": "soft",
        "growth_time": 2,
        "id": 17,
        "size": 108
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 10,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "water",
        "name": "nanab",
        "effect": "A berry to be used in cooking. This berry is very rare and hard to obtain in certain regions",
        "max_harvest": 10,
        "soil_dryness": 35,
        "smoothness": 20,
        "firmness": "very-hard",
        "growth_time": 2,
        "id": 18,
        "size": 77
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 0,
            "bitter": 10,
            "sour": 10,
        },
        "natural_gift_type": "electric",
        "name": "wepear",
        "effect": "A berry to be used in cooking. This berry is very rare and hard to obtain in certain regions",
        "max_harvest": 10,
        "soil_dryness": 35,
        "smoothness": 20,
        "firmness": "super-hard",
        "growth_time": 2,
        "id": 19,
        "size": 74
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 0,
            "bitter": 0,
            "sour": 10,
        },
        "natural_gift_type": "grass",
        "name": "pinap",
        "effect": "A berry to be used in cooking. This berry is very rare and hard to obtain in certain regions",
        "max_harvest": 10,
        "soil_dryness": 35,
        "smoothness": 20,
        "firmness": "hard",
        "growth_time": 2,
        "id": 20,
        "size": 80
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 10,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "ice",
        "name": "pomeg",
        "effect": "A berry to be consumed by Mon. Using it on a Mon makes it more friendly but lowers its base HP",
        "max_harvest": 5,
        "soil_dryness": 8,
        "smoothness": 20,
        "firmness": "very-hard",
        "growth_time": 8,
        "id": 21,
        "size": 135
    },
    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 0,
            "dry": 10,
            "sweet": 0,
            "bitter": 10,
            "sour": 10,
        },
        "natural_gift_type": "fighting",
        "name": "kelpsy",

        "max_harvest": 5,
        "soil_dryness": 8,
        "smoothness": 20,
        "firmness": "hard",
        "growth_time": 8,
        "id": 22,
        "size": 150
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 10,
            "bitter": 0,
            "sour": 10,
        },
        "natural_gift_type": "poison",
        "name": "qualot",
        "max_harvest": 5,
        "soil_dryness": 8,
        "smoothness": 20,
        "firmness": "hard",
        "growth_time": 8,
        "id": 23,
        "size": 110
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 10,
            "dry": 10,
            "sweet": 0,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "ground",
        "name": "hondew",
        "max_harvest": 5,
        "soil_dryness": 8,
        "smoothness": 20,
        "firmness": "hard",
        "growth_time": 8,
        "id": 24,
        "size": 162
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 0,
            "dry": 10,
            "sweet": 10,
            "bitter": 0,
            "sour": 10,
        },
        "natural_gift_type": "flying",
        "name": "grepa",
        "max_harvest": 5,
        "soil_dryness": 8,
        "smoothness": 20,
        "firmness": "soft",
        "growth_time": 8,
        "id": 25,
        "size": 149
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 20,
            "dry": 10,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "psychic",
        "name": "tamato",
        "max_harvest": 5,
        "soil_dryness": 8,
        "smoothness": 30,
        "firmness": "soft",
        "growth_time": 8,
        "id": 26,
        "size": 200
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 0,
            "dry": 20,
            "sweet": 10,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "bug",
        "name": "cornn",
        "max_harvest": 10,
        "soil_dryness": 10,
        "smoothness": 30,
        "firmness": "hard",
        "growth_time": 6,
        "id": 27,
        "size": 75
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 20,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "rock",
        "name": "magost",
        "max_harvest": 10,
        "soil_dryness": 10,
        "smoothness": 30,
        "firmness": "hard",
        "growth_time": 6,
        "id": 28,
        "size": 140
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 0,
            "bitter": 20,
            "sour": 10,
        },
        "natural_gift_type": "ghost",
        "name": "rabuta",
        "max_harvest": 10,
        "soil_dryness": 10,
        "smoothness": 30,
        "firmness": "soft",
        "growth_time": 6,
        "id": 29,
        "size": 226
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 0,
            "bitter": 0,
            "sour": 20,
        },
        "natural_gift_type": "dragon",
        "name": "nomel",
        "max_harvest": 10,
        "soil_dryness": 10,
        "smoothness": 30,
        "firmness": "super-hard",
        "growth_time": 6,
        "id": 30,
        "size": 285
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 30,
            "dry": 10,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "dark",
        "name": "spelon",
        "max_harvest": 15,
        "soil_dryness": 8,
        "smoothness": 35,
        "firmness": "soft",
        "growth_time": 15,
        "id": 31,
        "size": 133
    },

    {
        "natural_gift_power": 70,
        "flavors": {
            "spicy": 0,
            "dry": 30,
            "sweet": 10,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "steel",
        "name": "pamtre",
        "max_harvest": 15,
        "soil_dryness": 8,
        "smoothness": 35,
        "firmness": "very-soft",
        "growth_time": 15,
        "id": 32,
        "size": 244
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 30,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "fire",
        "name": "watmel",
        "max_harvest": 15,
        "soil_dryness": 8,
        "smoothness": 35,
        "firmness": "soft",
        "growth_time": 15,
        "id": 33,
        "size": 250
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 0,
            "bitter": 30,
            "sour": 10,
        },
        "natural_gift_type": "water",
        "name": "durin",
        "max_harvest": 15,
        "soil_dryness": 8,
        "smoothness": 35,
        "firmness": "hard",
        "growth_time": 15,
        "id": 34,
        "size": 280
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 0,
            "bitter": 0,
            "sour": 30,
        },
        "natural_gift_type": "electric",
        "name": "belue",
        "max_harvest": 15,
        "soil_dryness": 8,
        "smoothness": 35,
        "firmness": "very-soft",
        "growth_time": 15,
        "id": 35,
        "size": 300
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 15,
            "dry": 0,
            "sweet": 10,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "fire",
        "name": "occa",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "super-hard",
        "growth_time": 18,
        "id": 36,
        "size": 90
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 15,
            "sweet": 0,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "water",
        "name": "passho",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "soft",
        "growth_time": 18,
        "id": 37,
        "size": 33
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 15,
            "bitter": 0,
            "sour": 10,
        },
        "natural_gift_type": "electric",
        "name": "wacan",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "very-soft",
        "growth_time": 18,
        "id": 38,
        "size": 250
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 0,
            "bitter": 15,
            "sour": 0,
        },
        "natural_gift_type": "grass",
        "name": "rindo",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "soft",
        "growth_time": 18,
        "id": 39,
        "size": 156
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 10,
            "sweet": 0,
            "bitter": 0,
            "sour": 15,
        },
        "natural_gift_type": "ice",
        "name": "yache",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "very-hard",
        "growth_time": 18,
        "id": 40,
        "size": 135
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 15,
            "dry": 0,
            "sweet": 0,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "fighting",
        "name": "chople",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "soft",
        "growth_time": 18,
        "id": 41,
        "size": 77
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 15,
            "sweet": 0,
            "bitter": 0,
            "sour": 10,
        },
        "natural_gift_type": "poison",
        "name": "kebia",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "hard",
        "growth_time": 18,
        "id": 42,
        "size": 90
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 15,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "ground",
        "name": "shuca",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "soft",
        "growth_time": 18,
        "id": 43,
        "size": 42
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 10,
            "sweet": 0,
            "bitter": 15,
            "sour": 0,
        },
        "natural_gift_type": "flying",
        "name": "coba",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "very-hard",
        "growth_time": 18,
        "id": 44,
        "size": 278
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 10,
            "bitter": 0,
            "sour": 15,
        },
        "natural_gift_type": "psychic",
        "name": "payapa",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 30,
        "firmness": "soft",
        "growth_time": 18,
        "id": 45,
        "size": 252
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 20,
            "dry": 0,
            "sweet": 0,
            "bitter": 0,
            "sour": 10,
        },
        "natural_gift_type": "bug",
        "name": "tanga",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 35,
        "firmness": "very-soft",
        "growth_time": 18,
        "id": 46,
        "size": 42
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 10,
            "dry": 20,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "rock",
        "name": "charti",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 35,
        "firmness": "very-soft",
        "growth_time": 18,
        "id": 47,
        "size": 28
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 10,
            "sweet": 20,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "ghost",
        "name": "kasib",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 35,
        "firmness": "hard",
        "growth_time": 18,
        "id": 48,
        "size": 144
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 10,
            "bitter": 20,
            "sour": 0,
        },
        "natural_gift_type": "dragon",
        "name": "haban",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 35,
        "firmness": "soft",
        "growth_time": 18,
        "id": 49,
        "size": 23
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 0,
            "bitter": 10,
            "sour": 20,
        },
        "natural_gift_type": "dark",
        "name": "colbur",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 35,
        "firmness": "super-hard",
        "growth_time": 18,
        "id": 50,
        "size": 39
    },

    {
        "natural_gift_power": 60,
        "flavors": {
            "spicy": 25,
            "dry": 10,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "steel",
        "name": "babiri",
        "max_harvest": 5,
        "soil_dryness": 6,
        "smoothness": 35,
        "firmness": "super-hard",
        "growth_time": 18,
        "id": 51,
        "size": 265
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 30,
            "dry": 10,
            "sweet": 30,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "grass",
        "name": "liechi",
        "max_harvest": 5,
        "soil_dryness": 4,
        "smoothness": 40,
        "firmness": "very-hard",
        "growth_time": 24,
        "id": 53,
        "size": 111
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 0,
            "dry": 30,
            "sweet": 10,
            "bitter": 30,
            "sour": 0,
        },
        "natural_gift_type": "ice",
        "name": "ganlon",
        "max_harvest": 5,
        "soil_dryness": 4,
        "smoothness": 40,
        "firmness": "very-hard",
        "growth_time": 24,
        "id": 54,
        "size": 33
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 30,
            "bitter": 10,
            "sour": 30,
        },
        "natural_gift_type": "fighting",
        "name": "salac",
        "max_harvest": 5,
        "soil_dryness": 4,
        "smoothness": 40,
        "firmness": "very-hard",
        "growth_time": 24,
        "id": 55,
        "size": 95
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 30,
            "dry": 0,
            "sweet": 0,
            "bitter": 30,
            "sour": 10,
        },
        "natural_gift_type": "poison",
        "name": "petaya",
        "max_harvest": 5,
        "soil_dryness": 4,
        "smoothness": 40,
        "firmness": "very-hard",
        "growth_time": 24,
        "id": 56,
        "size": 237
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 10,
            "dry": 30,
            "sweet": 0,
            "bitter": 0,
            "sour": 30,
        },
        "natural_gift_type": "ground",
        "name": "apicot",
        "max_harvest": 5,
        "soil_dryness": 4,
        "smoothness": 40,
        "firmness": "hard",
        "growth_time": 24,
        "id": 57,
        "size": 75
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 30,
            "dry": 10,
            "sweet": 30,
            "bitter": 10,
            "sour": 30,
        },
        "natural_gift_type": "flying",
        "name": "lansat",
        "max_harvest": 5,
        "soil_dryness": 4,
        "smoothness": 50,
        "firmness": "soft",
        "growth_time": 24,
        "id": 58,
        "size": 97
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 30,
            "dry": 10,
            "sweet": 30,
            "bitter": 10,
            "sour": 30,
        },
        "natural_gift_type": "psychic",
        "name": "starf",
        "max_harvest": 5,
        "soil_dryness": 4,
        "smoothness": 50,
        "firmness": "super-hard",
        "growth_time": 24,
        "id": 59,
        "size": 153
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 40,
            "dry": 10,
            "sweet": 0,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "bug",
        "name": "enigma",
        "max_harvest": 5,
        "soil_dryness": 7,
        "smoothness": 60,
        "firmness": "hard",
        "growth_time": 24,
        "id": 60,
        "size": 155
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 0,
            "dry": 40,
            "sweet": 10,
            "bitter": 0,
            "sour": 0,
        },
        "natural_gift_type": "rock",
        "name": "micle",
        "max_harvest": 5,
        "soil_dryness": 7,
        "smoothness": 60,
        "firmness": "soft",
        "growth_time": 24,
        "id": 61,
        "size": 41
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 40,
            "bitter": 10,
            "sour": 0,
        },
        "natural_gift_type": "ghost",
        "name": "custap",
        "max_harvest": 5,
        "soil_dryness": 7,
        "smoothness": 60,
        "firmness": "super-hard",
        "growth_time": 24,
        "id": 62,
        "size": 267
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 0,
            "dry": 0,
            "sweet": 0,
            "bitter": 40,
            "sour": 10,
        },
        "natural_gift_type": "dragon",
        "name": "jaboca",
        "max_harvest": 5,
        "soil_dryness": 7,
        "smoothness": 60,
        "firmness": "soft",
        "growth_time": 24,
        "id": 63,
        "size": 33
    },

    {
        "natural_gift_power": 80,
        "flavors": {
            "spicy": 10,
            "dry": 0,
            "sweet": 0,
            "bitter": 0,
            "sour": 40,
        },
        "natural_gift_type": "dark",
        "name": "rowap",
        "max_harvest": 5,
        "soil_dryness": 7,
        "smoothness": 60,
        "firmness": "very-soft",
        "growth_time": 24,
        "id": 64,
        "size": 52
    }

]

// data for status conditions
var statusConditions = {
    "poison": {
        "damage": (1/8),
        "max_turn": null,
        "snap_condition": null,
        "hit_condition": null,
        "turn_count": 0
    },
    "badPoison": {
        "damage": (1/16),
        "max_turn": null,
        "snap_condition": null,
        "hit_condition": null,
        "turn_count": 0
    },
    "confusion": {
        "damage": 4,
        "max_turn": 4,
        "snap_condition": 4,
        "hit_condition": 1,
        "turn_count": 0
    },
    "sleep": {
        "damage": 0,
        "max_turn": 3,
        "snap_condition": 3,
        "hit_condition": null,
        "turn_count": 0
    },
    "paral": {
        "damage": 0,
        "max_turn": null,
        "snap_condition": 0,
        "hit_condition": "1 or 2",
        "turn_count": 0
    },
    "burn": {
        "damage": (1/16),
        "max_turn": null,
        "snap_condition": null,
        "hit_condition": null,
        "turn_count": null
    },
    "infat": {
        "damage": 0,
        "max_turn": null,
        "snap_condition": null,
        "hit_condition": "1 or 2",
        "turn_count": null
    },
    "frozen": {
        "damage": 0,
        "max_turn": null,
        "snap_condition": 5,
        "hit_condition":"1 or 2",
        "turn_count": 0,
}
}

//data for moves sorted by type
var movesByType = {
    "normal": {
        "slam": {
            "name": "slam",
            "effect_chance": null,
            "id": 21,
            "pp": 20,
            "accuracy": 75,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/23/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mega-punch": {
            "name": "mega-punch",
            "effect_chance": null,
            "id": 5,
            "pp": 20,
            "accuracy": 85,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "double-slap": {
            "name": "double-slap",
            "effect_chance": null,
            "id": 3,
            "pp": 10,
            "accuracy": 85,
            "power": 15,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "vice-grip": {
            "name": "vice-grip",
            "effect_chance": null,
            "id": 11,
            "pp": 30,
            "accuracy": 100,
            "power": 55,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "cut": {
            "name": "cut",
            "effect_chance": null,
            "id": 15,
            "pp": 30,
            "accuracy": 95,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/14/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "pay-day": {
            "name": "pay-day",
            "effect_chance": null,
            "id": 6,
            "pp": 20,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/11/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "whirlwind": {
            "name": "whirlwind",
            "effect_chance": null,
            "id": 18,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/12/",
                    "name": "force-switch"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": -6,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "comet-punch": {
            "name": "comet-punch",
            "effect_chance": null,
            "id": 4,
            "pp": 15,
            "accuracy": 85,
            "power": 18,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "scratch": {
            "name": "scratch",
            "effect_chance": null,
            "id": 10,
            "pp": 35,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bind": {
            "name": "bind",
            "effect_chance": 100,
            "id": 20,
            "pp": 20,
            "accuracy": 85,
            "power": 15,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 6,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/8/",
                    "name": "trap"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 5,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 5,
            "max_turns": 6,
            "min_hits": null,
            "max_hits": null
        },
        "horn-attack": {
            "name": "horn-attack",
            "effect_chance": null,
            "id": 30,
            "pp": 25,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "stomp": {
            "name": "stomp",
            "effect_chance": 30,
            "id": 23,
            "pp": 20,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "headbutt": {
            "name": "headbutt",
            "effect_chance": 30,
            "id": 29,
            "pp": 15,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/9/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "swords-dance": {
            "name": "swords-dance",
            "effect_chance": null,
            "id": 14,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "pound": {
            "name": "pound",
            "effect_chance": null,
            "id": 1,
            "pp": 35,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "guillotine": {
            "name": "guillotine",
            "effect_chance": null,
            "id": 12,
            "pp": 5,
            "accuracy": 30,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/9/",
                    "name": "ohko"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/14/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "wrap": {
            "name": "wrap",
            "effect_chance": 100,
            "id": 35,
            "pp": 20,
            "accuracy": 90,
            "power": 15,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 6,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/8/",
                    "name": "trap"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 5,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 5,
            "max_turns": 6,
            "min_hits": null,
            "max_hits": null
        },
        "fury-attack": {
            "name": "fury-attack",
            "effect_chance": null,
            "id": 31,
            "pp": 20,
            "accuracy": 85,
            "power": 15,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "razor-wind": {
            "name": "razor-wind",
            "effect_chance": null,
            "id": 13,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/2/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "take-down": {
            "name": "take-down",
            "effect_chance": null,
            "id": 36,
            "pp": 20,
            "accuracy": 85,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": -25,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/3/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "leer": {
            "name": "leer",
            "effect_chance": 100,
            "id": 43,
            "pp": 30,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "body-slam": {
            "name": "body-slam",
            "effect_chance": 30,
            "id": 34,
            "pp": 15,
            "accuracy": 100,
            "power": 85,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/1/",
                    "name": "paralysis"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "double-edge": {
            "name": "double-edge",
            "effect_chance": null,
            "id": 38,
            "pp": 15,
            "accuracy": 100,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": -33,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/3/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "horn-drill": {
            "name": "horn-drill",
            "effect_chance": null,
            "id": 32,
            "pp": 5,
            "accuracy": 30,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/9/",
                    "name": "ohko"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/14/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "screech": {
            "name": "screech",
            "effect_chance": null,
            "id": 103,
            "pp": 40,
            "accuracy": 85,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "double-team": {
            "name": "double-team",
            "effect_chance": null,
            "id": 104,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "supersonic": {
            "name": "supersonic",
            "effect_chance": null,
            "id": 48,
            "pp": 20,
            "accuracy": 55,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "sonic-boom": {
            "name": "sonic-boom",
            "effect_chance": null,
            "id": 49,
            "pp": 20,
            "accuracy": 90,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "thrash": {
            "name": "thrash",
            "effect_chance": null,
            "id": 37,
            "pp": 10,
            "accuracy": 100,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/6/"
            },
            "priority": 0,
            "target": "random-opponent",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "roar": {
            "name": "roar",
            "effect_chance": null,
            "id": 46,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/12/",
                    "name": "force-switch"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": -6,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sing": {
            "name": "sing",
            "effect_chance": null,
            "id": 47,
            "pp": 15,
            "accuracy": 55,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": 4,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/2/",
                    "name": "sleep"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 4,
            "min_hits": null,
            "max_hits": null
        },
        "growl": {
            "name": "growl",
            "effect_chance": null,
            "id": 45,
            "pp": 40,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "tail-whip": {
            "name": "tail-whip",
            "effect_chance": null,
            "id": 39,
            "pp": 30,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "disable": {
            "name": "disable",
            "effect_chance": null,
            "id": 50,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": 4,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/13/",
                    "name": "disable"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 4,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 4,
            "max_turns": 4,
            "min_hits": null,
            "max_hits": null
        },
        "mimic": {
            "name": "mimic",
            "effect_chance": null,
            "id": 102,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/19/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "growth": {
            "name": "growth",
            "effect_chance": null,
            "id": 74,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rage": {
            "name": "rage",
            "effect_chance": null,
            "id": 99,
            "pp": 20,
            "accuracy": 100,
            "power": 20,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/17/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "strength": {
            "name": "strength",
            "effect_chance": null,
            "id": 70,
            "pp": 15,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/23/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "defense-curl": {
            "name": "defense-curl",
            "effect_chance": null,
            "id": 111,
            "pp": 40,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hyper-beam": {
            "name": "hyper-beam",
            "effect_chance": null,
            "id": 63,
            "pp": 5,
            "accuracy": 90,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/6/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "metronome": {
            "name": "metronome",
            "effect_chance": null,
            "id": 118,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/17/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "lovely-kiss": {
            "name": "lovely-kiss",
            "effect_chance": null,
            "id": 142,
            "pp": 10,
            "accuracy": 75,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": 4,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/2/",
                    "name": "sleep"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 4,
            "min_hits": null,
            "max_hits": null
        },
        "mega-kick": {
            "name": "mega-kick",
            "effect_chance": null,
            "id": 25,
            "pp": 5,
            "accuracy": 75,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "harden": {
            "name": "harden",
            "effect_chance": null,
            "id": 106,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "tackle": {
            "name": "tackle",
            "effect_chance": null,
            "id": 33,
            "pp": 35,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "self-destruct": {
            "name": "self-destruct",
            "effect_chance": null,
            "id": 120,
            "pp": 5,
            "accuracy": 100,
            "power": 200,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/7/"
            },
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "focus-energy": {
            "name": "focus-energy",
            "effect_chance": null,
            "id": 116,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "minimize": {
            "name": "minimize",
            "effect_chance": null,
            "id": 107,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "recover": {
            "name": "recover",
            "effect_chance": null,
            "id": 105,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/3/",
                    "name": "heal"
                },
                "healing": 50,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/23/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 50,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "spike-cannon": {
            "name": "spike-cannon",
            "effect_chance": null,
            "id": 131,
            "pp": 15,
            "accuracy": 100,
            "power": 20,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "quick-attack": {
            "name": "quick-attack",
            "effect_chance": null,
            "id": 98,
            "pp": 30,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/30/"
            },
            "priority": 1,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bide": {
            "name": "bide",
            "effect_chance": null,
            "id": 117,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/15/"
            },
            "priority": 1,
            "target": "user",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "skull-bash": {
            "name": "skull-bash",
            "effect_chance": 100,
            "id": 130,
            "pp": 10,
            "accuracy": 100,
            "power": 130,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "flash": {
            "name": "flash",
            "effect_chance": null,
            "id": 148,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "barrage": {
            "name": "barrage",
            "effect_chance": null,
            "id": 140,
            "pp": 20,
            "accuracy": 85,
            "power": 15,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "smokescreen": {
            "name": "smokescreen",
            "effect_chance": null,
            "id": 108,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hyper-fang": {
            "name": "hyper-fang",
            "effect_chance": 10,
            "id": 158,
            "pp": 15,
            "accuracy": 90,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 10,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "conversion": {
            "name": "conversion",
            "effect_chance": null,
            "id": 160,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fury-swipes": {
            "name": "fury-swipes",
            "effect_chance": null,
            "id": 154,
            "pp": 15,
            "accuracy": 80,
            "power": 18,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "slash": {
            "name": "slash",
            "effect_chance": null,
            "id": 163,
            "pp": 20,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/2/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "transform": {
            "name": "transform",
            "effect_chance": null,
            "id": 144,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/17/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sharpen": {
            "name": "sharpen",
            "effect_chance": null,
            "id": 159,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "explosion": {
            "name": "explosion",
            "effect_chance": null,
            "id": 153,
            "pp": 5,
            "accuracy": 100,
            "power": 250,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/7/"
            },
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "splash": {
            "name": "splash",
            "effect_chance": null,
            "id": 150,
            "pp": 40,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "tri-attack": {
            "name": "tri-attack",
            "effect_chance": 20,
            "id": 161,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/-1/",
                    "name": "unknown"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 20,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/8/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "swift": {
            "name": "swift",
            "effect_chance": null,
            "id": 129,
            "pp": 20,
            "accuracy": null,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/27/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "struggle": {
            "name": "struggle",
            "effect_chance": null,
            "id": 165,
            "pp": 1,
            "accuracy": null,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": -25,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "random-opponent",
            "damage_class": "physical",
            "healing": -25,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "glare": {
            "name": "glare",
            "effect_chance": null,
            "id": 137,
            "pp": 30,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/1/",
                    "name": "paralysis"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mind-reader": {
            "name": "mind-reader",
            "effect_chance": null,
            "id": 170,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "scary-face": {
            "name": "scary-face",
            "effect_chance": null,
            "id": 184,
            "pp": 10,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "constrict": {
            "name": "constrict",
            "effect_chance": 10,
            "id": 132,
            "pp": 35,
            "accuracy": 100,
            "power": 10,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/9/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "super-fang": {
            "name": "super-fang",
            "effect_chance": null,
            "id": 162,
            "pp": 10,
            "accuracy": 90,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/14/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "substitute": {
            "name": "substitute",
            "effect_chance": null,
            "id": 164,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "egg-bomb": {
            "name": "egg-bomb",
            "effect_chance": null,
            "id": 121,
            "pp": 10,
            "accuracy": 75,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sketch": {
            "name": "sketch",
            "effect_chance": null,
            "id": 166,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/19/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "protect": {
            "name": "protect",
            "effect_chance": null,
            "id": 182,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/15/"
            },
            "priority": 4,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "false-swipe": {
            "name": "false-swipe",
            "effect_chance": null,
            "id": 206,
            "pp": 40,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "conversion-2": {
            "name": "conversion-2",
            "effect_chance": null,
            "id": 176,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "dizzy-punch": {
            "name": "dizzy-punch",
            "effect_chance": 20,
            "id": 146,
            "pp": 10,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 20,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "attract": {
            "name": "attract",
            "effect_chance": null,
            "id": 213,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/7/",
                    "name": "infatuation"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "flail": {
            "name": "flail",
            "effect_chance": null,
            "id": 175,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/26/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "belly-drum": {
            "name": "belly-drum",
            "effect_chance": null,
            "id": 187,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "snore": {
            "name": "snore",
            "effect_chance": 30,
            "id": 173,
            "pp": 15,
            "accuracy": 100,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "foresight": {
            "name": "foresight",
            "effect_chance": null,
            "id": 193,
            "pp": 40,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/17/",
                    "name": "no-type-immunity"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/33/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "soft-boiled": {
            "name": "soft-boiled",
            "effect_chance": null,
            "id": 135,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/3/",
                    "name": "heal"
                },
                "healing": 50,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 50,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "swagger": {
            "name": "swagger",
            "effect_chance": null,
            "id": 207,
            "pp": 15,
            "accuracy": 85,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/5/",
                    "name": "swagger"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/27/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "heal-bell": {
            "name": "heal-bell",
            "effect_chance": null,
            "id": 215,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "user-and-allies",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "perish-song": {
            "name": "perish-song",
            "effect_chance": null,
            "id": 195,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": 4,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/20/",
                    "name": "perish-song"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 4,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/14/"
            },
            "priority": 0,
            "target": "all-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 4,
            "max_turns": 4,
            "min_hits": null,
            "max_hits": null
        },
        "endure": {
            "name": "endure",
            "effect_chance": null,
            "id": 203,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 4,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "pain-split": {
            "name": "pain-split",
            "effect_chance": null,
            "id": 220,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "safeguard": {
            "name": "safeguard",
            "effect_chance": null,
            "id": 219,
            "pp": 25,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/15/"
            },
            "priority": 0,
            "target": "users-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mean-look": {
            "name": "mean-look",
            "effect_chance": null,
            "id": 212,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "milk-drink": {
            "name": "milk-drink",
            "effect_chance": null,
            "id": 208,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/3/",
                    "name": "heal"
                },
                "healing": 50,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 50,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "lock-on": {
            "name": "lock-on",
            "effect_chance": null,
            "id": 199,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sleep-talk": {
            "name": "sleep-talk",
            "effect_chance": null,
            "id": 214,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/17/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "present": {
            "name": "present",
            "effect_chance": null,
            "id": 217,
            "pp": 15,
            "accuracy": 90,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/17/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "frustration": {
            "name": "frustration",
            "effect_chance": null,
            "id": 218,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/13/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "spit-up": {
            "name": "spit-up",
            "effect_chance": null,
            "id": 255,
            "pp": 10,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "encore": {
            "name": "encore",
            "effect_chance": null,
            "id": 227,
            "pp": 5,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "morning-sun": {
            "name": "morning-sun",
            "effect_chance": null,
            "id": 234,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/3/",
                    "name": "heal"
                },
                "healing": 50,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/25/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 50,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "return": {
            "name": "return",
            "effect_chance": null,
            "id": 216,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/13/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rapid-spin": {
            "name": "rapid-spin",
            "effect_chance": null,
            "id": 229,
            "pp": 40,
            "accuracy": 100,
            "power": 20,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fake-out": {
            "name": "fake-out",
            "effect_chance": 100,
            "id": 252,
            "pp": 10,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 100,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/23/"
            },
            "priority": 3,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hidden-power": {
            "name": "hidden-power",
            "effect_chance": null,
            "id": 237,
            "pp": 15,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/17/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "facade": {
            "name": "facade",
            "effect_chance": null,
            "id": 263,
            "pp": 20,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "swallow": {
            "name": "swallow",
            "effect_chance": null,
            "id": 256,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/3/",
                    "name": "heal"
                },
                "healing": 25,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 25,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "smelling-salts": {
            "name": "smelling-salts",
            "effect_chance": null,
            "id": 265,
            "pp": 10,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/9/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "baton-pass": {
            "name": "baton-pass",
            "effect_chance": null,
            "id": 226,
            "pp": 40,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "helping-hand": {
            "name": "helping-hand",
            "effect_chance": null,
            "id": 270,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 5,
            "target": "ally",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "stockpile": {
            "name": "stockpile",
            "effect_chance": null,
            "id": 254,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "psych-up": {
            "name": "psych-up",
            "effect_chance": null,
            "id": 244,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "assist": {
            "name": "assist",
            "effect_chance": null,
            "id": 274,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/25/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "extreme-speed": {
            "name": "extreme-speed",
            "effect_chance": null,
            "id": 245,
            "pp": 5,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/30/"
            },
            "priority": 2,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sweet-scent": {
            "name": "sweet-scent",
            "effect_chance": null,
            "id": 230,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "recycle": {
            "name": "recycle",
            "effect_chance": null,
            "id": 278,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/17/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "endeavor": {
            "name": "endeavor",
            "effect_chance": null,
            "id": 283,
            "pp": 5,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "secret-power": {
            "name": "secret-power",
            "effect_chance": 30,
            "id": 290,
            "pp": 20,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/29/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "slack-off": {
            "name": "slack-off",
            "effect_chance": null,
            "id": 303,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/3/",
                    "name": "heal"
                },
                "healing": 50,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/26/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 50,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hyper-voice": {
            "name": "hyper-voice",
            "effect_chance": null,
            "id": 304,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "camouflage": {
            "name": "camouflage",
            "effect_chance": null,
            "id": 293,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/2/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "uproar": {
            "name": "uproar",
            "effect_chance": null,
            "id": 253,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "random-opponent",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "refresh": {
            "name": "refresh",
            "effect_chance": null,
            "id": 287,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "crush-claw": {
            "name": "crush-claw",
            "effect_chance": 50,
            "id": 306,
            "pp": 10,
            "accuracy": 95,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 50,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "nature-power": {
            "name": "nature-power",
            "effect_chance": null,
            "id": 267,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/11/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "wish": {
            "name": "wish",
            "effect_chance": null,
            "id": 273,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "odor-sleuth": {
            "name": "odor-sleuth",
            "effect_chance": null,
            "id": 316,
            "pp": 40,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/17/",
                    "name": "no-type-immunity"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/33/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "howl": {
            "name": "howl",
            "effect_chance": null,
            "id": 336,
            "pp": 40,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "weather-ball": {
            "name": "weather-ball",
            "effect_chance": null,
            "id": 311,
            "pp": 10,
            "accuracy": 100,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "feint": {
            "name": "feint",
            "effect_chance": null,
            "id": 364,
            "pp": 10,
            "accuracy": 100,
            "power": 30,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 2,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rock-climb": {
            "name": "rock-climb",
            "effect_chance": 20,
            "id": 431,
            "pp": 20,
            "accuracy": 85,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 20,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "natural-gift": {
            "name": "natural-gift",
            "effect_chance": null,
            "id": 363,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "crush-grip": {
            "name": "crush-grip",
            "effect_chance": null,
            "id": 462,
            "pp": 5,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "acupressure": {
            "name": "acupressure",
            "effect_chance": null,
            "id": 367,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "user-or-ally",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "simple-beam": {
            "name": "simple-beam",
            "effect_chance": null,
            "id": 493,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "captivate": {
            "name": "captivate",
            "effect_chance": null,
            "id": 445,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "shell-smash": {
            "name": "shell-smash",
            "effect_chance": null,
            "id": 504,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "double-hit": {
            "name": "double-hit",
            "effect_chance": null,
            "id": 458,
            "pp": 10,
            "accuracy": 90,
            "power": 35,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 2
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 2
        },
        "bestow": {
            "name": "bestow",
            "effect_chance": null,
            "id": 516,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "chip-away": {
            "name": "chip-away",
            "effect_chance": null,
            "id": 498,
            "pp": 20,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "lucky-chant": {
            "name": "lucky-chant",
            "effect_chance": null,
            "id": 381,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "users-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "retaliate": {
            "name": "retaliate",
            "effect_chance": null,
            "id": 514,
            "pp": 5,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "giga-impact": {
            "name": "giga-impact",
            "effect_chance": null,
            "id": 416,
            "pp": 5,
            "accuracy": 90,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "techno-blast": {
            "name": "techno-blast",
            "effect_chance": null,
            "id": 546,
            "pp": 5,
            "accuracy": 100,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "noble-roar": {
            "name": "noble-roar",
            "effect_chance": 100,
            "id": 568,
            "pp": 30,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "work-up": {
            "name": "work-up",
            "effect_chance": null,
            "id": 526,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "celebrate": {
            "name": "celebrate",
            "effect_chance": null,
            "id": 606,
            "pp": 40,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "relic-song": {
            "name": "relic-song",
            "effect_chance": 10,
            "id": 547,
            "pp": 10,
            "accuracy": 100,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 4,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/2/",
                    "name": "sleep"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 4,
            "min_hits": null,
            "max_hits": null
        },
        "hold-hands": {
            "name": "hold-hands",
            "effect_chance": null,
            "id": 607,
            "pp": 40,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "ally",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "me-first": {
            "name": "me-first",
            "effect_chance": null,
            "id": 382,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon-me-first",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "reflect-type": {
            "name": "reflect-type",
            "effect_chance": null,
            "id": 513,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "confide": {
            "name": "confide",
            "effect_chance": 100,
            "id": 590,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "entrainment": {
            "name": "entrainment",
            "effect_chance": null,
            "id": 494,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "teeter-dance": {
            "name": "teeter-dance",
            "effect_chance": null,
            "id": 298,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/6/"
            },
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "boomburst": {
            "name": "boomburst",
            "effect_chance": null,
            "id": 586,
            "pp": 10,
            "accuracy": 100,
            "power": 140,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "play-nice": {
            "name": "play-nice",
            "effect_chance": 100,
            "id": 589,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "happy-hour": {
            "name": "happy-hour",
            "effect_chance": null,
            "id": 603,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "users-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "yawn": {
            "name": "yawn",
            "effect_chance": null,
            "id": 281,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": 2,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/14/",
                    "name": "yawn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 2,
            "min_hits": null,
            "max_hits": null
        },
        "after-you": {
            "name": "after-you",
            "effect_chance": null,
            "id": 495,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "laser-focus": {
            "name": "laser-focus",
            "effect_chance": null,
            "id": 673,
            "pp": 30,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "copycat": {
            "name": "copycat",
            "effect_chance": null,
            "id": 383,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "last-resort": {
            "name": "last-resort",
            "effect_chance": null,
            "id": 387,
            "pp": 5,
            "accuracy": 100,
            "power": 140,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "covet": {
            "name": "covet",
            "effect_chance": null,
            "id": 343,
            "pp": 25,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/20/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "multi-attack": {
            "name": "multi-attack",
            "effect_chance": null,
            "id": 718,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "pulverizing-pancake": {
            "name": "pulverizing-pancake",
            "effect_chance": null,
            "id": 701,
            "pp": 1,
            "accuracy": null,
            "power": 210,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "breakneck-blitz--special": {
            "name": "breakneck-blitz--special",
            "effect_chance": null,
            "id": 623,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "judgment": {
            "name": "judgment",
            "effect_chance": null,
            "id": 449,
            "pp": 10,
            "accuracy": 100,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hold-back": {
            "name": "hold-back",
            "effect_chance": null,
            "id": 610,
            "pp": 40,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "spotlight": {
            "name": "spotlight",
            "effect_chance": null,
            "id": 671,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 3,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "tearful-look": {
            "name": "tearful-look",
            "effect_chance": 100,
            "id": 715,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "extreme-evoboost": {
            "name": "extreme-evoboost",
            "effect_chance": 100,
            "id": 702,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "revelation-dance": {
            "name": "revelation-dance",
            "effect_chance": null,
            "id": 686,
            "pp": 15,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "round": {
            "name": "round",
            "effect_chance": null,
            "id": 496,
            "pp": 15,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "follow-me": {
            "name": "follow-me",
            "effect_chance": null,
            "id": 266,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 2,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "fighting": {
        "double-kick": {
            "name": "double-kick",
            "effect_chance": null,
            "id": 24,
            "pp": 30,
            "accuracy": 100,
            "power": 30,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 2
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 2
        },
        "submission": {
            "name": "submission",
            "effect_chance": null,
            "id": 66,
            "pp": 20,
            "accuracy": 80,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": -25,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/3/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "low-kick": {
            "name": "low-kick",
            "effect_chance": null,
            "id": 67,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "karate-chop": {
            "name": "karate-chop",
            "effect_chance": null,
            "id": 2,
            "pp": 25,
            "accuracy": 100,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/2/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "seismic-toss": {
            "name": "seismic-toss",
            "effect_chance": null,
            "id": 69,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/23/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rolling-kick": {
            "name": "rolling-kick",
            "effect_chance": 30,
            "id": 27,
            "pp": 15,
            "accuracy": 85,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "jump-kick": {
            "name": "jump-kick",
            "effect_chance": null,
            "id": 26,
            "pp": 10,
            "accuracy": 95,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/3/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "triple-kick": {
            "name": "triple-kick",
            "effect_chance": null,
            "id": 167,
            "pp": 10,
            "accuracy": 90,
            "power": 10,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 3,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 3
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 3,
            "max_hits": 3
        },
        "high-jump-kick": {
            "name": "high-jump-kick",
            "effect_chance": null,
            "id": 136,
            "pp": 10,
            "accuracy": 90,
            "power": 130,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/3/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mach-punch": {
            "name": "mach-punch",
            "effect_chance": null,
            "id": 183,
            "pp": 30,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/30/"
            },
            "priority": 1,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "superpower": {
            "name": "superpower",
            "effect_chance": 100,
            "id": 276,
            "pp": 5,
            "accuracy": 100,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/3/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "dynamic-punch": {
            "name": "dynamic-punch",
            "effect_chance": 100,
            "id": 223,
            "pp": 5,
            "accuracy": 50,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "rock-smash": {
            "name": "rock-smash",
            "effect_chance": 50,
            "id": 249,
            "pp": 15,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 50,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/29/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sky-uppercut": {
            "name": "sky-uppercut",
            "effect_chance": null,
            "id": 327,
            "pp": 15,
            "accuracy": 90,
            "power": 85,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/23/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "detect": {
            "name": "detect",
            "effect_chance": null,
            "id": 197,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 4,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "counter": {
            "name": "counter",
            "effect_chance": null,
            "id": 68,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": -5,
            "target": "specific-move",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "cross-chop": {
            "name": "cross-chop",
            "effect_chance": null,
            "id": 238,
            "pp": 5,
            "accuracy": 80,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/2/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "drain-punch": {
            "name": "drain-punch",
            "effect_chance": null,
            "id": 409,
            "pp": 10,
            "accuracy": 100,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/8/",
                    "name": "damage+heal"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 50,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "reversal": {
            "name": "reversal",
            "effect_chance": null,
            "id": 179,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "close-combat": {
            "name": "close-combat",
            "effect_chance": 100,
            "id": 370,
            "pp": 5,
            "accuracy": 100,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "focus-punch": {
            "name": "focus-punch",
            "effect_chance": null,
            "id": 264,
            "pp": 20,
            "accuracy": 100,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/31/"
            },
            "priority": -3,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "revenge": {
            "name": "revenge",
            "effect_chance": null,
            "id": 279,
            "pp": 10,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/31/"
            },
            "priority": -4,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hammer-arm": {
            "name": "hammer-arm",
            "effect_chance": 100,
            "id": 359,
            "pp": 10,
            "accuracy": 90,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "wake-up-slap": {
            "name": "wake-up-slap",
            "effect_chance": null,
            "id": 358,
            "pp": 10,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bulk-up": {
            "name": "bulk-up",
            "effect_chance": null,
            "id": 339,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "low-sweep": {
            "name": "low-sweep",
            "effect_chance": 100,
            "id": 490,
            "pp": 20,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "aura-sphere": {
            "name": "aura-sphere",
            "effect_chance": null,
            "id": 396,
            "pp": 20,
            "accuracy": null,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "storm-throw": {
            "name": "storm-throw",
            "effect_chance": null,
            "id": 480,
            "pp": 10,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 6,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 6,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "all-out-pummeling--special": {
            "name": "all-out-pummeling--special",
            "effect_chance": null,
            "id": 625,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sacred-sword": {
            "name": "sacred-sword",
            "effect_chance": null,
            "id": 533,
            "pp": 15,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "secret-sword": {
            "name": "secret-sword",
            "effect_chance": null,
            "id": 548,
            "pp": 10,
            "accuracy": 100,
            "power": 85,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "all-out-pummeling--physical": {
            "name": "all-out-pummeling--physical",
            "effect_chance": null,
            "id": 624,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mat-block": {
            "name": "mat-block",
            "effect_chance": null,
            "id": 561,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "users-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "focus-blast": {
            "name": "focus-blast",
            "effect_chance": 10,
            "id": 411,
            "pp": 5,
            "accuracy": 70,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "power-up-punch": {
            "name": "power-up-punch",
            "effect_chance": 100,
            "id": 612,
            "pp": 20,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "vital-throw": {
            "name": "vital-throw",
            "effect_chance": null,
            "id": 233,
            "pp": 10,
            "accuracy": null,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/31/"
            },
            "priority": -1,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "brick-break": {
            "name": "brick-break",
            "effect_chance": null,
            "id": 280,
            "pp": 15,
            "accuracy": 100,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "quick-guard": {
            "name": "quick-guard",
            "effect_chance": null,
            "id": 501,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 3,
            "target": "users-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "arm-thrust": {
            "name": "arm-thrust",
            "effect_chance": null,
            "id": 292,
            "pp": 20,
            "accuracy": 100,
            "power": 15,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "final-gambit": {
            "name": "final-gambit",
            "effect_chance": null,
            "id": 515,
            "pp": 5,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "force-palm": {
            "name": "force-palm",
            "effect_chance": 30,
            "id": 395,
            "pp": 10,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/1/",
                    "name": "paralysis"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "vacuum-wave": {
            "name": "vacuum-wave",
            "effect_chance": null,
            "id": 410,
            "pp": 30,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 1,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "circle-throw": {
            "name": "circle-throw",
            "effect_chance": null,
            "id": 509,
            "pp": 10,
            "accuracy": 90,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": -6,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "flying-press": {
            "name": "flying-press",
            "effect_chance": null,
            "id": 560,
            "pp": 10,
            "accuracy": 95,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "flying": {
        "air-cutter": {
            "name": "air-cutter",
            "effect_chance": null,
            "id": 314,
            "pp": 25,
            "accuracy": 95,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/23/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mirror-move": {
            "name": "mirror-move",
            "effect_chance": null,
            "id": 119,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/19/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "feather-dance": {
            "name": "feather-dance",
            "effect_chance": null,
            "id": 297,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "wing-attack": {
            "name": "wing-attack",
            "effect_chance": null,
            "id": 17,
            "pp": 35,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "gust": {
            "name": "gust",
            "effect_chance": null,
            "id": 16,
            "pp": 35,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "acrobatics": {
            "name": "acrobatics",
            "effect_chance": null,
            "id": 512,
            "pp": 15,
            "accuracy": 100,
            "power": 55,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "oblivion-wing": {
            "name": "oblivion-wing",
            "effect_chance": null,
            "id": 613,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/8/",
                    "name": "damage+heal"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 75,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "supersonic-skystrike--physical": {
            "name": "supersonic-skystrike--physical",
            "effect_chance": null,
            "id": 626,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "dragon-ascent": {
            "name": "dragon-ascent",
            "effect_chance": 100,
            "id": 620,
            "pp": 5,
            "accuracy": 100,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "peck": {
            "name": "peck",
            "effect_chance": null,
            "id": 64,
            "pp": 35,
            "accuracy": 100,
            "power": 35,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "drill-peck": {
            "name": "drill-peck",
            "effect_chance": null,
            "id": 65,
            "pp": 20,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "roost": {
            "name": "roost",
            "effect_chance": null,
            "id": 355,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/3/",
                    "name": "heal"
                },
                "healing": 50,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 50,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "beak-blast": {
            "name": "beak-blast",
            "effect_chance": null,
            "id": 690,
            "pp": 15,
            "accuracy": 100,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": -3,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sky-drop": {
            "name": "sky-drop",
            "effect_chance": null,
            "id": 507,
            "pp": 10,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sky-attack": {
            "name": "sky-attack",
            "effect_chance": 30,
            "id": 143,
            "pp": 5,
            "accuracy": 90,
            "power": 140,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/2/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fly": {
            "name": "fly",
            "effect_chance": null,
            "id": 19,
            "pp": 15,
            "accuracy": 95,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/15/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "chatter": {
            "name": "chatter",
            "effect_chance": 100,
            "id": 448,
            "pp": 20,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "pluck": {
            "name": "pluck",
            "effect_chance": null,
            "id": 365,
            "pp": 20,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "aeroblast": {
            "name": "aeroblast",
            "effect_chance": null,
            "id": 177,
            "pp": 5,
            "accuracy": 95,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/2/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bounce": {
            "name": "bounce",
            "effect_chance": 30,
            "id": 340,
            "pp": 5,
            "accuracy": 85,
            "power": 85,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/1/",
                    "name": "paralysis"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/15/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "air-slash": {
            "name": "air-slash",
            "effect_chance": 30,
            "id": 403,
            "pp": 15,
            "accuracy": 95,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hurricane": {
            "name": "hurricane",
            "effect_chance": 30,
            "id": 542,
            "pp": 10,
            "accuracy": 70,
            "power": 110,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "supersonic-skystrike--special": {
            "name": "supersonic-skystrike--special",
            "effect_chance": null,
            "id": 627,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "defog": {
            "name": "defog",
            "effect_chance": null,
            "id": 432,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "tailwind": {
            "name": "tailwind",
            "effect_chance": null,
            "id": 366,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "users-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "aerial-ace": {
            "name": "aerial-ace",
            "effect_chance": null,
            "id": 332,
            "pp": 20,
            "accuracy": null,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/27/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "brave-bird": {
            "name": "brave-bird",
            "effect_chance": null,
            "id": 413,
            "pp": 15,
            "accuracy": 100,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": -33,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "poison": {
        "acid-armor": {
            "name": "acid-armor",
            "effect_chance": null,
            "id": 151,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sludge-bomb": {
            "name": "sludge-bomb",
            "effect_chance": 30,
            "id": 188,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "toxic": {
            "name": "toxic",
            "effect_chance": null,
            "id": 92,
            "pp": 10,
            "accuracy": 90,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": 15,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 15,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/33/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 15,
            "max_turns": 15,
            "min_hits": null,
            "max_hits": null
        },
        "poison-sting": {
            "name": "poison-sting",
            "effect_chance": 30,
            "id": 40,
            "pp": 35,
            "accuracy": 100,
            "power": 15,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/9/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sludge-wave": {
            "name": "sludge-wave",
            "effect_chance": 10,
            "id": 482,
            "pp": 10,
            "accuracy": 100,
            "power": 95,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "poison-powder": {
            "name": "poison-powder",
            "effect_chance": null,
            "id": 77,
            "pp": 35,
            "accuracy": 75,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/33/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "poison-fang": {
            "name": "poison-fang",
            "effect_chance": 50,
            "id": 305,
            "pp": 15,
            "accuracy": 100,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 15,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 50,
                "crit_rate": 0,
                "min_turns": 15,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/33/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 15,
            "max_turns": 15,
            "min_hits": null,
            "max_hits": null
        },
        "toxic-spikes": {
            "name": "toxic-spikes",
            "effect_chance": null,
            "id": 390,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "opponents-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "acid": {
            "name": "acid",
            "effect_chance": 10,
            "id": 51,
            "pp": 30,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "poison-gas": {
            "name": "poison-gas",
            "effect_chance": null,
            "id": 139,
            "pp": 40,
            "accuracy": 90,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/33/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "acid-downpour--special": {
            "name": "acid-downpour--special",
            "effect_chance": null,
            "id": 629,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "coil": {
            "name": "coil",
            "effect_chance": null,
            "id": 489,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "belch": {
            "name": "belch",
            "effect_chance": null,
            "id": 562,
            "pp": 10,
            "accuracy": 90,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "smog": {
            "name": "smog",
            "effect_chance": 40,
            "id": 123,
            "pp": 20,
            "accuracy": 70,
            "power": 30,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 40,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "poison-tail": {
            "name": "poison-tail",
            "effect_chance": 10,
            "id": 342,
            "pp": 25,
            "accuracy": 100,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/33/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "gastro-acid": {
            "name": "gastro-acid",
            "effect_chance": null,
            "id": 380,
            "pp": 10,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sludge": {
            "name": "sludge",
            "effect_chance": 30,
            "id": 124,
            "pp": 20,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "cross-poison": {
            "name": "cross-poison",
            "effect_chance": 10,
            "id": 440,
            "pp": 20,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "baneful-bunker": {
            "name": "baneful-bunker",
            "effect_chance": null,
            "id": 661,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 4,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "poison-jab": {
            "name": "poison-jab",
            "effect_chance": 30,
            "id": 398,
            "pp": 20,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "purify": {
            "name": "purify",
            "effect_chance": null,
            "id": 685,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 50,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 50,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "toxic-thread": {
            "name": "toxic-thread",
            "effect_chance": 100,
            "id": 672,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/5/",
                    "name": "swagger"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "gunk-shot": {
            "name": "gunk-shot",
            "effect_chance": 30,
            "id": 441,
            "pp": 5,
            "accuracy": 80,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "acid-downpour--physical": {
            "name": "acid-downpour--physical",
            "effect_chance": null,
            "id": 628,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "venom-drench": {
            "name": "venom-drench",
            "effect_chance": 100,
            "id": 599,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "acid-spray": {
            "name": "acid-spray",
            "effect_chance": 100,
            "id": 491,
            "pp": 20,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "clear-smog": {
            "name": "clear-smog",
            "effect_chance": null,
            "id": 499,
            "pp": 15,
            "accuracy": null,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "venoshock": {
            "name": "venoshock",
            "effect_chance": null,
            "id": 474,
            "pp": 10,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "ground": {
        "sand-attack": {
            "name": "sand-attack",
            "effect_chance": null,
            "id": 28,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mud-slap": {
            "name": "mud-slap",
            "effect_chance": 100,
            "id": 189,
            "pp": 10,
            "accuracy": 100,
            "power": 20,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "spikes": {
            "name": "spikes",
            "effect_chance": null,
            "id": 191,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 0,
            "target": "opponents-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mud-sport": {
            "name": "mud-sport",
            "effect_chance": null,
            "id": 300,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/10/",
                    "name": "whole-field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "entire-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "magnitude": {
            "name": "magnitude",
            "effect_chance": null,
            "id": 222,
            "pp": 30,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/11/"
            },
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mud-shot": {
            "name": "mud-shot",
            "effect_chance": 100,
            "id": 341,
            "pp": 15,
            "accuracy": 95,
            "power": 55,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bonemerang": {
            "name": "bonemerang",
            "effect_chance": null,
            "id": 155,
            "pp": 10,
            "accuracy": 90,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 2
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 2
        },
        "mud-bomb": {
            "name": "mud-bomb",
            "effect_chance": 30,
            "id": 426,
            "pp": 10,
            "accuracy": 85,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 30,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bone-club": {
            "name": "bone-club",
            "effect_chance": 10,
            "id": 125,
            "pp": 20,
            "accuracy": 85,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 10,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "earth-power": {
            "name": "earth-power",
            "effect_chance": 10,
            "id": 414,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fissure": {
            "name": "fissure",
            "effect_chance": null,
            "id": 90,
            "pp": 5,
            "accuracy": 30,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/9/",
                    "name": "ohko"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/14/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bone-rush": {
            "name": "bone-rush",
            "effect_chance": null,
            "id": 198,
            "pp": 10,
            "accuracy": 90,
            "power": 25,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "shore-up": {
            "name": "shore-up",
            "effect_chance": null,
            "id": 659,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/3/",
                    "name": "heal"
                },
                "healing": 50,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 50,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "drill-run": {
            "name": "drill-run",
            "effect_chance": null,
            "id": 529,
            "pp": 10,
            "accuracy": 95,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "precipice-blades": {
            "name": "precipice-blades",
            "effect_chance": null,
            "id": 619,
            "pp": 10,
            "accuracy": 85,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "thousand-arrows": {
            "name": "thousand-arrows",
            "effect_chance": 100,
            "id": 614,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/-1/",
                    "name": "unknown"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "stomping-tantrum": {
            "name": "stomping-tantrum",
            "effect_chance": null,
            "id": 707,
            "pp": 10,
            "accuracy": 100,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rototiller": {
            "name": "rototiller",
            "effect_chance": 100,
            "id": 563,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "dig": {
            "name": "dig",
            "effect_chance": null,
            "id": 91,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/15/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "tectonic-rage--special": {
            "name": "tectonic-rage--special",
            "effect_chance": null,
            "id": 631,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "thousand-waves": {
            "name": "thousand-waves",
            "effect_chance": null,
            "id": 615,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "tectonic-rage--physical": {
            "name": "tectonic-rage--physical",
            "effect_chance": null,
            "id": 630,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "earthquake": {
            "name": "earthquake",
            "effect_chance": null,
            "id": 89,
            "pp": 10,
            "accuracy": 100,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sand-tomb": {
            "name": "sand-tomb",
            "effect_chance": 100,
            "id": 328,
            "pp": 15,
            "accuracy": 85,
            "power": 35,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 6,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/8/",
                    "name": "trap"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 5,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 5,
            "max_turns": 6,
            "min_hits": null,
            "max_hits": null
        },
        "lands-wrath": {
            "name": "lands-wrath",
            "effect_chance": null,
            "id": 616,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bulldoze": {
            "name": "bulldoze",
            "effect_chance": 100,
            "id": 523,
            "pp": 20,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "high-horsepower": {
            "name": "high-horsepower",
            "effect_chance": null,
            "id": 667,
            "pp": 10,
            "accuracy": 95,
            "power": 95,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "rock": {
        "sandstorm": {
            "name": "sandstorm",
            "effect_chance": null,
            "id": 201,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/10/",
                    "name": "whole-field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "entire-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rollout": {
            "name": "rollout",
            "effect_chance": null,
            "id": 205,
            "pp": 20,
            "accuracy": 90,
            "power": 30,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "stealth-rock": {
            "name": "stealth-rock",
            "effect_chance": null,
            "id": 446,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "opponents-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "continental-crush--special": {
            "name": "continental-crush--special",
            "effect_chance": null,
            "id": 633,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "diamond-storm": {
            "name": "diamond-storm",
            "effect_chance": 50,
            "id": 591,
            "pp": 5,
            "accuracy": 95,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 50,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rock-slide": {
            "name": "rock-slide",
            "effect_chance": 30,
            "id": 157,
            "pp": 10,
            "accuracy": 90,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rock-throw": {
            "name": "rock-throw",
            "effect_chance": null,
            "id": 88,
            "pp": 15,
            "accuracy": 90,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rock-polish": {
            "name": "rock-polish",
            "effect_chance": null,
            "id": 397,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rock-wrecker": {
            "name": "rock-wrecker",
            "effect_chance": null,
            "id": 439,
            "pp": 5,
            "accuracy": 90,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "ancient-power": {
            "name": "ancient-power",
            "effect_chance": 10,
            "id": 246,
            "pp": 5,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "continental-crush--physical": {
            "name": "continental-crush--physical",
            "effect_chance": null,
            "id": 632,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "stone-edge": {
            "name": "stone-edge",
            "effect_chance": null,
            "id": 444,
            "pp": 5,
            "accuracy": 80,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "wide-guard": {
            "name": "wide-guard",
            "effect_chance": null,
            "id": 469,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 3,
            "target": "users-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "accelerock": {
            "name": "accelerock",
            "effect_chance": null,
            "id": 709,
            "pp": 20,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 1,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rock-tomb": {
            "name": "rock-tomb",
            "effect_chance": 100,
            "id": 317,
            "pp": 15,
            "accuracy": 95,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "power-gem": {
            "name": "power-gem",
            "effect_chance": null,
            "id": 408,
            "pp": 20,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rock-blast": {
            "name": "rock-blast",
            "effect_chance": null,
            "id": 350,
            "pp": 10,
            "accuracy": 90,
            "power": 25,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "head-smash": {
            "name": "head-smash",
            "effect_chance": null,
            "id": 457,
            "pp": 5,
            "accuracy": 80,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": -50,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "smack-down": {
            "name": "smack-down",
            "effect_chance": 100,
            "id": 479,
            "pp": 15,
            "accuracy": 100,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/-1/",
                    "name": "unknown"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "bug": {
        "twineedle": {
            "name": "twineedle",
            "effect_chance": 20,
            "id": 41,
            "pp": 20,
            "accuracy": 100,
            "power": 25,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/5/",
                    "name": "poison"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 20,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 2
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/9/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 2
        },
        "pin-missile": {
            "name": "pin-missile",
            "effect_chance": null,
            "id": 42,
            "pp": 20,
            "accuracy": 95,
            "power": 25,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "fury-cutter": {
            "name": "fury-cutter",
            "effect_chance": null,
            "id": 210,
            "pp": 20,
            "accuracy": 95,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/17/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "u-turn": {
            "name": "u-turn",
            "effect_chance": null,
            "id": 369,
            "pp": 20,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "leech-life": {
            "name": "leech-life",
            "effect_chance": null,
            "id": 141,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/8/",
                    "name": "damage+heal"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 50,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/9/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "tail-glow": {
            "name": "tail-glow",
            "effect_chance": null,
            "id": 294,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "signal-beam": {
            "name": "signal-beam",
            "effect_chance": 10,
            "id": 324,
            "pp": 15,
            "accuracy": 100,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "defend-order": {
            "name": "defend-order",
            "effect_chance": null,
            "id": 455,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "megahorn": {
            "name": "megahorn",
            "effect_chance": null,
            "id": 224,
            "pp": 10,
            "accuracy": 85,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "string-shot": {
            "name": "string-shot",
            "effect_chance": null,
            "id": 81,
            "pp": 40,
            "accuracy": 95,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/9/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "x-scissor": {
            "name": "x-scissor",
            "effect_chance": null,
            "id": 404,
            "pp": 15,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "steamroller": {
            "name": "steamroller",
            "effect_chance": 30,
            "id": 537,
            "pp": 20,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "silver-wind": {
            "name": "silver-wind",
            "effect_chance": 10,
            "id": 318,
            "pp": 5,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/32/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "spider-web": {
            "name": "spider-web",
            "effect_chance": null,
            "id": 169,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/18/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fell-stinger": {
            "name": "fell-stinger",
            "effect_chance": null,
            "id": 565,
            "pp": 25,
            "accuracy": 100,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "attack-order": {
            "name": "attack-order",
            "effect_chance": null,
            "id": 454,
            "pp": 15,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sticky-web": {
            "name": "sticky-web",
            "effect_chance": null,
            "id": 564,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/11/",
                    "name": "field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "opponents-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bug-buzz": {
            "name": "bug-buzz",
            "effect_chance": 10,
            "id": 405,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bug-bite": {
            "name": "bug-bite",
            "effect_chance": null,
            "id": 450,
            "pp": 20,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "struggle-bug": {
            "name": "struggle-bug",
            "effect_chance": 100,
            "id": 522,
            "pp": 20,
            "accuracy": 100,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "infestation": {
            "name": "infestation",
            "effect_chance": 100,
            "id": 611,
            "pp": 20,
            "accuracy": 100,
            "power": 20,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 6,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/8/",
                    "name": "trap"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 5,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 5,
            "max_turns": 6,
            "min_hits": null,
            "max_hits": null
        },
        "lunge": {
            "name": "lunge",
            "effect_chance": 100,
            "id": 679,
            "pp": 15,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "savage-spin-out--special": {
            "name": "savage-spin-out--special",
            "effect_chance": null,
            "id": 635,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "pollen-puff": {
            "name": "pollen-puff",
            "effect_chance": null,
            "id": 676,
            "pp": 15,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "heal-order": {
            "name": "heal-order",
            "effect_chance": null,
            "id": 456,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/3/",
                    "name": "heal"
                },
                "healing": 50,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 50,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "powder": {
            "name": "powder",
            "effect_chance": null,
            "id": 600,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 1,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "quiver-dance": {
            "name": "quiver-dance",
            "effect_chance": null,
            "id": 483,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rage-powder": {
            "name": "rage-powder",
            "effect_chance": null,
            "id": 476,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 2,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "first-impression": {
            "name": "first-impression",
            "effect_chance": null,
            "id": 660,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 2,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "savage-spin-out--physical": {
            "name": "savage-spin-out--physical",
            "effect_chance": null,
            "id": 634,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "ghost": {
        "night-shade": {
            "name": "night-shade",
            "effect_chance": null,
            "id": 101,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/23/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "destiny-bond": {
            "name": "destiny-bond",
            "effect_chance": null,
            "id": 194,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/7/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "curse": {
            "name": "curse",
            "effect_chance": null,
            "id": 174,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/31/"
            },
            "priority": 0,
            "target": "specific-move",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "confuse-ray": {
            "name": "confuse-ray",
            "effect_chance": null,
            "id": 109,
            "pp": 10,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "spirit-shackle": {
            "name": "spirit-shackle",
            "effect_chance": null,
            "id": 662,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "shadow-force": {
            "name": "shadow-force",
            "effect_chance": null,
            "id": 467,
            "pp": 5,
            "accuracy": 100,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "grudge": {
            "name": "grudge",
            "effect_chance": null,
            "id": 288,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/26/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "phantom-force": {
            "name": "phantom-force",
            "effect_chance": null,
            "id": 566,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "trick-or-treat": {
            "name": "trick-or-treat",
            "effect_chance": null,
            "id": 567,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "astonish": {
            "name": "astonish",
            "effect_chance": 30,
            "id": 310,
            "pp": 15,
            "accuracy": 100,
            "power": 30,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/9/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hex": {
            "name": "hex",
            "effect_chance": null,
            "id": 506,
            "pp": 10,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "shadow-sneak": {
            "name": "shadow-sneak",
            "effect_chance": null,
            "id": 425,
            "pp": 30,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 1,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sinister-arrow-raid": {
            "name": "sinister-arrow-raid",
            "effect_chance": null,
            "id": 695,
            "pp": 1,
            "accuracy": null,
            "power": 180,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "lick": {
            "name": "lick",
            "effect_chance": 30,
            "id": 122,
            "pp": 30,
            "accuracy": 100,
            "power": 30,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/1/",
                    "name": "paralysis"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "ominous-wind": {
            "name": "ominous-wind",
            "effect_chance": 10,
            "id": 466,
            "pp": 5,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "nightmare": {
            "name": "nightmare",
            "effect_chance": null,
            "id": 171,
            "pp": 15,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/9/",
                    "name": "nightmare"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "moongeist-beam": {
            "name": "moongeist-beam",
            "effect_chance": null,
            "id": 714,
            "pp": 5,
            "accuracy": 100,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "shadow-punch": {
            "name": "shadow-punch",
            "effect_chance": null,
            "id": 325,
            "pp": 20,
            "accuracy": null,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/27/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "spectral-thief": {
            "name": "spectral-thief",
            "effect_chance": null,
            "id": 712,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "soul-stealing-7-star-strike": {
            "name": "soul-stealing-7-star-strike",
            "effect_chance": null,
            "id": 699,
            "pp": 1,
            "accuracy": null,
            "power": 195,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "never-ending-nightmare--special": {
            "name": "never-ending-nightmare--special",
            "effect_chance": null,
            "id": 637,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "spite": {
            "name": "spite",
            "effect_chance": null,
            "id": 180,
            "pp": 10,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "never-ending-nightmare--physical": {
            "name": "never-ending-nightmare--physical",
            "effect_chance": null,
            "id": 636,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "shadow-ball": {
            "name": "shadow-ball",
            "effect_chance": 20,
            "id": 247,
            "pp": 15,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 20,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "shadow-bone": {
            "name": "shadow-bone",
            "effect_chance": 20,
            "id": 708,
            "pp": 10,
            "accuracy": 100,
            "power": 85,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "shadow-claw": {
            "name": "shadow-claw",
            "effect_chance": null,
            "id": 421,
            "pp": 15,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "steel": {
        "meteor-mash": {
            "name": "meteor-mash",
            "effect_chance": 20,
            "id": 309,
            "pp": 10,
            "accuracy": 90,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 20,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "steel-wing": {
            "name": "steel-wing",
            "effect_chance": 10,
            "id": 211,
            "pp": 25,
            "accuracy": 90,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/12/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bullet-punch": {
            "name": "bullet-punch",
            "effect_chance": null,
            "id": 418,
            "pp": 30,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 1,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "metal-claw": {
            "name": "metal-claw",
            "effect_chance": 10,
            "id": 232,
            "pp": 35,
            "accuracy": 95,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "flash-cannon": {
            "name": "flash-cannon",
            "effect_chance": 10,
            "id": 430,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "gyro-ball": {
            "name": "gyro-ball",
            "effect_chance": null,
            "id": 360,
            "pp": 5,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "doom-desire": {
            "name": "doom-desire",
            "effect_chance": null,
            "id": 353,
            "pp": 5,
            "accuracy": 100,
            "power": 140,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "metal-sound": {
            "name": "metal-sound",
            "effect_chance": null,
            "id": 319,
            "pp": 40,
            "accuracy": 85,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "corkscrew-crash--physical": {
            "name": "corkscrew-crash--physical",
            "effect_chance": null,
            "id": 638,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "iron-head": {
            "name": "iron-head",
            "effect_chance": 30,
            "id": 442,
            "pp": 15,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 30,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "metal-burst": {
            "name": "metal-burst",
            "effect_chance": null,
            "id": 368,
            "pp": 10,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "specific-move",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "kings-shield": {
            "name": "kings-shield",
            "effect_chance": null,
            "id": 588,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 4,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "heavy-slam": {
            "name": "heavy-slam",
            "effect_chance": null,
            "id": 484,
            "pp": 10,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "corkscrew-crash--special": {
            "name": "corkscrew-crash--special",
            "effect_chance": null,
            "id": 639,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mirror-shot": {
            "name": "mirror-shot",
            "effect_chance": 30,
            "id": 429,
            "pp": 10,
            "accuracy": 85,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 30,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "iron-defense": {
            "name": "iron-defense",
            "effect_chance": null,
            "id": 334,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/15/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "autotomize": {
            "name": "autotomize",
            "effect_chance": null,
            "id": 475,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "anchor-shot": {
            "name": "anchor-shot",
            "effect_chance": null,
            "id": 677,
            "pp": 20,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "iron-tail": {
            "name": "iron-tail",
            "effect_chance": 30,
            "id": 231,
            "pp": 15,
            "accuracy": 75,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 30,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sunsteel-strike": {
            "name": "sunsteel-strike",
            "effect_chance": null,
            "id": 713,
            "pp": 5,
            "accuracy": 100,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "gear-grind": {
            "name": "gear-grind",
            "effect_chance": null,
            "id": 544,
            "pp": 15,
            "accuracy": 85,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 2
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 2
        },
        "shift-gear": {
            "name": "shift-gear",
            "effect_chance": null,
            "id": 508,
            "pp": 10,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "gear-up": {
            "name": "gear-up",
            "effect_chance": null,
            "id": 674,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "user-and-allies",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "smart-strike": {
            "name": "smart-strike",
            "effect_chance": null,
            "id": 684,
            "pp": 10,
            "accuracy": null,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "magnet-bomb": {
            "name": "magnet-bomb",
            "effect_chance": null,
            "id": 443,
            "pp": 20,
            "accuracy": null,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/1/",
                "name": "cool"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "fire": {
        "sunny-day": {
            "name": "sunny-day",
            "effect_chance": null,
            "id": 241,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/10/",
                    "name": "whole-field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/11/"
            },
            "priority": 0,
            "target": "entire-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "flare-blitz": {
            "name": "flare-blitz",
            "effect_chance": 10,
            "id": 394,
            "pp": 15,
            "accuracy": 100,
            "power": 120,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": -33,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "flamethrower": {
            "name": "flamethrower",
            "effect_chance": 10,
            "id": 53,
            "pp": 15,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "blast-burn": {
            "name": "blast-burn",
            "effect_chance": null,
            "id": 307,
            "pp": 5,
            "accuracy": 90,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/6/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "magma-storm": {
            "name": "magma-storm",
            "effect_chance": 100,
            "id": 463,
            "pp": 5,
            "accuracy": 75,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 6,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/8/",
                    "name": "trap"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 5,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 5,
            "max_turns": 6,
            "min_hits": null,
            "max_hits": null
        },
        "inferno": {
            "name": "inferno",
            "effect_chance": 100,
            "id": 517,
            "pp": 5,
            "accuracy": 50,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "incinerate": {
            "name": "incinerate",
            "effect_chance": null,
            "id": 510,
            "pp": 15,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "flame-charge": {
            "name": "flame-charge",
            "effect_chance": 100,
            "id": 488,
            "pp": 20,
            "accuracy": 100,
            "power": 50,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fusion-flare": {
            "name": "fusion-flare",
            "effect_chance": null,
            "id": 558,
            "pp": 5,
            "accuracy": 100,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "flame-wheel": {
            "name": "flame-wheel",
            "effect_chance": 10,
            "id": 172,
            "pp": 25,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "blue-flare": {
            "name": "blue-flare",
            "effect_chance": 20,
            "id": 551,
            "pp": 5,
            "accuracy": 85,
            "power": 130,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 20,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "mystical-fire": {
            "name": "mystical-fire",
            "effect_chance": 100,
            "id": 595,
            "pp": 10,
            "accuracy": 100,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fire-spin": {
            "name": "fire-spin",
            "effect_chance": 100,
            "id": 83,
            "pp": 15,
            "accuracy": 85,
            "power": 35,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 6,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/8/",
                    "name": "trap"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 5,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 5,
            "max_turns": 6,
            "min_hits": null,
            "max_hits": null
        },
        "fire-lash": {
            "name": "fire-lash",
            "effect_chance": 100,
            "id": 680,
            "pp": 15,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "searing-shot": {
            "name": "searing-shot",
            "effect_chance": 30,
            "id": 545,
            "pp": 5,
            "accuracy": 100,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "blaze-kick": {
            "name": "blaze-kick",
            "effect_chance": 10,
            "id": 299,
            "pp": 10,
            "accuracy": 90,
            "power": 85,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "burn-up": {
            "name": "burn-up",
            "effect_chance": null,
            "id": 682,
            "pp": 5,
            "accuracy": 100,
            "power": 130,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "shell-trap": {
            "name": "shell-trap",
            "effect_chance": null,
            "id": 704,
            "pp": 5,
            "accuracy": 100,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": -3,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fire-fang": {
            "name": "fire-fang",
            "effect_chance": 10,
            "id": 424,
            "pp": 15,
            "accuracy": 95,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 10,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fiery-dance": {
            "name": "fiery-dance",
            "effect_chance": 50,
            "id": 552,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 50,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sacred-fire": {
            "name": "sacred-fire",
            "effect_chance": 50,
            "id": 221,
            "pp": 5,
            "accuracy": 95,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 50,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "inferno-overdrive--physical": {
            "name": "inferno-overdrive--physical",
            "effect_chance": null,
            "id": 640,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "lava-plume": {
            "name": "lava-plume",
            "effect_chance": 30,
            "id": 436,
            "pp": 15,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "will-o-wisp": {
            "name": "will-o-wisp",
            "effect_chance": null,
            "id": 261,
            "pp": 15,
            "accuracy": 85,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/1/",
                    "name": "ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/4/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "flame-burst": {
            "name": "flame-burst",
            "effect_chance": null,
            "id": 481,
            "pp": 15,
            "accuracy": 100,
            "power": 70,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "inferno-overdrive--special": {
            "name": "inferno-overdrive--special",
            "effect_chance": null,
            "id": 641,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fire-pledge": {
            "name": "fire-pledge",
            "effect_chance": null,
            "id": 519,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "ember": {
            "name": "ember",
            "effect_chance": 10,
            "id": 52,
            "pp": 25,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "heat-crash": {
            "name": "heat-crash",
            "effect_chance": null,
            "id": 535,
            "pp": 10,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fire-punch": {
            "name": "fire-punch",
            "effect_chance": 10,
            "id": 7,
            "pp": 15,
            "accuracy": 100,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "overheat": {
            "name": "overheat",
            "effect_chance": 100,
            "id": 315,
            "pp": 5,
            "accuracy": 90,
            "power": 130,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/3/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "heat-wave": {
            "name": "heat-wave",
            "effect_chance": 10,
            "id": 257,
            "pp": 10,
            "accuracy": 90,
            "power": 95,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "fire-blast": {
            "name": "fire-blast",
            "effect_chance": 10,
            "id": 126,
            "pp": 5,
            "accuracy": 85,
            "power": 110,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 10,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "v-create": {
            "name": "v-create",
            "effect_chance": 100,
            "id": 557,
            "pp": 5,
            "accuracy": 95,
            "power": 180,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/7/",
                    "name": "damage+raise"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 100,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "eruption": {
            "name": "eruption",
            "effect_chance": null,
            "id": 284,
            "pp": 5,
            "accuracy": 100,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/26/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    },

    "water": {
        "water-gun": {
            "name": "water-gun",
            "effect_chance": null,
            "id": 55,
            "pp": 25,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "octazooka": {
            "name": "octazooka",
            "effect_chance": 50,
            "id": 190,
            "pp": 10,
            "accuracy": 85,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 50,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "waterfall": {
            "name": "waterfall",
            "effect_chance": 20,
            "id": 127,
            "pp": 15,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 20,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/28/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "withdraw": {
            "name": "withdraw",
            "effect_chance": null,
            "id": 110,
            "pp": 40,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/2/",
                    "name": "net-good-stats"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/15/"
            },
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hydro-pump": {
            "name": "hydro-pump",
            "effect_chance": null,
            "id": 56,
            "pp": 5,
            "accuracy": 80,
            "power": 110,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "surf": {
            "name": "surf",
            "effect_chance": null,
            "id": 57,
            "pp": 15,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/2/"
            },
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "dive": {
            "name": "dive",
            "effect_chance": null,
            "id": 291,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/16/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bubble": {
            "name": "bubble",
            "effect_chance": 10,
            "id": 145,
            "pp": 30,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/8/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "brine": {
            "name": "brine",
            "effect_chance": null,
            "id": 362,
            "pp": 10,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/4/",
                "name": "smart"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "rain-dance": {
            "name": "rain-dance",
            "effect_chance": null,
            "id": 240,
            "pp": 5,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/10/",
                    "name": "whole-field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/11/"
            },
            "priority": 0,
            "target": "entire-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "scald": {
            "name": "scald",
            "effect_chance": 30,
            "id": 503,
            "pp": 15,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "whirlpool": {
            "name": "whirlpool",
            "effect_chance": 100,
            "id": 250,
            "pp": 15,
            "accuracy": 85,
            "power": 35,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 6,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/8/",
                    "name": "trap"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 5,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 5,
            "max_turns": 6,
            "min_hits": null,
            "max_hits": null
        },
        "crabhammer": {
            "name": "crabhammer",
            "effect_chance": null,
            "id": 152,
            "pp": 10,
            "accuracy": 90,
            "power": 100,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 1,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/2/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 1,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hydro-cannon": {
            "name": "hydro-cannon",
            "effect_chance": null,
            "id": 308,
            "pp": 5,
            "accuracy": 90,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/6/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "aqua-ring": {
            "name": "aqua-ring",
            "effect_chance": null,
            "id": 392,
            "pp": 20,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "user",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "clamp": {
            "name": "clamp",
            "effect_chance": 100,
            "id": 128,
            "pp": 15,
            "accuracy": 85,
            "power": 35,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 6,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/8/",
                    "name": "trap"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 100,
                "crit_rate": 0,
                "min_turns": 5,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/24/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 5,
            "max_turns": 6,
            "min_hits": null,
            "max_hits": null
        },
        "steam-eruption": {
            "name": "steam-eruption",
            "effect_chance": 30,
            "id": 592,
            "pp": 5,
            "accuracy": 95,
            "power": 110,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/4/",
                    "name": "burn"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 30,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "water-shuriken": {
            "name": "water-shuriken",
            "effect_chance": null,
            "id": 594,
            "pp": 20,
            "accuracy": 100,
            "power": 15,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": 2,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": 5
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 1,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": 2,
            "max_hits": 5
        },
        "water-pulse": {
            "name": "water-pulse",
            "effect_chance": 20,
            "id": 352,
            "pp": 20,
            "accuracy": 100,
            "power": 60,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/4/",
                    "name": "damage+ailment"
                },
                "healing": 0,
                "max_turns": 5,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/6/",
                    "name": "confusion"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 20,
                "crit_rate": 0,
                "min_turns": 2,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/21/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": 2,
            "max_turns": 5,
            "min_hits": null,
            "max_hits": null
        },
        "origin-pulse": {
            "name": "origin-pulse",
            "effect_chance": null,
            "id": 618,
            "pp": 10,
            "accuracy": 85,
            "power": 110,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "aqua-tail": {
            "name": "aqua-tail",
            "effect_chance": null,
            "id": 401,
            "pp": 10,
            "accuracy": 90,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hydro-vortex--special": {
            "name": "hydro-vortex--special",
            "effect_chance": null,
            "id": 643,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "hydro-vortex--physical": {
            "name": "hydro-vortex--physical",
            "effect_chance": null,
            "id": 642,
            "pp": 1,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "oceanic-operetta": {
            "name": "oceanic-operetta",
            "effect_chance": null,
            "id": 697,
            "pp": 1,
            "accuracy": null,
            "power": 195,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "water-sport": {
            "name": "water-sport",
            "effect_chance": null,
            "id": 346,
            "pp": 15,
            "accuracy": null,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/10/",
                    "name": "whole-field-effect"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/3/",
                "name": "cute"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/1/"
            },
            "priority": 0,
            "target": "entire-field",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "sparkling-aria": {
            "name": "sparkling-aria",
            "effect_chance": null,
            "id": 664,
            "pp": 10,
            "accuracy": 100,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "all-other-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "aqua-jet": {
            "name": "aqua-jet",
            "effect_chance": null,
            "id": 453,
            "pp": 20,
            "accuracy": 100,
            "power": 40,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": null,
            "priority": 1,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "water-spout": {
            "name": "water-spout",
            "effect_chance": null,
            "id": 323,
            "pp": 5,
            "accuracy": 100,
            "power": 150,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/26/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "soak": {
            "name": "soak",
            "effect_chance": null,
            "id": 487,
            "pp": 20,
            "accuracy": 100,
            "power": null,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/13/",
                    "name": "unique"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "status",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "muddy-water": {
            "name": "muddy-water",
            "effect_chance": 30,
            "id": 330,
            "pp": 10,
            "accuracy": 85,
            "power": 90,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 30,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/5/",
                "name": "tough"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/10/"
            },
            "priority": 0,
            "target": "all-opponents",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "water-pledge": {
            "name": "water-pledge",
            "effect_chance": null,
            "id": 518,
            "pp": 10,
            "accuracy": 100,
            "power": 80,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/0/",
                    "name": "damage"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "bubble-beam": {
            "name": "bubble-beam",
            "effect_chance": 10,
            "id": 61,
            "pp": 20,
            "accuracy": 100,
            "power": 65,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 10,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": {
                "url": "https://pokeapi.co/api/v2/contest-type/2/",
                "name": "beauty"
            },
            "contest_effect": {
                "url": "https://pokeapi.co/api/v2/contest-effect/5/"
            },
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "special",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "liquidation": {
            "name": "liquidation",
            "effect_chance": 20,
            "id": 710,
            "pp": 10,
            "accuracy": 100,
            "power": 85,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 0,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        },
        "razor-shell": {
            "name": "razor-shell",
            "effect_chance": 50,
            "id": 534,
            "pp": 10,
            "accuracy": 95,
            "power": 75,
            "meta": {
                "category": {
                    "url": "https://pokeapi.co/api/v2/move-category/6/",
                    "name": "damage+lower"
                },
                "healing": 0,
                "max_turns": null,
                "drain": 0,
                "ailment": {
                    "url": "https://pokeapi.co/api/v2/move-ailment/0/",
                    "name": "none"
                },
                "stat_chance": 50,
                "flinch_chance": 0,
                "min_hits": null,
                "ailment_chance": 0,
                "crit_rate": 0,
                "min_turns": null,
                "max_hits": null
            },
            "contest_type": null,
            "contest_effect": null,
            "priority": 0,
            "target": "selected-pokemon",
            "damage_class": "physical",
            "healing": 0,
            "crit_rate": 0,
            "min_turns": null,
            "max_turns": null,
            "min_hits": null,
            "max_hits": null
        }
    }
}
