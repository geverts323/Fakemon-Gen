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
var berries = {
    "Cheri Berry": {
        "natural_gift_power": 60,
        "flavors": {
            {
                "flavor": {
                    "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                    "name": "spicy"
                },
                "potency": 10
            },
            {
                "flavor": {
                    "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                    "name": "dry"
                },
                "potency": 0
            },
            {
                "flavor": {
                    "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                    "name": "sweet"
                },
                "potency": 0
            },
            {
                "flavor": {
                    "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                    "name": "bitter"
                },
                "potency": 0
            },
            {
                "flavor": {
                    "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                    "name": "sour"
                },
                "potency": 0
            }
        ],
        "natural_gift_type": {
            "url": "https://pokeapi.co/api/v2/type/10/",
            "name": "fire"
        },
        "name": "cheri",
        "max_harvest": 5,
        "soil_dryness": 15,
        "smoothness": 25,
        "item": {
            "url": "https://pokeapi.co/api/v2/item/126/",
            "name": "cheri-berry"
        },
        "firmness": {
            "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
            "name": "soft"
        },
        "growth_time": 3,
        "id": 1,
        "size": 20
    }
}
"Chesto Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/11/",
        "name": "water"
    },
    "name": "chesto",
    "max_harvest": 5,
    "soil_dryness": 15,
    "smoothness": 25,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/127/",
        "name": "chesto-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/5/",
        "name": "super-hard"
    },
    "growth_time": 3,
    "id": 2,
    "size": 80
}

"Pecha Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/13/",
        "name": "electric"
    },
    "name": "pecha",
    "max_harvest": 5,
    "soil_dryness": 15,
    "smoothness": 25,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/128/",
        "name": "pecha-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/1/",
        "name": "very-soft"
    },
    "growth_time": 3,
    "id": 3,
    "size": 40
}

"Rawst Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/12/",
        "name": "grass"
    },
    "name": "rawst",
    "max_harvest": 5,
    "soil_dryness": 15,
    "smoothness": 25,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/129/",
        "name": "rawst-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 3,
    "id": 4,
    "size": 32
}

"Aspear Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/15/",
        "name": "ice"
    },
    "name": "aspear",
    "max_harvest": 5,
    "soil_dryness": 15,
    "smoothness": 25,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/130/",
        "name": "aspear-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/5/",
        "name": "super-hard"
    },
    "growth_time": 3,
    "id": 5,
    "size": 50
}

"Leppa Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/2/",
        "name": "fighting"
    },
    "name": "leppa",
    "max_harvest": 5,
    "soil_dryness": 15,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/131/",
        "name": "leppa-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/4/",
        "name": "very-hard"
    },
    "growth_time": 4,
    "id": 6,
    "size": 28
}

"Oran Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/4/",
        "name": "poison"
    },
    "name": "oran",
    "max_harvest": 5,
    "soil_dryness": 15,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/132/",
        "name": "oran-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/5/",
        "name": "super-hard"
    },
    "growth_time": 4,
    "id": 7,
    "size": 35
}

"Persim Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/5/",
        "name": "ground"
    },
    "name": "persim",
    "max_harvest": 5,
    "soil_dryness": 15,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/133/",
        "name": "persim-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 4,
    "id": 8,
    "size": 47
}

"Lum Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/3/",
        "name": "flying"
    },
    "name": "lum",
    "max_harvest": 5,
    "soil_dryness": 8,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/134/",
        "name": "lum-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/5/",
        "name": "super-hard"
    },
    "growth_time": 12,
    "id": 9,
    "size": 34
}

"Sitrus Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/14/",
        "name": "psychic"
    },
    "name": "sitrus",
    "max_harvest": 5,
    "soil_dryness": 7,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/135/",
        "name": "sitrus-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/4/",
        "name": "very-hard"
    },
    "growth_time": 8,
    "id": 10,
    "size": 95
}

"Figy Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 15
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/7/",
        "name": "bug"
    },
    "name": "figy",
    "max_harvest": 5,
    "soil_dryness": 10,
    "smoothness": 25,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/136/",
        "name": "figy-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 5,
    "id": 11,
    "size": 100
}

"Wiki Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 15
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/6/",
        "name": "rock"
    },
    "name": "wiki",
    "max_harvest": 5,
    "soil_dryness": 10,
    "smoothness": 25,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/137/",
        "name": "wiki-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 5,
    "id": 12,
    "size": 115
}

