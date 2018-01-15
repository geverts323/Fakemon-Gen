//all dictionaries stored here

//stored data for nat modifiers
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
// Structue:
// "Attacking": {
//      "Defending": EffValue,
//      ...}
var types = {
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


var moves = {
    "fire": {
        "fire-punch":{
            "url": "https://pokeapi.co/api/v2/move/7/",
            "name": "fire-punch"
            "contest_type": "beauty"
            "priority": 0,
            "accuracy": 100,
            "power": 75,
            "target": "selected-pokemon"
    },
        "ember": {
            "url": "https://pokeapi.co/api/v2/move/52/",
            "name": "ember"
    },
        "flamethrower": {
            "url": "https://pokeapi.co/api/v2/move/53/",
            "name": "flamethrower"
    },
        "fire-spin": {
            "url": "https://pokeapi.co/api/v2/move/83/",
            "name": "fire-spin"
    },
        "fire-blast": {
            "url": "https://pokeapi.co/api/v2/move/126/",
            "name": "fire-blast"
    },
        "flame-wheel": {
            "url": "https://pokeapi.co/api/v2/move/172/",
            "name": "flame-wheel"
    },
        "sacred-fire": {
            "url": "https://pokeapi.co/api/v2/move/221/",
            "name": "sacred-fire"
    },
        "sunny-day": {
            "url": "https://pokeapi.co/api/v2/move/241/",
            "name": "sunny-day"
    },
        "heat-wave": {
            "url": "https://pokeapi.co/api/v2/move/257/",
            "name": "heat-wave"
    },
        "will-o-wisp": {
            "url": "https://pokeapi.co/api/v2/move/261/",
            "name": "will-o-wisp"
    },
        "eruption": {
            "url": "https://pokeapi.co/api/v2/move/284/",
            "name": "eruption"
    },
        "blaze-kick": {
            "url": "https://pokeapi.co/api/v2/move/299/",
            "name": "blaze-kick"
    },
        "blast-burn": {
            "url": "https://pokeapi.co/api/v2/move/307/",
            "name": "blast-burn"
    },
        "overheat": {
            "url": "https://pokeapi.co/api/v2/move/315/",
            "name": "overheat"
    },
        "flare-blitz": {
            "url": "https://pokeapi.co/api/v2/move/394/",
            "name": "flare-blitz"
    },
        "fire-fang": {
            "url": "https://pokeapi.co/api/v2/move/424/",
            "name": "fire-fang"
    },
        "lava-plume": {
            "url": "https://pokeapi.co/api/v2/move/436/",
            "name": "lava-plume"
    },
        "magma-storm": {
            "url": "https://pokeapi.co/api/v2/move/463/",
            "name": "magma-storm"
    },
        "flame- burst": {
            "url": "https://pokeapi.co/api/v2/move/481/",
            "name": "flame-burst"
    },
        "flame-charge": {
            "url": "https://pokeapi.co/api/v2/move/488/",
            "name": "flame-charge"
    },
        "incinerate": {
            "url": "https://pokeapi.co/api/v2/move/510/",
            "name": "incinerate"
    },
        "inferno": {
            "url": "https://pokeapi.co/api/v2/move/517/",
            "name": "inferno"
    },
        "fire-pledge": {
            "url": "https://pokeapi.co/api/v2/move/519/",
            "name": "fire-pledge"
    },
        "heat-crash": {
            "url": "https://pokeapi.co/api/v2/move/535/",
            "name": "heat-crash"
    },
        "searing-shot": {
            "url": "https://pokeapi.co/api/v2/move/545/",
            "name": "searing-shot"
    },
        "blue-flare": {
            "url": "https://pokeapi.co/api/v2/move/551/",
            "name": "blue-flare"
    },
        "fiery-dance": {
            "url": "https://pokeapi.co/api/v2/move/552/",
            "name": "fiery-dance"
    },
        "v-create": {
            "url": "https://pokeapi.co/api/v2/move/557/",
            "name": "v-create"
    },
        "fusion-flare": {
            "url": "https://pokeapi.co/api/v2/move/558/",
            "name": "fusion-flare"
    },
        "mystical-fire": {
            "url": "https://pokeapi.co/api/v2/move/595/",
            "name": "mystical-fire"
    },
        "fire-lash": {
            "url": "https://pokeapi.co/api/v2/move/680/",
            "name": "fire-lash"
    },
        "burn-up": {
            "url": "https://pokeapi.co/api/v2/move/682/",
            "name": "burn-up"
    },
        "shell-trap": {
            "url": "https://pokeapi.co/api/v2/move/704/",
            "name": "shell-trap"
    }
    },
    "z-moves" {
        "inferno-overdrive-p": {
            "url": "https://pokeapi.co/api/v2/move/640/",
            "name": "inferno-overdrive--physical"
    },
        "inferno-overdrive-s": {
            "url": "https://pokeapi.co/api/v2/move/641/",
            "name": "inferno-overdrive--special"
    },
    }
}
