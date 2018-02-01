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

//stored data for moves sorted by type
// var moves = {
//         "fire": {
//             "fire-punch": {
//                 "url": "https://pokeapi.co/api/v2/move/7/",
//                 "name": "fire-punch",
//                 "contest_type": "beauty",
//                 "priority": 0,
//                 "accuracy": 100,
//                 "power": 75,
//                 "target": "selected-pokemon"
//             },
//             "ember": {
//                 "url": "https://pokeapi.co/api/v2/move/52/",
//                 "name": "ember",
//                 "contest_type": "beauty",
//                 "priority": 0,
//                 "accuracy": 100,
//                 "power": 40,
//                 "target": "selected-pokemon"
//             },
//             "flamethrower": {
//                 "url": "https://pokeapi.co/api/v2/move/53/",
//                 "name": "flamethrower",
//                 "contest_type": "beauty",
//                 "priority": 0,
//                 "accuracy": 100,
//                 "power": 90,
//                 "target": "selected-pokemon"
//             },
//             "fire-spin": {
//                 "url": "https://pokeapi.co/api/v2/move/83/",
//                 "name": "fire-spin",
//                 "contest_type": "beauty",
//                 "priority": 0,
//                 "accuracy": 85,
//                 "power": 35,
//                 "target": "selected-pokemon"
//             },
//
//
//
//
//
//
//
//             "fire-blast": {
//                 "url": "https://pokeapi.co/api/v2/move/126/",
//                 "name": "fire-blast",
//                 "pp": 5,
//                 "effect": "Inflicts regular damage.  Has a $effect_chance% chance to burn the target.",
//                 "contest_type": "beauty",
//                 "priority": 0,
//                 "accuracy": 85,
//                 "power": 110,
//                 "target": "selected-pokemon"
//             },
//             "flame-wheel": {
//                 "url": "https://pokeapi.co/api/v2/move/172/",
//                 "name": "flame-wheel",
//                 "effect": "Inflicts regular damage.  Has a $effect_chance% chance to burn the target.  Frozen Pokémon may use this move, in which case they will thaw.",
//                 "contest_type": "beauty",
//                 "priority": 0,
//                 "accuracy": 100,
//                 "power": 60,
//                 "target": "selected-pokemon"
//             },
//             // "sacred-fire": {
//             //     "url": "https://pokeapi.co/api/v2/move/221/",
//             //     "name": "sacred-fire",
//             //     "effect": "Inflicts regular damage: has a 50% chance to burn the target. Frozen Pokemon may use this move, in which case they will thaw",
//             //     "contest_type": "beauty",
//             //     "priority": ?,
//             //     "accuracy": 95,
//             //     "power": 100,
//             //     "target": ?
//             // },
//             "sunny-day": {
//                 "url": "https://pokeapi.co/api/v2/move/241/",
//                 "name": "sunny-day"
//             },
//             "heat-wave": {
//                 "url": "https://pokeapi.co/api/v2/move/257/",
//                 "name": "heat-wave"
//             },
//             "will-o-wisp": {
//                 "url": "https://pokeapi.co/api/v2/move/261/",
//                 "name": "will-o-wisp"
//             },
//             "eruption": {
//                 "url": "https://pokeapi.co/api/v2/move/284/",
//                 "name": "eruption"
//             },
//             "blaze-kick": {
//                 "url": "https://pokeapi.co/api/v2/move/299/",
//                 "name": "blaze-kick"
//             },
//             "blast-burn": {
//                 "url": "https://pokeapi.co/api/v2/move/307/",
//                 "name": "blast-burn"
//             },
//             "overheat": {
//                 "url": "https://pokeapi.co/api/v2/move/315/",
//                 "name": "overheat"
//             },
//             "flare-blitz": {
//                 "url": "https://pokeapi.co/api/v2/move/394/",
//                 "name": "flare-blitz"
//             },
//             "fire-fang": {
//                 "url": "https://pokeapi.co/api/v2/move/424/",
//                 "name": "fire-fang"
//             },
//             "lava-plume": {
//                 "url": "https://pokeapi.co/api/v2/move/436/",
//                 "name": "lava-plume"
//             },
//             "magma-storm": {
//                 "url": "https://pokeapi.co/api/v2/move/463/",
//                 "name": "magma-storm"
//             },
//             "flame- burst": {
//                 "url": "https://pokeapi.co/api/v2/move/481/",
//                 "name": "flame-burst"
//             },
//             "flame-charge": {
//                 "url": "https://pokeapi.co/api/v2/move/488/",
//                 "name": "flame-charge"
//             },
//             "incinerate": {
//                 "url": "https://pokeapi.co/api/v2/move/510/",
//                 "name": "incinerate"
//             },
//             "inferno": {
//                 "url": "https://pokeapi.co/api/v2/move/517/",
//                 "name": "inferno"
//             },
//             "fire-pledge": {
//                 "url": "https://pokeapi.co/api/v2/move/519/",
//                 "name": "fire-pledge"
//             },
//             "heat-crash": {
//                 "url": "https://pokeapi.co/api/v2/move/535/",
//                 "name": "heat-crash"
//             },
//             "searing-shot": {
//                 "url": "https://pokeapi.co/api/v2/move/545/",
//                 "name": "searing-shot"
//             },
//             "blue-flare": {
//                 "url": "https://pokeapi.co/api/v2/move/551/",
//                 "name": "blue-flare"
//             },
//             "fiery-dance": {
//                 "url": "https://pokeapi.co/api/v2/move/552/",
//                 "name": "fiery-dance"
//             },
//             "v-create": {
//                 "url": "https://pokeapi.co/api/v2/move/557/",
//                 "name": "v-create"
//             },
//             "fusion-flare": {
//                 "url": "https://pokeapi.co/api/v2/move/558/",
//                 "name": "fusion-flare"
//             },
//             "mystical-fire": {
//                 "url": "https://pokeapi.co/api/v2/move/595/",
//                 "name": "mystical-fire"
//             },
//             "fire-lash": {
//                 "url": "https://pokeapi.co/api/v2/move/680/",
//                 "name": "fire-lash"
//             },
//             "burn-up": {
//                 "url": "https://pokeapi.co/api/v2/move/682/",
//                 "name": "burn-up"
//             },
//             "shell-trap": {
//                 "url": "https://pokeapi.co/api/v2/move/704/",
//                 "name": "shell-trap"
//             },
//         }
//     "z-moves" {
//         "inferno-overdrive-p": {
//             "url": "https://pokeapi.co/api/v2/move/640/",
//             "name": "inferno-overdrive--physical"
//         },
//         "inferno-overdrive-s": {
//             "url": "https://pokeapi.co/api/v2/move/641/",
//             "name": "inferno-overdrive--special"
//         }
//     }
//     }