"Mago Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 15
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/8/",
        "name": "ghost"
    },
    "name": "mago",
    "max_harvest": 5,
    "soil_dryness": 10,
    "smoothness": 25,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/138/",
        "name": "mago-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 5,
    "id": 13,
    "size": 126
}

"Aguav Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 15
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/16/",
        "name": "dragon"
    },
    "name": "aguav",
    "max_harvest": 5,
    "soil_dryness": 10,
    "smoothness": 25,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/139/",
        "name": "aguav-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/5/",
        "name": "super-hard"
    },
    "growth_time": 5,
    "id": 14,
    "size": 64
}

"Iapapa Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 15
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/17/",
        "name": "dark"
    },
    "name": "iapapa",
    "max_harvest": 5,
    "soil_dryness": 10,
    "smoothness": 25,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/140/",
        "name": "iapapa-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 5,
    "id": 15,
    "size": 223
}

"Razz Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/9/",
        "name": "steel"
    },
    "name": "razz",
    "max_harvest": 10,
    "soil_dryness": 35,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/141/",
        "name": "razz-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/4/",
        "name": "very-hard"
    },
    "growth_time": 2,
    "id": 16,
    "size": 120
}

"Bluk Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/10/",
        "name": "fire"
    },
    "name": "bluk",
    "max_harvest": 10,
    "soil_dryness": 35,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/142/",
        "name": "bluk-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 2,
    "id": 17,
    "size": 108
}

"Nanab Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/11/",
        "name": "water"
    },
    "name": "nanab",
    "max_harvest": 10,
    "soil_dryness": 35,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/143/",
        "name": "nanab-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/4/",
        "name": "very-hard"
    },
    "growth_time": 2,
    "id": 18,
    "size": 77
}

"Wepear Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/13/",
        "name": "electric"
    },
    "name": "wepear",
    "max_harvest": 10,
    "soil_dryness": 35,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/144/",
        "name": "wepear-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/5/",
        "name": "super-hard"
    },
    "growth_time": 2,
    "id": 19,
    "size": 74
}

"Pinap Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/12/",
        "name": "grass"
    },
    "name": "pinap",
    "max_harvest": 10,
    "soil_dryness": 35,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/145/",
        "name": "pinap-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 2,
    "id": 20,
    "size": 80
}

"Pomeg Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/15/",
        "name": "ice"
    },
    "name": "pomeg",
    "max_harvest": 5,
    "soil_dryness": 8,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/146/",
        "name": "pomeg-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/4/",
        "name": "very-hard"
    },
    "growth_time": 8,
    "id": 21,
    "size": 135
}

"Kelpsy Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/2/",
        "name": "fighting"
    },
    "name": "kelpsy",
    "max_harvest": 5,
    "soil_dryness": 8,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/147/",
        "name": "kelpsy-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 8,
    "id": 22,
    "size": 150
}

"Qualot Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/4/",
        "name": "poison"
    },
    "name": "qualot",
    "max_harvest": 5,
    "soil_dryness": 8,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/148/",
        "name": "qualot-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 8,
    "id": 23,
    "size": 110
}

"Hondew Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/5/",
        "name": "ground"
    },
    "name": "hondew",
    "max_harvest": 5,
    "soil_dryness": 8,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/149/",
        "name": "hondew-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 8,
    "id": 24,
    "size": 162
}

"Grepa Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/3/",
        "name": "flying"
    },
    "name": "grepa",
    "max_harvest": 5,
    "soil_dryness": 8,
    "smoothness": 20,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/150/",
        "name": "grepa-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 8,
    "id": 25,
    "size": 149
}

"Tamato Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 20
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/14/",
        "name": "psychic"
    },
    "name": "tamato",
    "max_harvest": 5,
    "soil_dryness": 8,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/151/",
        "name": "tamato-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 8,
    "id": 26,
    "size": 200
}

"Cornn Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 20
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/7/",
        "name": "bug"
    },
    "name": "cornn",
    "max_harvest": 10,
    "soil_dryness": 10,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/152/",
        "name": "cornn-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 6,
    "id": 27,
    "size": 75
}

"Magost Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 20
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/6/",
        "name": "rock"
    },
    "name": "magost",
    "max_harvest": 10,
    "soil_dryness": 10,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/153/",
        "name": "magost-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 6,
    "id": 28,
    "size": 140
}

"Rabuta Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 20
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/8/",
        "name": "ghost"
    },
    "name": "rabuta",
    "max_harvest": 10,
    "soil_dryness": 10,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/154/",
        "name": "rabuta-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 6,
    "id": 29,
    "size": 226
}

"Nomel Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 20
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/16/",
        "name": "dragon"
    },
    "name": "nomel",
    "max_harvest": 10,
    "soil_dryness": 10,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/155/",
        "name": "nomel-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/5/",
        "name": "super-hard"
    },
    "growth_time": 6,
    "id": 30,
    "size": 285
}

"Spelon Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 30
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/17/",
        "name": "dark"
    },
    "name": "spelon",
    "max_harvest": 15,
    "soil_dryness": 8,
    "smoothness": 35,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/156/",
        "name": "spelon-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 15,
    "id": 31,
    "size": 133
}

"Pamtre Berry": {
    "natural_gift_power": 70,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 30
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/9/",
        "name": "steel"
    },
    "name": "pamtre",
    "max_harvest": 15,
    "soil_dryness": 8,
    "smoothness": 35,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/157/",
        "name": "pamtre-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/1/",
        "name": "very-soft"
    },
    "growth_time": 15,
    "id": 32,
    "size": 244
}

"Watmel Berry": {
    "natural_gift_power": 80,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 30
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/10/",
        "name": "fire"
    },
    "name": "watmel",
    "max_harvest": 15,
    "soil_dryness": 8,
    "smoothness": 35,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/158/",
        "name": "watmel-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 15,
    "id": 33,
    "size": 250
}

"Durin Berry": {
    "natural_gift_power": 80,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 30
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/11/",
        "name": "water"
    },
    "name": "durin",
    "max_harvest": 15,
    "soil_dryness": 8,
    "smoothness": 35,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/159/",
        "name": "durin-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/3/",
        "name": "hard"
    },
    "growth_time": 15,
    "id": 34,
    "size": 280
}

"Belue Berry": {
    "natural_gift_power": 80,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 30
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/13/",
        "name": "electric"
    },
    "name": "belue",
    "max_harvest": 15,
    "soil_dryness": 8,
    "smoothness": 35,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/160/",
        "name": "belue-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/1/",
        "name": "very-soft"
    },
    "growth_time": 15,
    "id": 35,
    "size": 300
}

"Occa Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 15
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/10/",
        "name": "fire"
    },
    "name": "occa",
    "max_harvest": 5,
    "soil_dryness": 6,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/161/",
        "name": "occa-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/5/",
        "name": "super-hard"
    },
    "growth_time": 18,
    "id": 36,
    "size": 90
}

"Passho Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 15
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/11/",
        "name": "water"
    },
    "name": "passho",
    "max_harvest": 5,
    "soil_dryness": 6,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/162/",
        "name": "passho-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 18,
    "id": 37,
    "size": 33
}

"Wacan Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 15
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 10
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/13/",
        "name": "electric"
    },
    "name": "wacan",
    "max_harvest": 5,
    "soil_dryness": 6,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/163/",
        "name": "wacan-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/1/",
        "name": "very-soft"
    },
    "growth_time": 18,
    "id": 38,
    "size": 250
}

"Rindo Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 15
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 0
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/12/",
        "name": "grass"
    },
    "name": "rindo",
    "max_harvest": 5,
    "soil_dryness": 6,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/164/",
        "name": "rindo-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/2/",
        "name": "soft"
    },
    "growth_time": 18,
    "id": 39,
    "size": 156
}
//40
"Yache Berry": {
    "natural_gift_power": 60,
    "flavors": [{
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/1/",
                "name": "spicy"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/2/",
                "name": "dry"
            },
            "potency": 10
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/3/",
                "name": "sweet"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/4/",
                "name": "bitter"
            },
            "potency": 0
        },
        {
            "flavor": {
                "url": "https://pokeapi.co/api/v2/berry-flavor/5/",
                "name": "sour"
            },
            "potency": 15
        }
    ],
    "natural_gift_type": {
        "url": "https://pokeapi.co/api/v2/type/15/",
        "name": "ice"
    },
    "name": "yache",
    "max_harvest": 5,
    "soil_dryness": 6,
    "smoothness": 30,
    "item": {
        "url": "https://pokeapi.co/api/v2/item/165/",
        "name": "yache-berry"
    },
    "firmness": {
        "url": "https://pokeapi.co/api/v2/berry-firmness/4/",
        "name": "very-hard"
    },
    "growth_time": 18,
    "id": 40,
    "size": 135
}


}
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
